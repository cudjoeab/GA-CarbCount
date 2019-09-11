"""myapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path  # Do we need to import path..?
from django.contrib import admin  # We can remove this later on.
from django.conf.urls import url
from . import views
from rest_framework import routers
from .api import PractitionerViewSet, DiabeticViewSet, MealViewSet, RecipeViewSet, LogViewSet 


router = routers.DefaultRouter()  # Imports the class DefaultRouter from routers.
router.register('practitioner', PractitionerViewSet, 'practitioner') # Registers the router; includes all CRUD operations.
router.register('diabetic', DiabeticViewSet, 'diabetic')
router.register('meal', MealViewSet, 'meal')
router.register('recipe', RecipeViewSet, 'recipe')
router.register('log', LogViewSet, 'log')

# Only use the registered url endpoints; no longer need old-timey Django routes.
urlpatterns = [
    # ... the rest of the urlpatterns ...
    # must be catch-all for pushState to work
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    # url(r'^', views.FrontendAppView.as_view()) # This is a catch-all for React.
]


