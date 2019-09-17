from fatsecret import Fatsecret
import os

consumer_key = os.getenv("FATSECRETS_CONSUMER_KEY")
consumer_secret = os.getenv("FATSECRETS_CONSUMER_SECRET")
fs = Fatsecret(consumer_key, consumer_secret)


food_item = input("Enter the food item you going to stuff into your mouth: ")


def food_search(food_item):
    print(fs.foods_search(food_item))


def find_id(search_id):
    # TODO: turn for with append into map
    for i, food_id in enumerate(d['food_id'] for d in search_id):
        id_num.append(food_id)


def find_name(search_name):
    # TODO: turn for with append into map
    for i, food_name in enumerate(d['food_name'] for d in search_name):
        name.append(food_name)


id_num = []
name = []

def get_food(food_item):
    find_id(food_search(food_item))
    find_name(food_search(food_item))

    name_id = dict(zip(name, id_num))

    print(name_id)

    id_food = fs.food_get(id_num[0])

    print(id_food.keys())

def calculate_by_food(id_food):

    name = (id_food['food_name'])
    carbs = (id_food['servings']['serving'][0]['carbohydrate'])
    fiber = (id_food['servings']['serving'][0]['fiber'])
    
    total_carbs = (float(carbs) - float(fiber))

    return f"""
    $Name: {name}
    $Carbs: {carbs}
    $Fiber: {fiber}
    $Total: {total_carbs}
    """

# foods = []
# for item in id_food:
#     foods.append(item)
# print(foods)
# print(id_food)