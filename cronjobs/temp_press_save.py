
import urllib2
import json
from pymongo import MongoClient
from datetime import datetime

# sudo pip install python-dateutil --upgrade
from dateutil.relativedelta import *

client = MongoClient("mongodb://10.1.10.100:27017")

db = client['greenhouse']

content = urllib2.urlopen("http://localhost/greenhouse/php/bmp085.php").read()

d = json.loads(content)

# save current temp / press

result = db.sensor_bmp085.insert_one({
                "temperature" : d["temperature"]["C"],
                "pressure" : d["hpa"],
                "date" : datetime.now()
        })

# delete older than 3 months

three_mon_rel = relativedelta(months=3)

threeMothsAgo = (datetime.now() - three_mon_rel)

db.sensor_bmp085.remove({
                "date" : {"$lt" : threeMothsAgo }
        })
