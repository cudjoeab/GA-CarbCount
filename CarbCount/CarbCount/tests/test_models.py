# followed MDN docs for testing in Django https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Testing
# import libraries for the date and formatting
import datetime

# import test library 
from django.test import TestCase

# import models that are needed for testing 
from CarbCount.models import Meal 

# define test case class with TestCase as argument 
class CarbTestCase(TestCase): 
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        # will need to set up the object (food item name, carb and fibre) to be used 
        # for the methods 
        pass

    def test_calculate_net_carb(self):
        pass

    def test_calculate_net_fibre(self):
        pass

    def test_total_carb(self):
        pass 
        

class MealRatioTestCase(TestCase):


class CorectionRatioTestCase(TestCase):
