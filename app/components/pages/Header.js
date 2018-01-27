import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default clearfix" role="navigation">
            <h2 className="text-center">Mikael's Portfolio</h2>
          </nav>
        </header>
      </div>
    );
  }
};