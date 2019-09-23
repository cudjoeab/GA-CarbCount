
from .api import PractitionerViewSet, DiabeticViewSet, MealViewSet, RecipeViewSet, LogViewSet 

from django.conf.urls import url
from django.contrib import admin  # We can remove this later on.
from django.urls import include, path  # Do we need to import path..?
from django.views.decorators.csrf import csrf_exempt

from . import views

# from rest_framework import routers
# from rest_framework.authtoken import views as auth_views
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()

# Register the all CRUD operations with the router
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
    
router.register('practitioner', PractitionerViewSet, 'practitioner')
router.register('diabetic', DiabeticViewSet, 'diabetic')
router.register('meal', MealViewSet, 'meal')
router.register('recipe', RecipeViewSet, 'recipe')
router.register('log', LogViewSet, 'log')



urlpatterns = [
    # ... the rest of the urlpatterns ...
    # must be catch-all for pushState to work
    path('api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    # path('api/it/', views.ApiView.as_view()),
    path('api/it/', csrf_exempt(views.ApiView.as_view())),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^api/token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
        # path('api/food_search/', views.food_search),
        # path('api/calculate_dosages/', views.calculate_dosages),
        # url(r'^rest-auth/', include('rest_auth.urls')),
        # path('login/', views.api_login),
        # path('logout/', views.api_logout),
        # path('register/', views.api_register),
    # url(r'^login/$', views.api_login),
        # path('api/search_recipes/', views.search_recipes), 


        # url(r'^api-token-auth/', auth_views.obtain_auth_token, name='api-token-auth'),

    url(r'^', views.FrontendAppView.as_view()) # This is a catch-all for React.
]


