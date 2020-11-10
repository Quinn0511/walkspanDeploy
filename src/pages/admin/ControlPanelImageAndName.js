import React, {Component} from 'react';

class ControlPanelImageAndName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.featurename}</h3>

            </div>
        );
    }
}

export default ControlPanelImageAndName;