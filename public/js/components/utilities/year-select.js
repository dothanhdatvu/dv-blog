// public/js/components/year-dropdown.js

import React from 'react';

const YearSelect = React.createClass({
  onSelectChange(e) {
    this.props.onSelectChange(e.target.value);
  },
  render() {
    let currentYear = new Date().getFullYear();
    let years = [];
    let startYear = 2010;

    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    let yearItems = years.map(item => {
      return (
        <option key={item} value={item}>{item}</option>
      );
    });

    return (
      <select className="form-control" id={this.props.idName}
        value={this.props.value} onChange={this.onSelectChange}>
          <option value="" disabled="disabled"> -- Select year --</option>
          {yearItems}
      </select>
    )
  }
});

export default YearSelect;
