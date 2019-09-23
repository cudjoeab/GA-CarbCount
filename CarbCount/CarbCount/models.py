from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.core.validators import (
    MinLengthValidator, 
    MaxLengthValidator, 
    MinValueValidator, 
    MaxValueValidator
)

import datetime



class Practitioner(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    clinic_name = models.CharField(max_length=255)
    license_id = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(20)], null=False)

    def __str__(self):
        return f"Practitioner: {self.first_name} - {self.last_name}"

class Diabetic(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=200)
    morning_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    afternoon_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    evening_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    night_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    morning_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    afternoon_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    evening_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    night_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    morning_target = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    afternoon_target = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    evening_target = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    night_target = models.FloatField(validators=[MinValueValidator(0)], null=False, default=0)
    insulin_duration = models.FloatField(default=0)
    insulin_type = models.CharField(max_length=255)
    practitioner_id = models.ForeignKey(Practitioner, on_delete=models.CASCADE, blank=True, null=True, related_name="practitioner")

    def __str__(self):
        return f"Diabetic: {self.first_name} - {self.last_name} - {self.email}"

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Diabetic.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    diabetic = models.OneToOneField(Diabetic, on_delete=models.CASCADE)
    Practitioner = models.OneToOneField(Practitioner, on_delete=models.CASCADE)
    
class Recipe(models.Model):
    name = models.CharField(max_length=255)
    total_carbs = models.FloatField(validators=[MinValueValidator(0)], null=False)
    total_fibre = models.FloatField(validators=[MinValueValidator(0)], null=False)
    ingredients =ArrayField(models.CharField(max_length=225),default=list)
    total_servings = models.IntegerField(validators=[MinValueValidator(1)])
    description = models.TextField(
        validators=[MinLengthValidator(10), MaxLengthValidator(500)]
    )
    tags = models.CharField(max_length=255)
    image_link = models.URLField(max_length=255)
    diabetic_id = models.ForeignKey(
        Diabetic, on_delete=models.CASCADE, related_name="Diabetics"
    )

    def __str__(self):
        return f"{self.name} - {self.total_carbs} carbs - {self.total_fibre} fibre"

class Meal(models.Model): 
    date = models.DateField()
    food = ArrayField(models.CharField(max_length=255, blank=True)) 
    carbs = models.FloatField(validators=[MinValueValidator(0)], null=False)
    fibre = models.FloatField(validators=[MinValueValidator(0)], null=False)
    meal_type = models.CharField(max_length=255)
    blood_glucose = models.FloatField(validators=[MinValueValidator(0)], null=True)
    insulin_dose = models.FloatField(validators=[MinValueValidator(0)], null=False) 

    def __str__(self):
        return 'TODO: fix - tripple f-strings are wonky?'

    def calculate_net_carb(self, food):
        net_carb = 0
        for f in food:
            net_carb += f["carb"] 
        return net_carb  

    def calculate_net_fibre(self, food):
        net_fibre = 0
        for f in food:
            net_fibre += f["fibre"] 
        return net_fibre  

    def total_carb(self, food): 
        net_carb = calculate_net_carb(food)
        net_fibre = calculate_net_fibre(food)
        return net_carb - net_fibre  

    def  dose_meal_ratio(self):
        ratio = 5
        current_hour = datetime.datetime.now().hour

        if current_hour in range(4, 11): 
            ratio = 5 
        elif current_hour in range(10, 17):
            ratio = 5 
        elif current_hour in range(16, 23): 
            ratio = 4.5
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            ratio = 5 
        
        return ratio

    def total_meal_dose(self, total_carb):
        return carbs / dose_meal_ratio()

    def corr_ratio(self):
        cor_factor = 0 
        current_hour = datetime.datetime.now().hour
        if current_hour in range(4, 11): 
            cor_factor = 1.3
        elif current_hour in range(10, 17):
            cor_factor = 1.3 
        elif current_hour in range(16, 23): 
            cor_factor = 1.3 
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            cor_factor = 1.3  
        return cor_factor

    def total_cor_dose(self, glucose):
        target = 5.6 
        return glucose - target / dose_meal_ratio()

    def  total_dose(self):
        return total_meal_dose + total_cor_dose 


class Log(models.Model):
    meal_id = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name ="meal")
    diabetic_id = models.ForeignKey(Diabetic, on_delete=models.CASCADE, related_name="diabetic")

    def __str__(self):
        return f"Log: {self.meal_id} - {self.diabetic_id}"

def token_request(request):  # Adding this - Adam
    if user_requested_token() and token_request_is_warranted():
        new_token = Token.objects.create(user=request.user)