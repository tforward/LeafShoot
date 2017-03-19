/* global L */ // JS Hint

"use strict";

var map;
var lat = 50.7765; 
var lng = -116.8502;
var zoom = 11;
var geojson;
var lastClickedLayer;


var OpenStreetMap_BaW = L.tileLayer("http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png", {
    minZoom: 11,
    attribution: "<a href=\"https://www.linkedin.com/in/tristanforward\">Creator</a>&nbsp&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
});

function initmap() {
    // set up the map
    map = new L.Map("map");
    
    

    // Lock the map
    // var maxBoundsSouthWest = new L.LatLng(50.665131428416146, -114.62310791015625);
    // var maxBoundsNorthEast = new L.LatLng(51.37349493730543, -113.477783203125);
    // var maxBoundsArea = new L.LatLngBounds(maxBoundsSouthWest, maxBoundsNorthEast);
    // map.setMaxBounds(maxBoundsArea);
    

    
    var Stamen_Terrain = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'});

    // start the map in Kingston
    map.setView(new L.LatLng(lat, lng), zoom);
    map.addLayer(Stamen_Terrain);
    
    
    
    // map.locate({setView: true, maxZoom: 16});
}

initmap();



