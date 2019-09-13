import requests 
import datetime
import calendar
import time 

apple = {"carb" : 14, "fibre" : 2.4 }
burger = {"carb" : 47, "fibre" : 2 }

food = [apple, burger]

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
    total_carb = net_carb - net_fibre
    return total_carb 

print(calculate_net_carb(food))
print(calculate_net_fibre(food))
print(total_carb(food)) 

def  total_meal_dose(food):
    time = datetime.date.now()
    morning_ratio= 5
    afternoon_ratio= 5
    evening_ratio= 4.5 
    night_ratio= 5 
    print(date)  
    
    if time >= 400 and time <= 1000: 
        total_meal_dose = total_carb / morning_ratio 
    elif time >= 1001 and time <= 1600: 
        total_meal_dose = total_carb / afternoon_ratio
    elif time >= 1601 and time <= 2200: 
        total_meal_dose = total_carb / evening_ratio 
    elif time >= 2201 and time <= 400: 
        total_meal_dose = total_carb / night_ratio
    
    
    
    return total_meal_dose

print(total_meal_dose(food))





