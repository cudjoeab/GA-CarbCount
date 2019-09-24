import logging
import os
from django.contrib.auth.models import User, Group
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status, parsers


from CarbCount.models import User, Practitioner, Diabetic, Recipe, Meal, Log
from rest_framework import viewsets, permissions
from CarbCount.serializers import UserSerializer, PractitionerSerializer, DiabeticSerializer, RecipeSerializer, MealSerializer, LogSerializer
# viewsets allows us to CRUD without defining all the methods

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.AllowAny,)
        return super(UserViewSet, self).get_permissions()

    def list(self, request):
        # This is how to we check for a specific user and create different fiters for the same query
        if request.user.id == 1:
            queryset = User.objects.all()
        else: 
            queryset = User.objects.filter(Q(username=request.user.username)).all()

        serializer = UserSerializer(queryset, many = True)
        return Response(serializer.data)



class PractitionerViewSet(viewsets.ModelViewSet):
    '''Api endpoint for Practitioner Profile'''
    queryset = Practitioner.objects.all().order_by('id')
    serializer_class = PractitionerSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (permissions.AllowAny,)
        return super(PractitionerViewSet, self).get_permissions()


class DiabeticViewSet(viewsets.ModelViewSet):
    '''Api endpoint for Diabetic Profile'''
    queryset = Diabetic.objects.all().order_by('id')
    serializer_class = DiabeticSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (permissions.AllowAny,)
        return super(DiabeticViewSet, self).get_permissions()

    def list(self, request):
        # This is how to we check for a specific diabetic and create different fiters for the same query
        if request.user.id == 1:
            print("ADMIN")
            queryset = Diabetic.objects.all()
        else: 
            print("NOT ADMIN")
            print(request.user)
            print(request.user.id)
            queryset = Diabetic.objects.filter(Q(owner_id=2)).all()

        serializer = DiabeticSerializer(queryset, many = True)
        return Response(serializer.data)


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all().order_by('id')
    serializer_class = MealSerializer
    # define who is able to query the data 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (permissions.AllowAny,)
        return super(MealViewSet, self).get_permissions() 
    

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated,]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (permissions.AllowAny,)
        return super(RecipeViewSet, self).get_permissions()


class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    permission_classes = [permissions.AllowAny]
      


