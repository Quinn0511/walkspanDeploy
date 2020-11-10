import React, { Component } from "react";

class CategorySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    //var message='You selected '+this.state.selectValue;
    return (
      <div>
        <select
          value={this.state.selectValue}
          id="category-selector"
          className="form-control"
          onChange={this.handleChange}
        >
          <option value="Nature">Nature</option>
          <option value="Safety">Safety</option>
          <option value="Architecture">Architecture</option>
          <option value="Amenities">Amenities</option>
          <option value="Interest">Interest</option>
          <option value="Comfort">Comfort</option>
          <option value="Safety">Safety</option>
          <option value="Safety">Safety</option>
          <option value="Access">Access</option>
        </select>
      </div>
    );
  }
}

export default CategorySelector;
