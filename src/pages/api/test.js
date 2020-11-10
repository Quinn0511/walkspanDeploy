import React, {Component} from 'react';
import fetchJsonp from "fetch-jsonp";
class MyComponent extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    };
}

componentDidMount() {
    let address =  "573 Hudson St, New York, NY 10014, USA";
    let category = "Nature";
    let areatype = "Block";

    var url = 'http://34.227.93.214:8080/SenseOfWalkAPI_war/api' + '?' + 'address=' + address
        + '&' + 'category=' + category + '&' + 'areatype=' + areatype;

    // payload is your post data
    // const payload = {data: 'test'};


    // References: https://www.npmjs.com/package/fetch-jsonp

    fetchJsonp(url, {
        jsonpCallbackFunction: 'GetPartDataJson'
    })
        .then(function(response) {
            var finalJsonData = response.JSonDataFinal;
            var json = JSON.stringify(finalJsonData, null, 2);
            // this.props.
            console.log(json);
            return response.json()
        }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })

    // const options = {
    //     method: 'GET',
    //     dataType: 'jsonp',
    //     jsonpCallback: "GetPartDataJson",
    //     async: false,
    //     // body: JSON.stringify(payload),
    //     cors: true, // allow cross-origin HTTP request
    //     credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
    // };
    // function GetPartDataJson(json) {
    //     var finalJsonData=json.JSonDataFinal;
    //     // var partdata = JSON.stringify(finalJsonData, null, 2);
    //     // document.getElementById('outputarea').value = partdata;
    //     console.log(finalJsonData);
    //     // return partdata;
    // }
    //
    // // SEND REQUEST
    // fetch(url, options).then((response) => {
    //     console.log(response.JSonDataFinal)
    // }).catch((error) => {
    //     // TODO
    // });

    //
    // fetch(url)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: result.items
    //             });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             });
    //         }
    //     )
}

render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.name}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}
}


export default MyComponent;