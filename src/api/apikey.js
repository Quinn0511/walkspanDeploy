import ajax from "../utils/ajax";
export function getAPIKEY(params) {
  return ajax.get("/proxy_localhost/SenseOfWalkAPI_war/apikey_access?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}