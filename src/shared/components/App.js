import React, { Component, PropTypes } from 'react';
import Home from './Home';
import Project from './Project';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>This is coming from the App Component</h2>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
}
