from . import views
from .api import PractitionerViewSet, DiabeticViewSet, MealViewSet, RecipeViewSet, LogViewSet 
from django.conf.urls import url
from django.contrib import admin  # We can remove this later on.
from django.urls import include, path  # Do we need to import path..?
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers
from rest_framework.authtoken import views as auth_views

# Imports the class DefaultRouter from routers.
router = routers.DefaultRouter()  

# Register the all CRUD operations with the router
router.register(r'practitioner', PractitionerViewSet, 'practitioner')
router.register(r'diabetic', DiabeticViewSet, 'diabetic')
router.register(r'meal', MealViewSet, 'meal')
router.register(r'recipe', RecipeViewSet, 'recipe')
router.register(r'log', LogViewSet, 'log')


urlpatterns = [
    # ... the rest of the urlpatterns ...
    # must be catch-all for pushState to work
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/it/', csrf_exempt(views.ApiView.as_view())),
    url(r'^api-token-auth/', auth_views.obtain_auth_token, name='api-token-auth'),

    path('api/calculate_dosages/', views.calculate_dosages),
    path('api/food_search/', views.food_search),
    path('api/search_recipes/', views.search_recipes), 

    # url(r'^rest-auth/', include('rest_auth.urls')),
    # path('login/', views.api_login),
    # path('logout/', views.api_logout),
    # path('register/', views.api_register),
    # url(r'^login/$', views.api_login),
    
    url(r'^', views.FrontendAppView.as_view()) # This is a catch-all for React.
]


