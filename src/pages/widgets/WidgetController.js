// import React, { Component } from "react";

// import FeaturesBox from "./WidgetBox/FeatureBox/FeaturesBox";
// import Selection from "./WidgetBox/SelectionBox/Selection";
// import RangeSlider from "./WidgetBox/SelectionBox/RangeSlider";
// import WidgetBox from "./WidgetBox/widgetBox";
// import GoogleAddressComplete from "../../temporary/GoogleAddressComplete";

// class WidgetController extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       selectedFeatures: [],
//       address: "",
//       scores: [],
//       currentSelectedScore: [],
//       featureScore: {
//         Nature: 1,
//         Access: 2,
//         Amenities: 2,
//         Architecture: 3,
//         Comfort: 2,
//         Interest: 1,
//         Safety: 2,
//         Total: 2,
//       },
//       featuresname: [
//         "Nature",
//         "Access",
//         "Amenities",
//         "Architecture",
//         "Comfort",
//         "Interest",
//         "Safety",
//         "Total",
//       ],

//       featuresImageUrl: [
//         "Nature-faded.png",
//         "Access-faded.png",
//         "Amenities-faded.png",
//         "Architecture-faded.png",
//         "Comfort-faded.png",
//         "Interest-faded.png",
//         "Safety-faded.png",
//         "Total-faded.png",
//       ],

//       slider: [100],
//       checkedView: [
//         { id: 1, value: "Speedometer View", isChecked: false },
//         { id: 2, value: "Show Description", isChecked: true },
//         { id: 3, value: "Show Icons", isChecked: true },
//         { id: 4, value: "Show Feature Name", isChecked: true },
//       ],

//       currentSelectedTitle: [],
//       featureAdj: ["Poor", "Okay", "Amazing"],
//       featureTitle: {
//         Nature: "For Nature",
//         Access: "Transit Option",
//         Amenities: "For Amenities",
//         Architecture: "For building",
//         Comfort: "For Comfort",
//         Interest: "For Interest",
//         Safety: "Safe Area",
//         Total: "For Walking",
//       },

//       currentSelectedDescription: [],
//       featureDescript: {
//         Nature: "Nature Description",
//         Access: "Access Description",
//         Amenities: "Amenities Description",
//         Architecture: "Architecture Description",
//         Comfort: "Comfort Description",
//         Interest: "Interest Description",
//         Safety: "Safe Description",
//         Total: "Total Description",
//       },
//     };
//   }

//   handleEmail = (event) => {
//     this.setState({ email: event.target.value });
//   };
//   handleChange = (newValue) => {
//     this.setState({ slider: newValue });
//   };

//   handleCheck = (id, checked) => {
//     // deep copy old state (check out lodash for a nicer deepCopy)
//     const checkedView = JSON.parse(JSON.stringify(this.state.checkedView));
//     const checkBox = checkedView.find((view) => view.id === id);
//     checkBox.isChecked = checked;
//     // update whole object of new state
//     this.setState({ checkedView: checkedView });
//   };

//   tellControllerSelectedFeatures(currentFeature) {
//     let updatedSelectedFeatures = this.state.selectedFeatures;
//     if (this.state.selectedFeatures.includes(currentFeature)) {
//       // updatedSelectedFeatures = updatedSelectedFeatures.splice(updatedSelectedFeatures.indexOf(currentFeature), 1);
//       updatedSelectedFeatures = this.state.selectedFeatures.filter(
//         (e) => e !== currentFeature
//       );
//     } else {
//       updatedSelectedFeatures = [...updatedSelectedFeatures, currentFeature];
//       // this.setState({selectedFeatures: this.state.selectedFeatures.concat(currentFeature)})
//     }
//     var feature;
//     let updatedSelectedScore = [];
//     let updatedSelectedTitle = [];
//     let updatedSelectedDescription = [];
//     for (feature of updatedSelectedFeatures) {
//       updatedSelectedScore = [
//         ...updatedSelectedScore,
//         this.state.featureScore[feature],
//       ];
//       updatedSelectedTitle = [
//         ...updatedSelectedTitle,
//         this.state.featureTitle[feature],
//       ];
//       updatedSelectedDescription = [
//         ...updatedSelectedDescription,
//         this.state.featureDescript[feature],
//       ];
//     }

//     console.log(this.state.selectedFeatures);
//     // this.props.selectedFeatures(updatedSelectedFeatures);
//     this.setState({ selectedFeatures: updatedSelectedFeatures });
//     this.setState({ currentSelectedScore: updatedSelectedScore });
//     this.setState({ currentSelectedTitle: updatedSelectedTitle });
//     this.setState({ currentSelectedDescription: updatedSelectedDescription });
//   }

//   tobrotherdata = (email) => {
//     this.setState({ email: email });
//   };

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
//         {/* <div>Parent Record Email：{this.state.email}</div>
//                 <div className="status">Widget Controller - Selected features: {this.state.selectedFeatures}</div> */}
//         {/*<LeftCollum name="email" handleEmail={this.handleEmail.bind(this)}*/}
//         {/*            tellParentSelectedFeature = {this.tellParentSelectedFeatures.bind(this)}*/}
//         <GoogleAddressComplete />

//         <div className="walkability-advanced-title">
//           Advanced
//           <div className="arrow" onClick={this.advanceFeature}></div>
//         </div>
//         <div id="walkability-features-detail">
//           <FeaturesBox
//             name="email"
//             handleEmail={this.handleEmail.bind(this)}
//             featuresname={this.state.featuresname}
//             featuresImageUrl={this.state.featuresImageUrl}
//             selectedFeatures={this.state.selectedFeatures}
//             // tellParentSelectedFeature = {(data) => this.tellParentSelectedFeatures.bind(data)}
//             tellControllerSelectedFeatures={this.tellControllerSelectedFeatures.bind(
//               this
//             )}
//           />

//           <Selection
//             checkedView={this.state.checkedView}
//             handleCheck={this.handleCheck}
//           />
//           <RangeSlider
//             slider={this.state.slider}
//             onChange={this.handleChange}
//           />
//         </div>

//         <WidgetBox
//           selectedFeatures={this.state.selectedFeatures}
//           featureScore={this.state.featureScore}
//           checkedView={this.state.checkedView}
//           slider={this.state.slider}
//           featureTitle={this.state.featureTitle}
//           featureDescript={this.state.featureDescript}
//         />
//       </div>
//     );
//   }
// }

// export default WidgetController;
