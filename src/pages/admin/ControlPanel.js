import React, {Component} from 'react';
import './adminPageStyles.css';
import ControlPanelButton from "./ControlPanelButton";



class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuresname: this.props.featuresname,
            featuresImageUrl: this.props.featuresImageUrl,
            featureToRender: this.props.featureToRender
        }
    }


    featureButton(i) {
        return (<ControlPanelButton featureImageUrl={this.state.featuresImageUrl[i]}
                             featurename={this.state.featuresname[i]}
                             clickHelper={this.props.tellControllerSelectedFeatures} />
        );
    }

    render() {
        return(
            <div className="ControlPanel">
                {this.featureButton(0)}
                {this.featureButton(1)}
                {this.featureButton(2)}
                {this.featureButton(3)}
                {this.featureButton(4)}
            </div>
        )
    }
}

export default ControlPanel;