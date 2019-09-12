 """" 
 The instance methods here are to take care of any calculations required
 """
 
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.urls import reverse
from Carbcount.models import Practitioner, Diabetic, Recipe, Meal, Log
from CarbCount.api import PractitionerViewSet, DiabeticViewSet, MealViewSet, RecipeViewSet, MealViewSet, LogViewSet
from CarbCount.serializers import from CarbCount.serializers import PractitonerSerializer, DiabeticSerializer, RecipeSerializer, MealSerializer, LogSerializer
