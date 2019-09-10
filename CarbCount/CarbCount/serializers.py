from rest_framework import serializers
from CarbCount.models import User, Recipe, Log, Meal, Practioner, LANGUAGE_CHOICES, STYLE_CHOICES


class UserSerializer(serializers.Serializer):
    id