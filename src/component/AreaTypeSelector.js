import React, {Component} from 'react';

class AreaTypeSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (e) => {
        this.setState({value:e.target.value});
    }
    render() {
        return (
            <div>
                <select value={this.state.selectValue} id="area-type-selector" className="form-control"
                        onChange={this.handleChange}>
                    <option value="Block">Block</option>
                    <option value="Neighborhood">Neighborhood</option>
                    <option value="Quarter-Mile">Quarter-Mile</option>
                </select>
            </div>
        );
    }
}

export default AreaTypeSelector;