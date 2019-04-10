# Taste Tour

A guided tour through a cities best cuisine. Taste Tour will take in a city and a type of cuisine and use the user's location to map out an efficient route to the city's best offerings.

## Authentication

For the sake of demonstration you can hit log in without any credentials and it will take you to the next page

We used JWT Tokens saved in local storage for authentication

-------------

## What We Learned

* Vue
* Authentication with JWT 
* Using Life Cycle Events to hit our API and render dynamic data
* Working with a Vue Frontend and Node backend together.
* Using GeoJSON objects and the MapBox API to create custom routes

---------------------------------------
### __Picking a city and cuisine__

When you sign in the first screen will ask you what city you'd like to search and what you'd like to eat.

### __Viewing the map__
The map will then render with a route of up to 5 locations, the first one being closest to you.

At the bottom is a carousel where you can preview the locations. 

### __Start Crawl__

After starting the crawl, the app will check your geolocation with the location of the address.

The open modal button will simulate what happens when you are within a mile of the location. It will let you review the location saving it to the database and once you close it the app will start tracking the next location.

Once all of the locations have been reached the app will end the crawl.
