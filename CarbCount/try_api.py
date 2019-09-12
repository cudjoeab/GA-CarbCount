# https://pyfatsecret.readthedocs.io/en/latest/api_docs.html


consumer_key = '2f7a763598844fd69fab5a06e17240ec'
# consumer_key = os.keys.get("FATSECRETS_CONSUMER_KEY")
consumer_secret = os.keys.get("FATSECRETS_CONSUMER_SECRET")

from fatsecret import Fatsecret
fs = Fatsecret(consumer_key, consumer_secret)

