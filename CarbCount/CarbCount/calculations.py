import requests 

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




