import ajax from "../utils/ajax";

export function getPlaceResult(params) {
  return ajax.get("/proxy_google_map/maps/api/place/textsearch/json?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function getWMSTile(params) {
  return ajax.get("/proxy_geoserver/geoserver/walkspan/wms?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}