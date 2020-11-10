import React, { useState, useEffect, useRef, useContext } from "react";
import '../pages/api/apiStyles.css';
import { MyContext } from './context-manager';

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}

function GoogleAddressComplete() {
    const {setAddress} = useContext(MyContext);
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);


    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyBOXYeVd2IW4rON6FTyLBesJOG87NE3BJo&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    useEffect(()=>{
        setAddress(query)
    }, [query])

    return (

        <div className="form-group">
            <input
                ref={autoCompleteRef}
                onChange={event => {
                    setQuery(event.target.value);
                }}
                // placeholder="573 Hudson St, New York, NY 10014, USA"
                placeholder="Input a address"
                value={query}
                className="api-address-search"
                id="address-selector"
            />
        </div>
    );
}

export default GoogleAddressComplete;