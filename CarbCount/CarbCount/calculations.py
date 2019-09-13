import requests 
import datetime 
from datetimerange import DateTimeRange

asdf = datetime.datetime.now().hour

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
    return net_carb - net_fibre

print('Net Carb:')
print(calculate_net_carb(food))
print('Net Fibre:')
print(calculate_net_fibre(food))
print('Total carb:')
print(total_carb(food)) 


# need to define range 
time_range = DateTimeRange("T10:00:00+0900", "T10:10:00+0900")
print("T10:05:00+0900" in time_range)
print("T10:15:00+0900" in time_range)


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

print(f'Take {total_meal_dose(500)} units of insulin')



#         total_meal_dose = total_carb / morning_ratio 
#     elif now >= 1001 and now <= 1600: 
#         total_meal_dose = total_carb / afternoon_ratio
#     elif now >= 1601 and now <= 2200: 
#         total_meal_dose = total_carb / evening_ratio 
#     elif now >= 2201 and now <= 400: 
#         total_meal_dose = total_carb / night_ratio
    
    
    
#     return total_meal_dose

# print(total_meal_dose(food))







