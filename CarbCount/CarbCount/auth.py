from fatsecret import Fatsecret
from dotenv import load_dotenv
import os
load_dotenv()

id_num = []
name = []

consumer_key = os.getenv("FATSECRETS_CONSUMER_KEY")
consumer_secret = os.getenv("FATSECRETS_CONSUMER_SECRET")

fs = Fatsecret(consumer_key, consumer_secret)


food_item = 'apple'


def food_search(food_item):
    food = fs.foods_search(food_item)
    return food


def find_id(search_result):
    for i, food_id in enumerate(d['food_id'] for d in search_result):
        id_num.append(food_id)


def find_name(search_result):
    for i, food_name in enumerate(d['food_name'] for d in search_result):
        name.append(food_name)


find_id(food_search(food_item))
find_name(food_search(food_item))

name_id = dict(zip(name, id_num))

print(name_id)


id_food = fs.food_get('35880')
print(id_food.keys())
name = (id_food['food_name'])
carbs = (id_food['servings']['serving'][0]['carbohydrate'])
fiber = (id_food['servings']['serving'][0]['fiber'])
total_carbs = (float(carbs) - float(fiber))
print(name)
print(carbs)
print(fiber)
print(total_carbs)

# foods = []
# for item in id_food:
#     foods.append(item)
# print(foods)
# print(id_food)