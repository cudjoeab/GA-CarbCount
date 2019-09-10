
from django.db import models
from django.contrb.auth.models import User

from django.core.validators import {
    MinValueValidator,
    MaxValueValidator
}

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    morning_ratio = models.FloatField()
    afternoon_ratio = models.FloatField()
    evening_ratio = models.FloatField()
    night_ratio = models.FloatField()
    moring_cor_factor = models.FloatField()
    afternoon_cor_factor = models.FloatField()
    evening_cor_factor = models.FloatField()
    night_cor_factor = models.FloatField()
    moring_target = models.FloatField()
    afternoon_target = models.FloatField()
    evening_target = models.FloatField()
    night_target = models.FloatField()
    insulin_duration = models.FloatField()
    insulin_type = CharField(max_length=255)
    practcioner_id = models.ForeignKey(Practioner, models.on_delete=models.CASCADE, default=None, related_name="practioner")

    def __str__(self):
        return f'User: {self.first_name} - {self.last_name} - {self.email}'

class Practioner(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    clinic_name = models.CharField(max_length=255)
    license = models.IntegerField()

    def __str__(self):
        return f'Practioner: {self.first_name} - {self.last_name}'

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    total_carbs = models.IntegerField(validators=[MinValueValidator(1)], null=True)
    total_fibre = models.IntegerField(validators=[MinValueValidator(1)], null=True)
    ingredients = models.IntegerField()
    total_servings = model.IntegerField()
    description = models.IntegerField()
    tags = models.CharField(max_length=255)
    image_link = models.CharField(max_length=255)
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="users"
    )
    
    def __str__(self):
        return f'{self.name} - {self.total_carbs} carbs - {self.total_fibre} fibre'

class Meal(models.Model): 
    date = models.DateField()
    food = [] 
    carbs = models.FloatField()
    fibre = models.FloatField()
    meal_type = models.CharField()
    blood_glucose = models.FloatField()
    insulin_dose = models.FloatField() 
    
    def __str__(self):
        return f'''
        date: {self.date} \n
        food: {self.food} \n
        total carbs: {self.carb} grams of carb \n
        meal_type: {self.meal_type} \n
        blood_glucose: Your blood sugar is {self.blood_glucose} mmol/L \n
        insulin_dose: Please take {self.insulin_dose} units of {User.insulin_type}\n 
        '''    

class Log(models.Model):
    meal_id = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name ="meal")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")

    def __str__(self):
        return f'Log: {self.meal_id} - {self.user_id}'
    
