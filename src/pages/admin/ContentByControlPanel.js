import React, {Component} from 'react';
import './adminPageStyles.css';
import ProfileContent from "./component_of_control_panel/ProfileContent";
class ContentByControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {contentToRender: this.props.contentToRender}
    }
    render() {
        return (
            <div className="ContentByControlPanel">
                {this.props.contentToRender}
                {/*<ProfileContent />*/}
            </div>
            )

    }

}

export default ContentByControlPanel;