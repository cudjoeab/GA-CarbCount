import logging
import os
from django.shortcuts import render, reverse, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response


def logout_view(request):
    pass


def signup_view(request):
    pass


def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    if email is None or password is None:
        return Response({'error': 'Please enter your email and password or sign up'}, status=HTTP_400_BAD_REQUEST)


def search_recipes(request):
    query = request.data.get('q')
    return fs.foods_search(query) 


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
    
    # def signup(request):
    #     form = UserCreationForm()
    #     context = { 'form': form }
    #     response = render(request, '') 