from fatsecret import Fatsecret
from dotenv import load_dotenv
import os
load_dotenv()


consumer_key = 'os.keys.get("FATSECRETS_CONSUMER_KEY")'
consumer_secret = os.keys.get("FATSECRETS_CONSUMER_SECRET")

fs = Fatsecret(consumer_key, consumer_secret)
