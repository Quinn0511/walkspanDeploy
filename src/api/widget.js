import ajax from "../utils/ajax";
export function getWidget(params) {
  //return ajax.get("http://34.227.93.214:8080/SenseOfWalkAPI_war/widget?", {
  return ajax.get("/proxy/SenseOfWalkAPI_war/widget?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function getUserWidgetByID(params) {
  //return ajax.get("/proxy/SenseOfWalkAPI_war/mywidget?", {
  return ajax.get("/proxy_localhost/SenseOfWalkAPI_war/mywidget?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function addUserWidget(params) {
  //return ajax.get("/proxy/SenseOfWalkAPI_war/mywidget?", {
  return ajax.post("/proxy_localhost/SenseOfWalkAPI_war/mywidget?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}