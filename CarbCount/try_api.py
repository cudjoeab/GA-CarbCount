# https://pyfatsecret.readthedocs.io/en/latest/api_docs.html


from fatsecret import Fatsecret
from dotenv import load_dotenv
import os
load_dotenv()

consumer_key = os.getenv("FATSECRETS_CONSUMER_KEY")
consumer_secret = os.getenv("FATSECRETS_CONSUMER_SECRET")


fs = Fatsecret(consumer_key, consumer_secret)

