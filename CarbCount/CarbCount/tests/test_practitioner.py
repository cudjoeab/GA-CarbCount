# from django.test import TestCase
# from CarbCount.models import Practitioner

# class PractitionerTest(TestCase):
#     @classmethod
#     def test_practitioner_is_invalid_without_a_license_id(self):
#         p1 = Practitioner.objects.create(license_id=null)
#         self.assertEquals(p1.save, false)

#     def test_practitioner_is_valid_with_a_license_id(self):
#         p2 = Practitioner.objects.create(license_id=4)
#         self.assertEquals(p2.save, true)

#     def test_practitioner_is_valid_when_all_fields_are_filled_out(self):
#         p3 = Practitioner.objects.create(first_name='John', last_name='Smith', clinic_name='Smith Medical', license_id=7)
#         self.assertEquals(p3.save, true)

# class DiabeticTest(TestCase):
#     @classmethod
#     def test_diabetic_is_invalid_without_morning_ratio(self):
#         d1 = Diabetic.objects.create(morning_ratio=null)
#         self.assertEquals(d1.save, false)

#     def test_diabetic_is_valid_with_morning_ratio(self):
#         d2 = Diabetic.objects.create(morning_ratio=6)
#         self.assertEquals(d2.save, true)
    
#     def test_diabetic_is_invalid_without_afternoon_ratio(self):
#         d3 = Diabetic.objects.create(afternoon_ratio=null)
#         self.assertEquals(d3.save, false)

#     def test_diabetic_is_valid_with_afternoon_ratio(self):
#         d4 = Diabetic.objects.create(afternoon_ratio=8)
#         self.assertEquals(d4.save, true)

#     def test_diabetic_is_invalid_without_evening_ratio(self):
#         d5 = Diabetic.objects.create(evening_ratio=null)
#         self.assertEquals(d5.save, false)

#     def test_diabetic_is_valid_with_evening_ratio(self):
#         d6 = Diabetic.objects.create(evening_ratio=7)
#         self.assertEquals(d6.save, true)

#     def test_diabetic_is_invalid_without_night_ratio(self):
#         d7 = Diabetic.objects.create(night_ratio=null)
#         self.assertEquals(d7.save, false)
        
#     def test_diabetic_is_valid_with_night_ratio(self):
#         d8 = Diabetic.objects.create(night_ratio=7)
#         self.assertEquals(d8.save, true)

#     def test_diabetic_is_invalid_without_morning_cor_factor(self):
#         d9 = Diabetic.objects.create(morning_cor_factor=null)
#         self.assertEquals(d9.save, false)

#     def test_diabetic_is_valid_with_morning_cor_factor(self):
#         d10 = Diabetic.objects.create(morning_cor_factor=10)
#         self.assertEquals(d10.save, true)

#     def test_diabetic_is_invalid_without_afternoon_cor_factor(self):
#         d11 = Diabetic.objects.create(afternoon_cor_factor=null)
#         self.assertEquals(d11.save, false)

#     def test_diabetic_is_valid_with_afternoon_cor_factor(self):
#         d12 = Diabetic.objects.create(afternoon_cor_factor=9)
#         self.assertEquals(d12.save, true)

#     def test_diabetic_is_invalid_without_evening_cor_factor(self):
#         d13 = Diabetic.objects.create(evening_cor_factor=null)
#         self.assertEquals(d13.save, false)

#     def test_diabetic_is_valid_with_evening_cor_factor(self):
#         d14 = Diabetic.objects.create(evening_cor_factor=11)
#         self.assertEquals(d14.save, true)

#     def test_diabetic_is_invalid_without_night_cor_factor(self):
#         d15 = Diabetic.objects.create(night_cor_factor=null)
#         self.assertEquals(d15.save, false)
    
#     def test_diabetic_is_valid_with_night_cor_factor(self):
#         d16 = Diabetic.objects.create(night_cor_factor=9)
#         self.assertEquals(d16.save, true)

#     def test_diabetic_is_invalid_without_morning_target(self):
#         d17 = Diabetic.objects.create(morning_target=null)
#         self.assertEquals(d17.save, false)

#     def test_diabetic_is_valid_with_morning_target(self):
#         d18 = Diabetic.objects.create(morning_target=5)
#         self.assertEquals(d18.save, true)

#     def test_diabetic_is_invalid_without_afternoon_target(self):
#         d19 = Diabetic.objects.create(afternoon_target=null)
#         self.assertEquals(d19.save, false)

#     def test_diabetic_is_valid_with_afternoon_target(self):
#         d20 = Diabetic.objects.create(afternoon_target=4)
#         self.assertEquals(d20.save, true)

#     def test_diabetic_is_invalid_without_evening_target(self):
#         d21 = Diabetic.objects.create(evening_target=null)
#         self.assertEquals(d21.save, false)

#     def test_diabetic_is_valid_with_evening_target(self):
#         d22 = Diabetic.objects.create(evening_target=6)
#         self.assertEquals(d22.save, true)

#     def test_diabetic_is_invalid_without_night_target(self):
#         d23 = Diabetic.objects.create(night_target=null)
#         self.assertEquals(d23.save, false)

#     def test_diabetic_is_valid_with_night_target(self):
#         d24 = Diabetic.objects.create(night_target=5)
#         self.assertEquals(d24.save, true)

#     def test_diabetic_is_valid_when_all_fields_are_filled_out(self):
#         d25 = Diabetic.objects.create(first_name='John', last_name='Smith', email='john.smith@yahoo.com', morning_ratio=6, afternoon_ratio=8, evening_ratio=7, night_ratio=7, morning_cor_factor=10, afternoon_cor_factor=9, evening_cor_factor=11, night_cor_factor=9, morning_target=5, afternoon_target=4, evening_target=6, night_target=5, insulin_duration=4.5, insulin_type='Humalog', practitioner_id=7)
#         self.assertEquals(d25.save, true)

# class RecipeTest(TestCase):
#     @classmethod
#     def test_recipe_is_invalid_without_total_carbs(self):
#         r1 = Recipe.objects.create(license_id=null)
#         self.assertEquals(r1.save, false)

#     def test_recipe_is_valid_with_total_carbs(self):
#         r2 = Recipe.objects.create(total_carbs=100)
#         self.assertEquals(r2.save, true)

#     def test_recipe_is_invalid_without_total_fibre(self):
#         r3 = Recipe.objects.create(license_id=null)
#         self.assertEquals(r3.save, false)

#     def test_recipe_is_valid_with_total_fibre(self):
#         r4 = Recipe.objects.create(total_fibre=150)
#         self.assertEquals(r4.save, true)

#     def test_recipe_is_valid_when_all_fields_are_filled_out(self):
#         r5 = Recipe.objects.create(name='Jerk Chicken and Rice', total_carbs=100, total_fibre=150, ingredients=6, total_servings=4, description="jerk chicken with fried rice.", tags="jerk", image_link="https://www.google.com/", diabetic_id=9)
#         self.assertEquals(r5.save, true)

# class MealTest(TestCase):
#     @classmethod
#     def test_meal_is_invalid_without_carbs(self):
#         m1 = Meal.objects.create(license_id=null)
#         self.assertEquals(m1.save, false)

#     def test_meal_is_valid_with_carbs(self):
#         m2 = Meal.objects.create(total_carbs=100)
#         self.assertEquals(m2.save, true)

#     def test_meal_is_invalid_without_fibre(self):
#         m3 = Meal.objects.create(license_id=null)
#         self.assertEquals(m3.save, false)

#     def test_meal_is_valid_with_fibre(self):
#         m4 = Meal.objects.create(total_carbs=100)
#         self.assertEquals(m4.save, true)

#     def test_meal_is_invalid_without_insulin_dose(self):
#         m5 = Meal.objects.create(license_id=null)
#         self.assertEquals(m5.save, false)

#     def test_meal_is_valid_with_insulin_dose(self):
#         m6 = Meal.objects.create(total_carbs=100)
#         self.assertEquals(m6.save, true)

#     def test_meal_is_valid_when_all_fields_are_filled_out(self):
#         m7 = Meal.objects.create(date=2019-4-1, food='Jerk Chicken and Rice', carbs=100, fibre=150, meal_type="type", blood_glucose=5, insulin_dose=4.5)
#         self.assertEquals(m7.save, true)