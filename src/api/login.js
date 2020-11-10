import ajax from "../utils/ajax";
export function getLogin(params) {
  return ajax.get("/proxy_localhost/SenseOfWalkAPI_war/login?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}