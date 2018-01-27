import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';




export default class About extends Component {


  	render() {
	    return (
	        <div>
	        	<Header/>
	          	<h1>About Me</h1>
		          	<h3 className="text-center">Dancer, Foodie, Fitness Nut, Rangers Fan</h3>
		          		<img src="./images/boxing.jpg"/>
		          		<img src="./images/food.jpg"/>
		          	<h2 className = "text-center">My Projects<h2>	
		          	<h3 className="text-center">Click on a project to view</h3>	
		          
		        <Footer/>
	 		</div>
	    );
  	}
};