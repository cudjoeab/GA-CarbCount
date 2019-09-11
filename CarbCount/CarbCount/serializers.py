from CarbCount.models import Practitioner, Diabetic, Recipe, Meal, Log 
from rest_framework import serializers


class PractitonerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Practitioner
        fields = "__all__"


class DiabeticSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Diabetic
        fields = "__all__"


class RecipeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Recipe
        fields = "__all__"


class MealSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Meal
        fields = "__all__"


class LogSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Log
        fields = "__all__"