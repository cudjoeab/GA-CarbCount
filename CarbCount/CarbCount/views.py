import logging
import os

from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required 
from django.contrib.auth.forms import UserCreationForm 
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework import permissions, status, viewsets

from django.shortcuts import render, reverse, redirect, get_object_or_404






from .models import *
from .serializers import *



from django.views.generic import View
from rest_framework import status, viewsets
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

# Adding these - Adam
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes



from rest_framework.permissions import AllowAny, IsAuthenticated




class DiabeticViewSet(viewsets.ModelViewSet):
    '''Api endpoint for Diabetic Profile'''
    queryset = Diabetic.objects.all().order_by('id')
    serializer_class = DiabeticSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (AllowAny,)
        return super(DiabeticViewSet, self).get_permissions()


class PractitionerViewSet(viewsets.ModelViewSet):
    '''Api endpoint for Practitioner Profile'''
    queryset = Practitioner.objects.all().order_by('id')
    serializer_class = PractitonerSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (AllowAny,)
        return super(PractitionerViewSet, self).get_permissions()


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all().order_by('id')
    serializer_class = MealSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (AllowAny,)
        return super(MealViewSet, self).get_permissions()


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = (AllowAny,)
        return super(RecipeViewSet, self).get_permissions()




# Also adding these - Adam
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def api_login(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(request, username=username, password=password)

    # if username is None or password is None:
    #     return Response({'error': 'Please provide both username and password'}, 
    #                     status=HTTP_400_BAD_REQUEST)

    # user = authenticate(username=username, password=password)

    # if not user:
    #     return Response({'error': 'Invalid Credentials'},
    #                     status=HTTP_404_NOT_FOUND)

    # token, _ = Token.objects.get_or_create(user=user)
    # return Response({'token': token.key},
    #                     status=HTTP_200_OK)

    if user is not None:
        login(request, user)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def api_logout(request):
    # username = request.data['username']
    # password = request.data['password']
    logout(request)
    return Response(status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def api_register(request):
    username = request.data['username']
    password = request.data['password']
    # Create a new User in your App
    # then save the user
    # then return the user  

    user = User.objects.create_user(username=username, password=password)

    if user is not None:
        # return Response(status=status.HTTP_200_OK, 
        # {
        #     'greeting': 'Hello World!'
        # })
        data = {
            # 'greeting': 'Hello World!',
            'userId': user.id,
            'userName': user.username
            # 'auth': request.auth
            # "models_to_return": list(queryset),
            # 'user id': user.id

        }

        return JsonResponse(data, status=HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)



def search_recipes(request):
    # query = request.data.get('q')
    # return fs.foods_search(query) 
    return "Recipe results"


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