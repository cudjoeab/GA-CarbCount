from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

from django.core.validators import ( MinLengthValidator, MaxLengthValidator,MinValueValidator, MaxValueValidator,  )

import requests
import datetime
class Practitioner(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    clinic_name = models.CharField(max_length=255)
    license_id = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(20)], null=False)

    def __str__(self):
        return f'Practitioner: {self.first_name} - {self.last_name}'

class Diabetic(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=200)
    morning_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False)
    afternoon_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False)
    evening_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False)
    night_ratio = models.FloatField(validators=[MinValueValidator(0)], null=False)
    morning_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False)
    afternoon_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False)
    evening_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False)
    night_cor_factor = models.FloatField(validators=[MinValueValidator(0)], null=False)
    morning_target = models.FloatField(validators=[MinValueValidator(0)], null=False)
    afternoon_target = models.FloatField(validators=[MinValueValidator(0)], null=False)
    evening_target = models.FloatField(validators=[MinValueValidator(0)], null=False)
    night_target = models.FloatField(validators=[MinValueValidator(0)], null=False)
    insulin_duration = models.FloatField()
    insulin_type = models.CharField(max_length=255)
    practitioner_id = models.ForeignKey(Practitioner, on_delete=models.CASCADE, blank=True, null=True, related_name="practitioner")

    def __str__(self):
        return f'Diabetic: {self.first_name} - {self.last_name} - {self.email}'

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
        return f'{self.name} - {self.total_carbs} carbs - {self.total_fibre} fibre'

class Meal(models.Model): 
    date = models.DateField()
    food = ArrayField(models.CharField(max_length=255, blank=True)) 
    carbs = models.FloatField(validators=[MinValueValidator(0)], null=False)
    fibre = models.FloatField(validators=[MinValueValidator(0)], null=False)
    meal_type = models.CharField(max_length=255)
    blood_glucose = models.FloatField(validators=[MinValueValidator(0)], null=True)
    insulin_dose = models.FloatField(validators=[MinValueValidator(0)], null=False) 
    
    def __str__(self):
        return f'''
        date: {self.date} \n
        food: {self.food} \n
        total carbs: {self.carbs} grams of carb \n
        meal_type: {self.meal_type} \n
        blood_glucose: Your blood sugar is {self.blood_glucose} mmol/L \n
        insulin_dose: Please take {self.insulin_dose} units of {Diabetic.insulin_type}\n 
        Enjoy your {self.}! 
        '''    
    def calculate_net_carb(food):
        net_carb = 0
        for f in food:
            net_carb += f["carb"] 
        return net_carb  

    def calculate_net_fibre(food):
        net_fibre = 0
        for f in food:
            net_fibre += f["fibre"] 
        return net_fibre  

    def total_carb(food): 
        net_carb = calculate_net_carb(food)
        net_fibre = calculate_net_fibre(food)
        total_carb = net_carb - net_fibre
    return total_carb  

    def  dose_meal_ratio():
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

    def total_meal_dose(total_carb):
        return carbs / dose_meal_ratio()

    def corr_ratio():
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

    def total_cor_dose(glucose):
        target = 5.6 
        return glucose - target / dose_meal_ratio()

    def  total_dose(self):
        return total_meal_dose + total_cor_dose 


class Log(models.Model):
    meal_id = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name ="meal")
    diabetic_id = models.ForeignKey(Diabetic, on_delete=models.CASCADE, related_name="diabetic")

    def __str__(self):
        return f'Log: {self.meal_id} - {self.diabetic_id}'
    
