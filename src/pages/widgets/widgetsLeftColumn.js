// import React, { Component } from "react";
// import { DEFAULT_ADDRESS } from "../../component/constants";
// import { SAMPLE_SCORES } from "../../component/constants";
// import "./widgetsStyles.css";
// import AutoCompleteAddress from "../../component/AutoCompleteAddress";

// class WidgetsLeftColumn extends Component {
//   state = {
//     playerInfo: DEFAULT_ADDRESS,
//   };

//   selectedFeature = {
//     Nature: false,
//     Interest: false,
//     Architecture: false,
//     Comfort: false,
//     Total: false,
//     Access: false,
//     Safety: false,
//     Amenities: false,
//   };

//   selectedFeatureScore = {};

//   // loadPlayerInfo = (playerName) => {
//   //     nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId})
//   //         .then((info) => {
//   //             console.log(info);
//   //             const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
//   //             console.log(playInfo);
//   //             this.setState({ playerInfo: playInfo });
//   //         })
//   // }

//   selectIcon = (props) => {
//     //get clicked img
//     // var elem1 = document.getElementById('idDiv3');
//     // var elem2 = elem1.closest("#idDiv2");

//     var div = props.closest(".walkability-feature");

//     //find clicked element img
//     var newIcon = div.find(".walkability-feature-image img");

//     //Add selected
//     if (!div.hasClass("selected")) {
//       div.addClass("selected");
//       this.selectedFeature[div.context.outerText] = true;
//       newIcon.attr("src", newIcon.attr("src").replace("-faded", "-new"));
//     } else {
//       div.removeClass("selected");
//       //Replace -old src with -new of the clicked item
//       newIcon.attr("src", newIcon.attr("src").replace("-new", "-faded"));
//       this.selectedFeature[div.context.outerText] = false;
//     }

//     this.showScore();
//   };

//   showScore = () => {
//     this.selectedFeatureScore = {};
//     let feature;
//     for (feature in this.selectedFeature) {
//       if (this.selectedFeature[feature] === true) {
//         var scope = document.getElementById("scopes").value;
//         this.selectedFeatureScore[feature] = SAMPLE_SCORES[scope][feature];
//         console.log(`${feature}: ${this.selectedFeature[feature]}`);
//       }
//     }
//     // inputdata['Category'] = document.getElementById('category').value;
//     var json = JSON.stringify(this.selectedFeatureScore, null, 2);
//     var obj = JSON.parse(json);
//     // get only value
//     var values = Object.values(obj);
//     document.getElementById("score").innerHTML = values;
//   };

//   handleSelectPlayer = (playerName) => {
//     this.loadPlayerInfo(playerName);
//     // console.log(playerName);
//   };
//   //hide and show walkabilitity features
//   advanceFeature = () => {
//     var x = document.getElementById("walkability-features-detail");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div className="widgets-body">
//           <div className="walkspan-left-wrapper">
//             <div className="walkspan-left-panel top-panel">
//               <div className="search-wrapper">
//                 <div className="walkability-search-title">
//                   {" "}
//                   Enter an address
//                 </div>

//                 {/*<div className="search-wrapper">*/}
//                 {/*<img src="img/widgets/search.png"/>*/}
//                 <AutoCompleteAddress />
//                 {/*</div>*/}
//               </div>
//             </div>

//             <div className="walkspan-left-panel feature-panel">
//               <div className="walkability-advanced-title">
//                 Advanced
//                 <div className="arrow" onClick={this.advanceFeature}></div>
//               </div>

//               <div id="walkability-features-detail">
//                 <div className="walkability-features-title">
//                   {" "}
//                   Select walkability Features
//                 </div>
//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="the beauty of nature"
//                 >
//                   <div className="walkability-feature-image">
//                     <img src={require("../../img/widgets/nature-faded.png")} />
//                   </div>

//                   <div className="walkability-feature-name"> Nature</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="architecture beauty"
//                 >
//                   <div className="walkability-feature-image">
//                     <img
//                       src={require("../../img/widgets/architecture-faded.png")}
//                     />
//                   </div>
//                   <div className="walkability-feature-name"> Architecture</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="shops beauty"
//                 >
//                   <div className="walkability-feature-image">
//                     <img
//                       src={require("../../img/widgets/amenities-faded.png")}
//                     />
//                   </div>
//                   <div className="walkability-feature-name"> Amenities</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="intereset description"
//                 >
//                   <div className="walkability-feature-image">
//                     <img
//                       src={require("../../img/widgets/interest-faded.png")}
//                     />
//                   </div>
//                   <div className="walkability-feature-name"> Interest</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="comfort description"
//                 >
//                   <div className="walkability-feature-image">
//                     <img src={require("../../img/widgets/comfort-faded.png")} />
//                   </div>
//                   <div className="walkability-feature-name"> Comfort</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="safety description."
//                 >
//                   <div className="walkability-feature-image">
//                     <img src={require("../../img/widgets/safety-faded.png")} />
//                   </div>
//                   <div className="walkability-feature-name"> Safety</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="access description"
//                 >
//                   <div className="walkability-feature-image">
//                     <img src={require("../../img/widgets/access-faded.png")} />
//                   </div>
//                   <div className="walkability-feature-name"> Access</div>
//                 </div>

//                 <div
//                   className="walkability-feature"
//                   onClick={this.selectIcon}
//                   description="total description"
//                   value="total"
//                 >
//                   <div className="walkability-feature-image">
//                     <img src={require("../../img/widgets/total-faded.png")} />
//                   </div>
//                   <div className="walkability-feature-name"> Total</div>
//                 </div>

//                 <div className="walkability-features-title"> Select Scope</div>

//                 <form>
//                   <select name="scope" id="scopes">
//                     <option value="Block">Block</option>
//                     <option value="Quarter-Mile">Quarter Mile</option>
//                     <option value="Neighborhood">Neighborhood</option>
//                   </select>
//                 </form>
//                 <br />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default WidgetsLeftColumn;
