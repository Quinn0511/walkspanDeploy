import React from 'react';
import Table from './Table.jsx';


// export default class ShowTable extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             tableData:
//                 [{
//                     "Score": "3.00",
//                     "Area Name": "BLEECKER ST",
//                     "Latitude": "40.7360584",
//                     "Longitude": "-74.005103"
//                 }, {
//                     "Score": "3.00",
//                     "Area Name": "E 31 ST",
//                     "Latitude": "40.745405",
//                     "Longitude": "-73.983613"
//                 }, {
//                     "Score": "1.00",
//                     "Area Name": "2 AV",
//                     "Latitude": "40.744681",
//                     "Longitude": "-73.975814"
//                 }, {
//                     "Score": "3.00",
//                     "Area Name": "DRIVEWAY",
//                     "Latitude": "40.713578",
//                     "Longitude": "-73.999532"
//                 }, {
//                     "Score": "1.00",
//                     "Area Name": "CANAL ST",
//                     "Latitude": "40.717907",
//                     "Longitude": "-73.999539"
//                 }, {
//                     "Score": "3.00",
//                     "Area Name": "GREENWICH ST",
//                     "Latitude": "40.72062",
//                     "Longitude": "-74.009915"
//                 }, {
//                     "Score": "3.00",
//                     "Area Name": "WEST ST",
//                     "Latitude": "40.729231",
//                     "Longitude": "-74.009915"
//                 }, {
//                     "Score": "2.00",
//                     "Area Name": "W 18 ST",
//                     "Latitude": "40.740265",
//                     "Longitude": "-73.996385"
//                 }, {
//                     "Score": "2.00",
//                     "Area Name": "W 31 ST",
//                     "Latitude": "40.748867",
//                     "Longitude": "-73.990757"
//                 }, {"Score": "2.00", "Area Name": "W 41 ST", "Latitude": "40.756896", "Longitude": "-73.991381"}]
//         }
//         // console.log(this.state);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick = (e) => {
//         console.log('Click happen');
//         this.setState( {tableData: eval(e)});
//     }
// // <button onClick={() => this.handleClick(Array.from() }>Main</button>


//     render() {
//         return (
//             <div className="App" className="text-center">
//                 {/*$("#sample").click={() => this.handleClick(document.getElementById("output1").value)}>Main</>*/}
//                 <button id="updatetable" onClick={() => this.handleClick(document.getElementById("output1").value)}>Main</button>
//                 <Table data={this.state.tableData}/>
//             </div>


//         );
//     }


// }