import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={this.props.handleChange} />
      </>
    );
  }
}
