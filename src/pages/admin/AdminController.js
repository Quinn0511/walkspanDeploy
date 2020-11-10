import React, {Component} from 'react';

import './adminPageStyles.css';
import ControlPanel from "./ControlPanel";
import ContentByControlPanel from "./ContentByControlPanel";
import APIContent from "./component_of_control_panel/APIContent";
import ProfileContent from "./component_of_control_panel/ProfileContent";
import DataContent from "./component_of_control_panel/DataContent";
import HelpContent from "./component_of_control_panel/HelpContent";
import UpgradeContent from "./component_of_control_panel/UpgradeContent";
import WidgetContent from "./component_of_control_panel/WidgetContent";



export class AdminController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentToRender: <ProfileContent/>,
            featureToRender: [],
            featuresname: ["API", "Data", "Profile", "Help", "Upgrade", "Widget"],
            featuresImageUrl: ["nature-faded.png", "access-faded.png", "amenities-faded.png", "architecture-faded.png", "comfort-faded.png", "interest-faded.png", "safety-faded.png", "total-faded.png"],
        }
    }

    tellControllerSelectedFeatures(currentFeature) {
        console.log(currentFeature);
        this.setState({featureToRender: currentFeature});
        if (currentFeature === "API") {
            this.setState({contentToRender: <APIContent/>});
        }
        if (currentFeature === "Data") {
            this.setState({contentToRender: <DataContent/>});
        }

        if (currentFeature === "Profile") {
            this.setState({contentToRender: <ProfileContent/>});
        }

        if (currentFeature === "Help") {
            this.setState({contentToRender: <HelpContent/>});
        }

        if (currentFeature === "Upgrade") {
            this.setState({contentToRender: <UpgradeContent/>});
        }

        if (currentFeature === "Widget") {
            this.setState({contentToRender: <WidgetContent/>});
        }


    }


    render() {
        return (
            <div className="SplitPane">
                <div className="SplitPane-left">
                    <ControlPanel featuresname={this.state.featuresname}
                                  featuresImageUrl={this.state.featuresImageUrl}
                                  featureToRender={this.state.featureToRender}
                                  tellControllerSelectedFeatures={this.tellControllerSelectedFeatures.bind(this)} />
                </div>
                <div className="SplitPane-right">
                    <ContentByControlPanel contentToRender = {this.state.contentToRender} />
                </div>
            </div>
        );
    }
}

export default AdminController;