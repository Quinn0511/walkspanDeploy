var app = {
  AerialLayer: null,
  APIKey: "D11AED42B66B99634EE3A31B6D2DA",
  APIUrl: "./php/api.php",
  FirstLoad: true,
  Geocoder: null,
  LastSelectedLat: null,
  LastSelectedLng: null,
  Map: null,
  MapInfoWindow: null,
  Neighborhoods: [],
  NeighborhoodLayer: null,
  PlacesMarkers: [],
  PlacesService: null,
  Ratings: [],
  SelectedAddress: null,
  SelectedAreaType: "block",
  SelectedLat: 40.736,
  SelectedLng: -74.006,
  SelectedLocationCircles: [],
  SelectedLocationMarker: null,
  StreetLayer: null,
  StreetViewPanorama: null,
  StreetViewService: null,
  WalkspanLayer: null,
  WalkspanValue: "total",
};

app.LayerColors = {
  access: ["#D3EAF5", "#94CCE6", "#4CAAD6"],
  amenities: ["#FDDBD1", "#F9A78F", "#F56C44"],
  beauty_m: ["#EDE2D8", "#D4B9A1", "#B78B63"],
  beauty_n: ["#DCF2DA", "#B5E7B6", "#64CD68"],
  comfort: ["#EEE3C7", "#D5BB78", "#B98E1E"],
  interest: ["#EBDDF3", "#D0ACE3", "#B075D0"],
  safety: ["#F6DCE3", "#E9A9BC", "#DB708F"],
  total: ["#E4E4E4", "#BEBEBE", "#929292"],
};

app.Places = {
  Food: ["bakery", "bar", "cafe", "restaurant"],
  Stores: [
    "book_store",
    "clothing_store",
    "convenience_store",
    "department_store",
    "hardware_store",
    "home_goods_store",
    "liquor_store",
    "pet_store",
    "pharmacy",
    "shopping_mall",
    "store",
    "supermarket",
  ],
  Transits: ["bus_station", "subway_station", "taxi_stand", "transit_station"],
  Health: ["dentist", "doctor", "gym"],
  "Public Services": ["church", "library", "school"],
  Others: [
    "atm",
    "bank",
    "beauty_salon",
    "hair_care",
    "laundry",
    "movie_theater",
  ],
};

app.PlacesColors = {
  Food: "orange",
  Stores: "pink",
  Transits: "blue",
  Health: "yellow",
  "Public Services": "green",
  Others: "grey",
};

$(document).ready(function () {
  initializeMap();
});

function initializeMap() {
  var mapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

  app.Map = new google.maps.Map($("#divWAPIMap")[0], {
    center: {
      lat: app.SelectedLat,
      lng: app.SelectedLng,
    },
    disableDefaultUI: true,
    fullscreenControl: false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    styles: mapStyles,
    zoom: 16,
  });

  app.MapInfoWindow = new google.maps.InfoWindow();
  app.PlacesService = new google.maps.places.PlacesService(app.Map);
  app.StreetViewService = new google.maps.StreetViewService();

  refreshGeoserverLayers();
}

function refreshGeoserverLayers() {
  // Clear existing overlay layers
  app.Map.overlayMapTypes.clear();

  // Define custom WMS tiled layer
  app.WalkspanLayer = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
      var proj = app.Map.getProjection();
      var zfactor = Math.pow(2, zoom);

      // Get Long Lat coordinates
      var top = proj.fromPointToLatLng(
        new google.maps.Point(
          (coord.x * 256) / zfactor,
          (coord.y * 256) / zfactor
        )
      );
      var bot = proj.fromPointToLatLng(
        new google.maps.Point(
          ((coord.x + 1) * 256) / zfactor,
          ((coord.y + 1) * 256) / zfactor
        )
      );

      // Create the Bounding box string
      var bbox =
        top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

      // Build WMS URL
      var url = "http://18.217.77.37:8080/geoserver/walkspan/wms?";
      url += "&REQUEST=GetMap";
      url += "&SERVICE=WMS";
      url += "&VERSION=1.1.1";
      url += "&LAYERS=walkspan:walkspan";
      url += "&FORMAT=image/png";
      url += "&BGCOLOR=0xFFFFFF";
      url += "&TRANSPARENT=TRUE";
      url += "&SRS=EPSG:" + "4326";
      url += "&BBOX=" + bbox;
      url += "&WIDTH=256";
      url += "&HEIGHT=256";
      url += "&STYLES=" + app.WalkspanValue + "Walkspan";
      url += "&CQL_FILTER=objtype='NO'";

      return url;
    },
    tileSize: new google.maps.Size(256, 256),
    isPng: true,
    name: "WalkspanLayer",
  });

  app.Map.overlayMapTypes.push(app.WalkspanLayer);
}
