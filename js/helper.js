/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.
Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.
Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<header class="row"><div class="col-headerName"><h1><span id="firstname">%first%</span><span id="lastname">%last%</span></h1></div>';
var HTMLheaderRole = '<div class="col-headerRole role-div"><span class="headerRole">%data%</span></div></header><hr class="header-divider"/>';

var HTMLcontactGeneric = '<li class="flex-item contact-item"><span class="orange-text">%contact%</span><span class="contact-text"><a class="contact-link" target="_blank" href="%link%">%data%</a></span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic mobile-invisible">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-title" class="mobile-invisible">Skills at a Glance:</h3><ul id="skills-list" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item skill-item"><span class="skills-text">%data%</span></li>';

var HTMLskillsSectionContainer = '<section id="skills-section-container"></section>'
var HTMLskillsSectionStart = '<ul id="skills-section-list" class="flex-box"></ul>'
var HTMLskillsSectionContent = '<li class="flex-item skill-section-item"><span class="skills-section-text">%data%</span></li>'


var HTMLworkContainer ='<section id="work-container"></section>'
var HTMLworkStart = '<div class="work-entry row"></div>';
var HTMLworkEmployer = '<div class="col-2 workPlace"><a class="workPlace"href="#">%data%</a></div>';
var HTMLworkRole = '<div class="work-role col-10">%data%</div>';
var HTMLworkDates = '<div class="date-text col-8">%data%</div>';
var HTMLworkLocation = '<div class="location-text col-4">%data%</div>';
var HTMLworkDescription = '<div class="work-description col-12">%data%</div>';

var HTMLprojectContainer ='<section id="project-container"></section>'
var HTMLprojectStart = '<div class="project-entry row"></div>';
var HTMLprojectTitle = '<a class="projectTitle" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<div>%data%</div>';
var HTMLprojectImage = '<figure><img class="imgResponsive" src="%data%"></figure>';

var HTMLschoolContainer ='<section id="school-container"></section>'
var HTMLschoolStart = '<div class="education-entry row"></div>';
var HTMLschoolName = '<div class="col-3 schoolPlace"><a class="schoolPlace" href="#">%data%</a></div>';
var HTMLschoolDegree = '<div class="col-10">%data%</div>';
var HTMLschoolDates = '<div class="date-text col-8">%data%</div>';
var HTMLschoolLocation = '<div class="location-text col-4">%data%</div>';
var HTMLschoolMajor = '<div class="school-major col-12"><em>%data%</em></div>';

var HTMLonlineClasses = '<h3 class="subSection">Online Classes</h3>';
var HTMLonlineTitle = '<div class="col-12"><a class="onlineCourse" href="%url%" target="_blank">%data%</a></div>';
var HTMLonlineSchool = '<div class="col-12 online-school">%data%</div>';
var HTMLonlineDates = '<div class="col-12 date-text">%data%</div>';

var HTMLpublicationContainer = '<section id="publication-container"></section>';
var HTMLpublicationStart = '<div class="publication-entry row"></div>';
var HTMLpublicationAuthor = '%data%, ';
var HTMLpublicationLastAuthor = '%data%.';
var HTMLpublicationTitle = ' \'%data%\' ';
var HTMLpublicationJournal = '%data%, ';
var HTMLpublicationVolume = '%data%';
var HTMLpublicationIssue = '(%data%):';
var HTMLpublicationPages = ' %data%, ';
var HTMLpublicationDate = '%data%.';

var HTMLpublication = '<a class="reference" href="%data%" target="_blank">%authors%. \'%title%\' %journal%,%volume%%issue%%pages%%date%</div>'
var HTMLformattedPublication = '%authors%.&nbsp\'%title%\'&nbsp<i>%journal%</i>,&nbsp<b>%volume%</b>(%issue%):&nbsp%pages%,&nbsp%date%.'

var HTMLcontactContainer = '<section id="contact-container"></section>'
var HTMLcontactStart = '<div class="contact-entry row"></div>'
var HTMLcontactChannel = '<div class="contact-channel col-1 orange-text">%data%:</div>'
var HTMLcontactInfo = '<div class="contact-info col-9"><a class="contact-link" target="_blank" href="%link%">%data%</a></div>'

var internationalizeButton = '<button>Internationalize</button>';

var HTMLmapContainer ='<div id="map-container"></div>'
var googleMap = '<section id="map"></section>';

var HTMLframeworkDiv = '<div class="col-%num% framework-entry"></div>'

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});


//var publications = http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=1000&term=ansley+l[author]

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // fires off an event when the user clicks on the map
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});