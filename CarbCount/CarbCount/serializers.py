from CarbCount.models import Practitioner, Diabetic, Recipe, Meal, Log 

from django.contrib.auth.models import User, Group
from rest_framework import serializers



class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name') 


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
