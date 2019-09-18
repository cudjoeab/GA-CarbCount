
from django.urls import include, path  # Do we need to import path..?
from django.contrib import admin  # We can remove this later on.
from django.conf.urls import url
from . import views
from rest_framework import routers
from .api import PractitionerViewSet, DiabeticViewSet, MealViewSet, RecipeViewSet, LogViewSet 


# Imports the class DefaultRouter from routers.
router = routers.DefaultRouter()  

# Register the all CRUD operations with the router
router.register('practitioner', PractitionerViewSet, 'practitioner')
router.register('diabetic', DiabeticViewSet, 'diabetic')
router.register('meal', MealViewSet, 'meal')
router.register('recipe', RecipeViewSet, 'recipe')
router.register('log', LogViewSet, 'log')


urlpatterns = [
    # ... the rest of the urlpatterns ...
    # must be catch-all for pushState to work
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    path('login/', views.api_login),
    path('register/', views.api_register),
    # url(r'^login/$', views.api_login),
    path('api/search_recipes/', views.search_recipes), 
    url(r'^', views.FrontendAppView.as_view()) # This is a catch-all for React.
]


