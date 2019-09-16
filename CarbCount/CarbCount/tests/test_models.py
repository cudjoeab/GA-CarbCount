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
        Meal.objects.create(apple = {"carb" : 14, "fibre" : 2.4 }, 
                            burger = {"carb" : 47, "fibre" : 2 }) 
        food = [apple, burger]
        

    def test_calculate_net_carb(self):
        
        net_carb=0
        for f in food:
            net_carb += f["carb"] 
        self.assertEqual(net_carb, 56.6)


    def test_calculate_net_fibre(self):
        pass

    def test_total_carb(self):
        pass 
        

# class MealRatioTestCase(TestCase):


# class CorectionRatioTestCase(TestCase):
