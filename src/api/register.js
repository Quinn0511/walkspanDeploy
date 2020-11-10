import ajax from "../utils/ajax";
export function postRegister(params) {
  return ajax.post("/proxy_localhost/SenseOfWalkAPI_war/register?", {
    params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}