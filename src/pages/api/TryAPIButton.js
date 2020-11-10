import React, {Component} from 'react';
import './apiStyles.css';
import fetchJsonp from "fetch-jsonp";


class TryApiButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    // componentDidMount() {
    //     let address =  "573 Hudson St, New York, NY 10014, USA";
    //     let category = "Nature";
    //     let areatype = "Block";
    //
    //     var url = 'http://34.227.93.214:8080/SenseOfWalkAPI_war/api' + '?' + 'address=' + address
    //         + '&' + 'category=' + category + '&' + 'areatype=' + areatype;
    //
    //     // payload is your post data
    //     // const payload = {data: 'test'};
    //
    //     fetchJsonp(url, {
    //         jsonpCallbackFunction: 'GetPartDataJson'
    //     })
    //         .then(function(response) {
    //             var finalJsonData = response.JSonDataFinal;
    //             var json = JSON.stringify(finalJsonData, null, 2);
    //             // this.props.
    //             console.log(json);
    //             // document.getElementById('outputarea').value = json;
    //             // return json
    //         }).then(function(json) {
    //         console.log('parsed json', json)
    //     }).catch(function(ex) {
    //         console.log('parsing failed', ex)
    //     })
    //
    // }

    render() {
        return (
            <button onClick={this.componentDidMount}>
                {/*{this.state.isToggleOn ? 'ON' : 'OFF'}*/}
            </button>
        );
    }

    // render() {
    //     return (
    //         <div>
    //             <input type="submit" value="Try API" className="btn btn-primary text-white" id="apibutton"/>
    //         </div>
    //     );
    // }
}

export default TryApiButton;