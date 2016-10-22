# Geolocation-App

This is a web application that takes in a list of geolocation coordinates (latitude and longitude) and calculates the distance between each coordinates with your current location without reloading. The user's current location is displayed on a map using Google Maps API.

The user can drag and drop a text file containing a list of coordinates to calculate the distance (locations.txt). The calculation uses the haversine formula and it is done via a web worker.

The calculated distances is displayed in a table along with the geocoding of the coordinates (street name, city and country) using Nominatim.

This application is responsive (using Bootstrap) and asynchronous (using AJAX).
Other technologies used in this application includes:
- XML
- Drag and Drop (HTML API)
- FileReader
- Web Worker (used to calculate the distance between coordinates) (HTML API)
- Geolocation (HTML API)


**Note:** The Google API Key is removed from the code.  

**Live Demo:** Link is protected. Message me for login info.
