import ajax from "../utils/ajax";
export function getUserProfile(params) {
  return ajax.get("/proxy_localhost/SenseOfWalkAPI_war/profile?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}