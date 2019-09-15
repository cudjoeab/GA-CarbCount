# followed MDN docs for testing in Django https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Testing
# import libraries for the date and formatting
import datetime

# import models that are needed for testing 
from CarbCount.models import Meal

# import test library 
from django.test import TestCase

# define test case class with TestCase as argument 
class CarbTestCase(TestCase): 
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Meal.objects.create()
        pass

    def test_calculate_net_carb(self):
        pass

    def test_calculate_net_fibre(self):
        pass

    def test_total_carb(self):
        pass 
        

class MealRatioTestCase(TestCase):


class CorectionRatioTestCase(TestCase):
