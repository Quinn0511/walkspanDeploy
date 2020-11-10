// import React, { Component } from "react";
// import FeatureImageAndName from "./FeatureImageAndName";

// class FeatureUnit extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       featureImageUrl: props.featureImageUrl,
//       featurename: props.featurename,
//     };
//   }

//   onclick = () => {
//     let newImageUrl;
//     if (this.state.featureImageUrl.includes("faded")) {
//       newImageUrl = this.state.featureImageUrl.replace("faded", "new");
//     } else {
//       newImageUrl = this.state.featureImageUrl.replace("new", "faded");
//     }
//     this.props.clickHelper(this.state.featurename);
//     this.setState({ featureImageUrl: newImageUrl });
//   };

//   render() {
//     return (
//       <div className="walkability-feature" onClick={this.onclick}>
//         <FeatureImageAndName
//           featureImageUrl={this.state.featureImageUrl}
//           featurename={this.state.featurename}
//         />
//       </div>
//     );
//   }
// }

// export default FeatureUnit;
