import ajax from "../utils/ajax";
export function getData(params) {
  //return ajax.get("http://34.227.93.214:8080/SenseOfWalkAPI_war/data?", {
  return ajax.get("/proxy/SenseOfWalkAPI_war/data?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}