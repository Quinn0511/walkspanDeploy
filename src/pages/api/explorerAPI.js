const $ = require('jquery');

var address, category, areatype;

(function (explorerAPI) {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }
        return JSON.stringify(obj);
    }



    var inputdata = {
        "Location": document.getElementById('address-selector').placeholder,
        "Category": document.getElementById('category-selector').value,
        "Area Type": document.getElementById('area-type-selector').value,
    }

    var partdata;



    document.getElementById('inputarea').value = JSON.stringify(inputdata, null, 2);

    $("#location").change(function () {
        inputdata['Location'] = document.getElementById('address-selector').value;
        var json = JSON.stringify(inputdata, null, 2);
        document.getElementById('inputarea').value = json;
    });

    $("#category").change(function () {
        inputdata['Category'] = document.getElementById('category-selector').value;
        var json = JSON.stringify(inputdata, null, 2);
        document.getElementById('inputarea').value = json;
    });

    $("#area-type").change(function () {
        inputdata['Area Type'] = document.getElementById('area-type-selector').value;
        var json = JSON.stringify(inputdata, null, 2);
        document.getElementById('inputarea').value = json;
    });

    $(function () {
        $("#apibutton").click(function () {
                address = document.getElementById('address-selector').value;

                if (address == '') {
                    address = document.getElementById('address-selector').placeholder;
                }
                category = document.getElementById('category-selector').value;
                areatype = document.getElementById('area-type-selector').value;
                inputdata['Location'] = address;
                inputdata['Category'] = category;
                inputdata['Area Type'] = areatype;
                document.getElementById('inputarea').value = JSON.stringify(inputdata, null, 2);
                getScoreForSingleLocationSingleCategorySingleAreatype(address, category, areatype);
                // document.getElementById('outputarea').value = partdata;

            }
        );
    });

    function GetPartDataJson(json) {
        var finalJsonData=json.JSonDataFinal;
        partdata = JSON.stringify(finalJsonData, null, 2);
        document.getElementById('outputarea').value = partdata;
        console.log(finalJsonData);
        // return partdata;
    }

    // http://34.227.93.214:8080/SenseOfWalkAPI_war/api?address=573 Hudson St, New York, NY 10014, USA&category=Nature&areatype=Block

    function getScoreForSingleLocationSingleCategorySingleAreatype(address, category, areatype) {
        // request parameters
        // var url = './recommendation' + '?' + 'user_id=' + user_id + '&lat='
        //     + lat + '&lon=' + lng;
        // var url = "http://localhost:8085/senseofwalk/data";
        // var address = "573 Hudson St, New York, NY 10014, USA";


        var url = 'http://34.227.93.214:8080/SenseOfWalkAPI_war/api' + '?' + 'address=' + address
            + '&' + 'category=' + category + '&' + 'areatype=' + areatype;
        console.log(url);

        $.ajax({
            url: url,
            type: "GET",
            dataType: 'jsonp',
            jsonpCallback: "GetPartDataJson",
            async: false,
            global: false,
            success: function(response) {
                // console.log(response);
                var finalJsonData = response.JSonDataFinal;
                var json = JSON.stringify(finalJsonData, null, 2);
                console.log(json);
                document.getElementById('outputarea').value = json;
                // document.getElementById("updatetable").click();

            },
            error: function () {
                alert("Errr is occured. Could not reach the backend!");
            }
        });
    }



})($);

module.exports = $;