import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.handleChange} />
      </div>
    );
  }
}
