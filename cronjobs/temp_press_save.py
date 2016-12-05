
import urllib2
import json
from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb://10.1.10.100:27017")

db = client['greenhouse']

content = urllib2.urlopen("http://localhost/greenhouse/bmp085.php").read()

d = json.loads(content)

result = db.sensor_bmp085.insert_one({
                "temperature" : d["temperature"]["C"],
                "pressure" : d["hpa"],
                "date" : datetime.now()
        }
)

#print(result.inserted_id)
