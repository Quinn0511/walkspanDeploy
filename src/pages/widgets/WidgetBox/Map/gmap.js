import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polygon,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";
import small from "./small";
import styles from "./index.module.less";

const google = window.google;
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "700px",
};
// const center = {
//   lat: 40.792116,
//   lng: -73.971763,
// };

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  mapTypeControlOptions: {
    position: google.maps.ControlPosition.TOP_RIGHT,
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  rotateControl: false,
  scaleControl: false,
  streetViewControl: false,
};

function renderRegions(mapPath) {
  return mapPath.map((region, i) => {
    return (
      <Polygon
        path={region.map((ll) => {
          return { lng: ll[0], lat: ll[1] };
        })}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          polygonKey: 1,
          geodesic: true,
        }}
        key={i}
      />
    );
  });
}

export function GMap(props) {
  const [center, setCenter] = useState({
    lat: 40.76778789999999,
    lng: -73.99174099999999,
  });

  const { isLoaded, loadError } = useLoadScript({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyBOXYeVd2IW4rON6FTyLBesJOG87NE3BJo",
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  });

  const mapPath = small.features.map((f) => {
    return f.geometry.coordinates[0][0];
  });
  const polypath = renderRegions(mapPath);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={props.zoom}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {/* {polypath} */}
        {renderRegions(mapPath)}
      </GoogleMap>
    </div>
  );
}
