import requests 
import datetime 


class CalculateDose(object):

    def __init__(self, glucose_level, target_level, foods):
        self.glucose_level = glucose_level
        self.target_level = target_level
        self.foods = foods
        self.net_carb = sum([f["carb"] for f in foods])
        self.net_fibre =  sum([f["fibre"] for f in foods])
        self.total_carbs = self.net_carb - self.net_fibre
        
    def run(self):
        pass

    @staticmethod
    def dose_meal_ratio():
        ratio = 5
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
        return self.glucose_level - self.target_level / CalculateDose.dose_meal_ratio()

    def  total_dose(self):
        return total_meal_dose + total_cor_dose 

Ratio.dose_meal 
Ratio.correction_factor


test_foods = [
    {"name": "apple", "carb" : 14, "fibre" : 2.4 },
    {"name": "burger", "carb" : 47, "fibre" : 2 }
]
target = 5.6 
# correction factor

result = CalculateDose(test_foods).run()


# print(f"Take {total_meal_dose(56.6)} units of insulin") 
# print(f"Take {total_cor_dose(5.6)} units of insulin")