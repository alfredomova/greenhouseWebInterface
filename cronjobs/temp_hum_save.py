
import urllib2
import json

#sudo pip install pymongo
from pymongo import MongoClient

from datetime import datetime

# sudo pip install python-dateutil --upgrade
from dateutil.relativedelta import *

client = MongoClient("mongodb://10.1.10.100:27017")

db = client['greenhouse']

content = urllib2.urlopen("http://localhost/php/dht22.php").read()

d = json.loads(content)

# save current temp / press

result = db.sensor_dht22.insert_one({
                "temperature" : d["temperature"]["C"],
                "humidity" : d["humidity"],
                "date" : datetime.now()
        })

# - - - - - - - - - - -

if d["temperature"]["C"] > 30:
	state = "0" # 0 is ON
else:
	state = "1" # 1 is OFF

urllib2.urlopen("http://localhost/php/change_state.php?pin=22&state=" + state ).read()

# - - - - - - - - - - -

# delete older than 3 months

three_mon_rel = relativedelta(months=3)

threeMothsAgo = (datetime.now() - three_mon_rel)

db.sensor_dht22.remove({
                "date" : {"$lt" : threeMothsAgo }
        })
