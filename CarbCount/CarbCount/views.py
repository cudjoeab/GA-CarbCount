import logging
import os

from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from .models import *
from django.contrib.auth.models import User, Group 

from rest_framework import viewsets, permissions

from .serializers import *


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class GroupViewSet(viewsets.ModelViewSet):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

class PractitionerViewSet(viewsets.ModelViewSet):
    querySet = Practitioner.objects.all()
    serializer_class = PractitionerSerializer
    permission_classes = [permissions.AllowAny]

class DiabeticViewSet(viewsets.ModelViewSet):
    querySet = Diabetic.objects.all()
    serializer_class = DiabeticSerializer
    permission_classes = [permissions.AllowAny]

class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer 
    # define who is able to query the data 
    permission_classes = [permissions.AllowAny]   
    
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.AllowAny]

class LogViewSet(viewsets.ModelViewSet):
    querySet = Log.objects.all()
    serializer_class = LogSerializer
    permission_classes = [permissions.AllowAny]
      
class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )
