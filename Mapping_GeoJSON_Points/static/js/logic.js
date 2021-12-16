console.log("working");
// Add console.log to check to see if our code is working.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

<<<<<<< HEAD
=======
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

>>>>>>> e3c38ecb3e08a402b49a578e79ca7f946b0be4ee
// Create the dark view tile layer that will be on option for our map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with a center and zoom level and default layer
let map = L.map("mapid", {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/JuanDeLT/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON Data.
d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<h2>" + "Airport code: " + feature.properties.icao + "</h2> <hr> <h3>" + "Airport Name: " + feature.properties.name + "</h3>").addTo(map);
    }
  });
});

    
