import requests 
import datetime 

# importing json library to create object 
import json 

apple = {"carb" : 14, "fibre" : 2.4 }
burger = {"carb" : 47, "fibre" : 2 }

food = [apple, burger]
class Calculator(): 
    def calculate_net_carb(food):
        net_carb = 0
        for f in food:
                net_carb += f["carb"] 
        return net_carb  

    def calculate_net_fibre(food):
        net_fibre = 0
        for f in food:
                net_fibre += f["fibre"] 
        return net_fibre  

    def total_carb(food): 
        net_carb = calculate_net_carb(food)
        net_fibre = calculate_net_fibre(food)
        return net_carb - net_fibre


    # calculate the amount of insulin needed for a meal 
    # check the time of day and which dose to pick 
    def  carb_ratio():
        breakpoint() 
        ratio = 5
        current_hour = datetime.datetime.now().hour

        if current_hour in range(4, 11): 
            ratio = 5 
        elif current_hour in range(11, 17):
            ratio = 5 
        elif current_hour in range(17, 23): 
            ratio = 4.5
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            ratio = 5 
        
        return ratio


    def meal_dose(carbs):
        return carbs / carb_ratio()


    # calculate the
    # depending on time of day, this number fluxuates
    def cor_factor():
        cor_factor = 0 
        current_hour = datetime.datetime.now().hour
        if current_hour in range(4, 11): 
            cor_factor = 1.3
        elif current_hour in range(11, 17):
            cor_factor = 1.3 
        elif current_hour in range(17, 23): 
            cor_factor = 1.3 
        elif current_hour in [22, 23, 24, 0, 1, 2, 3, 4]: 
            cor_factor = 1.3  

        return cor_factor

    # calculates dose
    # takes the blood sugar level, subtract the target,
    # and divide this by correction factor.
    def correction_dose(blood_glucose):
        target = 5.6 
        
        return (blood_glucose - target) / cor_factor()




    def  total_dose(self):
        return meal_dose() + correction_dose() 

    




# print hard coded results to test methods 
    print('Net Carb:')
    print(calculate_net_carb(food))
    print('Net Fibre:')
    print(calculate_net_fibre(food))
    print('Total carb:')
    print(total_carb(food)) 

    print(f"Take {total_meal_dose(56.6)} units of insulin") 

    print(f"Take {total_cor_dose(5.6)} units of insulin")


