
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//exporting this component to be used somewhere  else
export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
        <div className="text-center">
          <footer>
            <Link style={{padding: '5px'}} to="/">Home</Link>
            <Link style={{padding: '5px'}} to="/about">About Me</Link>
            <Link style={{padding: '5px'}} to="/contact">Contact Me</Link>
          </footer>
        </div>
    );
  }
};

