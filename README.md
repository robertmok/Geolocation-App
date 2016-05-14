# Geolocation-App

This is a web application that takes in a list of geolocation coordinates (latitude and longitude) and calculates the distance between each coordinates with your current location. The user's current location is displayed on a map.

The user can drag and drop a text file containing a list of coordinates to calculate the distance (locations.txt). The calculation uses the haversine formula and it is done via a web worker.

The calculated distances is displayed in a table along with the geocoding of the coordinates (street name, city and country).
