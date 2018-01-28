import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

var Form = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      email: '',
      message: ''
    }
 },
 submitForm: function(e){
    e.preventDefault();

    this.setState({
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    })
 	this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.message.value = "";
},
	render: function() {
	    console.log(this.state)
	    return (
	        <div style={{backgroundColor:'#ccffcc'}}>
	          <div className="text-center" >
	            <h1>Contact Me</h1>
	            <form onSubmit={this.submitForm}>
	              <div>
	                <div className="form-group">
	                  <span className="glyphicon glyphicon-user"><input className="form-control" type="text" ref="name" placeholder="Enter Name"/></span>
	                </div>
	                <div className="form-group">
	                  <span className="glyphicon glyphicon-envelope"><input className="form-control" type="text" ref="email" placeholder="Enter Email"/></span>
	                </div>
	                <div className="form-group">
	                  <span className="glyphicon glyphicon-file"><textarea className="form-control" type="textarea" ref="message" placeholder="Enter Message"/></span>
	                </div>
	                <div className="form-group">
	                  <input className="btn btn-default" type="submit" />
	                </div>
	              </div>
	            </form>
	          </div>
	          <Footer />
	        </div>
    	);
  	}
 
});

module.exports = Form;
