import React, {Component} from 'react';
import ReactDOM from 'react';
import './dataStyles.css';
import fetchJsonp from "fetch-jsonp";
// export class SampleDataTable extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {city: 'New York', category: 'Nature', areatype: 'Block'};
//         this.onClick = this.onClick.bind(this);
//     }

//     onClick = (props) => {
//         this.loadSampleData('New York', 'Nature', 'Block');
//     }


//     loadSampleData = (city, category, areatype) => {
//         // var url = "http://localhost:8085/senseofwalk/data";
//         var address = "573 Hudson St, New York, NY 10014, USA";
//         // var url = 'http://localhost:8085/senseofwalk/data' + '?' + 'city=' + city
//         //     + '&' + 'category=' + category + '&' + 'areatype=' + areatype;
//         var url = 'http://34.227.93.214:8080/SenseOfWalkAPI_war/data' + '?' + 'city=' + city
//             + '&' + 'category=' + category + '&' + 'areatype=' + areatype;
//         console.log(url);

//         fetchJsonp(url, {
//             jsonpCallbackFunction: 'GetPartDataJson'
//         })
//             .then(function(response) {
//                 var finalJsonData = response.JSonDataFinal;
//                 var json = JSON.stringify(finalJsonData, null, 2);
//                 document.getElementById('output1').value = json;
//                 // this.props.
//                 // console.log(json);
//                 return response.json()
//             }).then(function(json) {
//             console.log('parsed json', json)
//         }).catch(function(ex) {
//             console.log('parsing failed', ex)
//         })

//     }



//     GetPartDataJson = (json) => {
//         var finalJsonData=json.JSonDataFinal;
//         var partdata = JSON.stringify(finalJsonData, null, 2);
//         document.getElementById('output1').value = partdata;
//         console.log(finalJsonData);
//         return partdata;
//     }

//     render() {
//         return (
//             <div>
//                 <div className="text-center">
//                 <button className="btn btn-lg btn-primary-white text-orange"
//                         onClick={this.onClick}>Sample Record</button>
//                 </div>

//             </div>
//         );
//     }
// }

// ReactDOM.render(<SampleDataTable/>, document.getElementById('output1'));