import ajax from "../utils/ajax";
export function postMessage(params) {
  return ajax.post("/proxy_localhost/SenseOfWalkAPI_war/contact?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}