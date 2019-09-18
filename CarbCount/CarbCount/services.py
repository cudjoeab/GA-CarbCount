import datetime 

# inputs
"""Calculates the number of insulin units needed after one meal.
Keyword arguments:
carbo_meal -- total grams of carbohydrates in the meal (result of the user query through FatSecret API)
carbo_ratio -- total grams of carbohydrates processed by 1 unit of rapid acting insulin
act_blood_sugar -- actual blood sugar level measured before the meal (in mmol/L)
tgt_blood_sugar -- target blood sugar before the meal (in mmol/L, defined by the user in their settings)
sensitivity -- individual sensitivity ( x mmol/L per 1 unit of insulin) 
Returns: the number of units of rapid acting insulin needed before a meal (i.e., bolus insulin dose)
"""


"""
Variables from Diabetic class: 
morning_ratio, afternoon_ratio, evening_ratio, night_ratio
morning_cor_factor, afternoon_cor_factor, evening_cor_factor, night_cor_factor
morning_target, afternoon_target, evening_target, night_target
insulin_duration
insulin_type
"""


# outputs




class CalculateDose(object):

    def __init__(self, act_blood_sugar, tgt_blood_sugar, foods):
        self.act_blood_sugar = act_blood_sugar
        self.tgt_blood_sugar = tgt_blood_sugar
        self.foods = foods
        self.net_carb = sum([f["carb"] for f in foods])
        self.net_fibre =  sum([f["fibre"] for f in foods])
        self.total_carbs = self.net_carb - self.net_fibre
        
    def run(self):
        pass

    @staticmethod
    def dose_meal_ratio():
        """
        Insulin(required for meal or snack)/carb ratio
        """
        ratio = 5  # 1:5
        current_hour = datetime.datetime.now().hour

        if current_hour in range(4, 11): 
            ratio = 5 
        elif current_hour in range(10, 17):
            ratio = 5 
        elif current_hour in range(16, 23): 
            ratio = 4.5
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            ratio = 5

        return ratio


    @staticmethod
    def corr_ratio():
        """ 
        
        """
        cor_factor = 0 
        current_hour = datetime.datetime.now().hour

        if current_hour in range(4, 11): 
            cor_factor = 1.3
        elif current_hour in range(10, 17):
            cor_factor = 1.3 
        elif current_hour in range(16, 23): 
            cor_factor = 1.3 
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            cor_factor = 1.3

        return cor_factor


    def total_meal_dose(self):
        return self.total_carbs / CalculateDose.dose_meal_ratio()


    def total_cor_dose(self):
        return self.act_blood_sugar - self.tgt_blood_sugar / CalculateDose.dose_meal_ratio()

    def  total_dose(self):
        return total_meal_dose + total_cor_dose



    # def correction_dose(glucose):
    #     target = 5.6 
    #     return (glucose - target) / cor_factor()

    # def  total_dose(self):
    #     return meal_dose() + correction_dose() 

    


# Ratio.dose_meal 
# Ratio.correction_factor


# test_foods = [
#     {"name": "apple", "carb" : 14, "fibre" : 2.4 },
#     {"name": "burger", "carb" : 47, "fibre" : 2 }
# ]
# target = 5.6 
# # correction factor

# result = CalculateDose(test_foods).run()


# print(f"Take {total_meal_dose(56.6)} units of insulin") 
# print(f"Take {total_cor_dose(5.6)} units of insulin")