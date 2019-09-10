# from CarbCount.models import Practioner, Diabetic, Recipe, Meal, Log 
# from rest_framework import serializers


# class PractionerSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Practioner
#         fields = (
#             'first_name',
#             'last_name',
#             'clinic_name',
#             'license_id'
#         )


# class DiabeticSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Diabetic
#         fields = (
#             'first_name',
#             'last_name',
#             'email',
#             'morning_ratio',
#             'afternoon_ratio',
#             'evening_ratio',
#             'night_ratio',
#             'morning_cor_factor',
#             'afternoon_cor_factor',
#             'evening_cor_factor',
#             'night_cor_factor',
#             'morning_target',
#             'afternoon_target',
#             'evening_target',
#             'night_target',
#             'insulin_duration',
#             'insulin_type',
#             'practitioner_id'
#         )


# class RecipeSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Recipe
#         fields = (
#             'name',
#             'total_carbs',
#             'total_fibre',
#             'ingredients',
#             'total_servings',
#             'description',
#             'tags',
#             'image_link',
#             'diabetic_id'
#         )


# class MealSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Meal
#         fields = (
#             'date',
#             'food',
#             'carbs',
#             'fibre',
#             'meal_type',
#             'blood_glucose',
#             'insulin_dose'
#         )


# class LogSerializer(serializers.ModelSerializer):
    
#     class Meta:
#         model = Log
#         fields = (
#             'meal_id',
#             'diabetic_id'
#         )