import React, {Component} from 'react';
import ControlPanelImageAndName from "./ControlPanelImageAndName";

class ControlPanelButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featureImageUrl: props.featureImageUrl,
            featurename: props.featurename
        }
    }

    onclick = () => {

        this.props.clickHelper(this.state.featurename);
        // this.setState({featureImageUrl: newImageUrl});
    }

    render() {
        return (
            <button onClick={this.onclick}>
                <ControlPanelImageAndName featureImageUrl={this.state.featureImageUrl}
                                     featurename={this.state.featurename}/>
            </button>
        );
    }
}

export default ControlPanelButton;