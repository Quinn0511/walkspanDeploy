import ajax from "../utils/ajax";
export function getAPI(params) {
  return ajax.get("/proxy/SenseOfWalkAPI_war/api?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
