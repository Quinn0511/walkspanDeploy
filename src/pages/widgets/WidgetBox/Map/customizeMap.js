import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const google = window.google;
const libraries = ["places"];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: true,
  mapTypeControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT,
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  rotateControl: false,
  scaleControl: false,
  streetViewControl: false,
  scrollwheel: false,
  gestureHandling: "none",
};

const CustomizeMap = (params) => {
  const {
    center = {
      lat: 40.76778789999999,
      lng: -73.99174099999999,
    },
    zoom = 16,
    featureName = "",
  } = params;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBOXYeVd2IW4rON6FTyLBesJOG87NE3BJo",
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback(
    (map) => {
      map.overlayMapTypes.clear();
      const walkspan_layer = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          var proj = map.getProjection();
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
          url += "&SRS=EPSG:4326";
          url += "&BBOX=" + bbox;
          url += "&WIDTH=256";
          url += "&HEIGHT=256";
          url += "&STYLES=" + featureName + "Walkspan";
          url += "&CQL_FILTER=objtype='NO'";

          return url;
        },
        tileSize: new google.maps.Size(256, 256),
        isPng: true,
        name: "WalkspanLayer",
      });
      map.overlayMapTypes.push(walkspan_layer);
      mapRef.current = map;
    },
    [featureName]
  );

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";
  return (
    params && (
      <div>
        <GoogleMap
          zoom={zoom}
          mapContainerStyle={{
            width: "100%",
            height: "600px",
          }}
          center={center}
          options={options}
          onLoad={onMapLoad}
        ></GoogleMap>
      </div>
    )
  );
};

export default CustomizeMap;
