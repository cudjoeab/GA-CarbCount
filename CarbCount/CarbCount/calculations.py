import requests 
import datetime 



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

    print('Net Carb:')
    print(calculate_net_carb(food))
    print('Net Fibre:')
    print(calculate_net_fibre(food))
    print('Total carb:')
    print(total_carb(food)) 

    # calculate the amount of insulin needed for a meal 
    def  dose_meal_ratio():
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


    def total_meal_dose(carbs):
        return carbs / dose_meal_ratio()

    print(f"Take {total_meal_dose(56.6)} units of insulin") 


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

    def total_cor_dose(glucose):
        target = 5.6 
        return glucose - target / dose_meal_ratio()

    def  total_dose(self):
        return total_meal_dose + total_cor_dose 

    print(f"Take {total_cor_dose(5.6)} units of insulin")







