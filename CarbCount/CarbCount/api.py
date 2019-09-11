from CarbCount.models import Practitioner, Diabetic, Recipe, Meal, Log
from rest_framework import viewsets, permissions
from .serializers import PractitonerSerializer, DiabeticSerializer, RecipeSerializer, MealSerializer, LogSerializer
# viewsets allows us to CRUD without defining all the methods

class PractitionerViewSet(viewsets.ModelViewSet):
    querySet = Practitioner.objects.all()
    serializer_class = PractitonerSerializer
    permission_classes = [permissions.AllowAny]

# class DiabeticViewSet(viewsets.ModelViewSet):
#     querySet = Diabetic.objects.all()
#     serializer_class = DiabeticSerializer
#     permission_classes = [permissions.AllowAny]

# class MealViewSet(viewsets.ModelViewSet): 
#     queryset = Meal.objects.all()
#     serializer_class = MealSerializer 
#     # define who is able to query the data 
#     permission_classes = [permissions.AllowAny]   
    
# class RecipeViewSet(viewsets.ModelViewSet):
#     queryset = Recipe.objects.all()
#     serializer = RecipeSerializer
#     permission_classes = [permissions.AllowAny]

# class LogViewSet(viewsets.ModelViewSet):
#     querySet = Log.objects.all()
#     serializer_class = LogSerializer
#     permission_classes = [permissions.AllowAny]
      


