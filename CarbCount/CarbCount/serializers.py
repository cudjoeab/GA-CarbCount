from CarbCount.models import User, Practitioner, Diabetic, Recipe, Meal, Log 
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = "__all__"

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class PractitionerSerializer(serializers.ModelSerializer):
    
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