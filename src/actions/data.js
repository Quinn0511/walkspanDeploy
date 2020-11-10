import * as api from "../api/data";
import { GET_DATA } from "../constants/actions";

export function getData(params = {}) {
  return async (dispatch) => {
    const result = await api.getData(params);

    var res = result.slice(34,result.length - 1).toString().split("\\").join("").replace("[","").replace("]","");
    var array = res.split("}");
    var jarray = [];
    var score = [];
    var areaname = [];
    var latitude = [];
    var longitude = [];
    for(var i = 0;i < 10;i++){
      if(i === 0){
        jarray[i] = JSON.parse(array[i] + "}");
      }
      else{
        jarray[i] = JSON.parse(array[i].slice(1,array[i].length - 1) + "\"}");
      }
      score[i] = jarray[i]['Score'];
      areaname[i] = jarray[i]['Area Name'];
      latitude[i] = jarray[i]['Latitude'];
      longitude[i] = jarray[i]['Longitude'];
    }
    // console.log(jarray[0]);
    dispatch({
      type: GET_DATA,
      payload: {
        city: params.city,
        category: params.category,
        areatype: params.areatype,
        score: score,
        areaname: areaname,
        latitude: latitude,
        longitude: longitude,
      },
    });
  };
}