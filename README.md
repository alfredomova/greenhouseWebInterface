# Greenhouse Web Interface

Web interface to control Fan, Water pump and Lights in a greenhouse, also to check temperature, barometric pressure & humidity, this data is stored in a Mongo database (https://www.mongodb.com/). All this running on a Raspberry Pi (https://www.raspberrypi.org/).

Frameworks/APIs used:
  - WebIOPi : http://webiopi.trouch.com/
  - Bootstrap : http://getbootstrap.com
  - Bootstrap Switch : http://www.bootstrap-switch.org
  - jQuery : https://jquery.com
  - jqPlot : http://www.jqplot.com (this library is AWESOME!!)
  - Adafruit Python DHT Sensor Library : https://github.com/adafruit/Adafruit_Python_DHT
  - Pymongo : http://api.mongodb.com/python/2.2/index.html
  
  to manage when to turn on/off the sprinklers, I'm using GCalCron https://github.com/fabriceb/gcalcron, wich let you edit your cronjobs throw google calendar,
  
Sensors used:
  - DHT22 Temperature Sensor : https://www.adafruit.com/product/385
  - BMP180 Barometric Pressure Sensor : https://www.sparkfun.com/products/11824

Guides used:
  - DHT11/22 Temperature Sensors using the WebIOPi REST API : https://www.devin.cl/blog/dht11-webiopi/
  - DHT Humidity Sensing on Raspberry Pi or Beaglebone Black with GDocs Logging :  https://learn.adafruit.com/dht-humidity-sensing-on-raspberry-pi-with-gdocs-logging/overview
  
:)
