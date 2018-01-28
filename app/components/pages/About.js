import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';




export default class About extends Component {


  	render() {
	    return (
	        <div style={{backgroundColor: '#ffe6ff'}}>
	        	<Header/>
	          	<h1 className="text-center">About Me</h1>
		          	<h3 className="text-center">Dancer, Foodie, Fitness Nut, Rangers Fan</h3>
		          		<div class="text-center"><img id="foodpic" className="image-center" style={{height: '300px', alignItems: 'center'}}src="./images/food.jpg"/></div>
		          		
		          	<h2 className = "text-center">My Projects</h2>	
		          	<h3 className="text-center">Click on a project to view github!</h3>	
		          		<ul className="text-center" style={{color:'black'}}>
		          			<li> <a href="https://github.com/mikaelaustin/world_holiays_app" target="_blank" style={{color:'black'}}>World Holiday App</a></li>
		          			<li> <a href="https://github.com/mikaelaustin/rottentomatoes_scrape_handlebars" target="_blank" style={{color:'black'}}>Rotten Tomatoes</a></li>
		          			<li><a href="https://github.com/mikaelaustin/horoscope_app" target="_blank" style={{color:'black'}}>Horoscrope App</a></li>
		          			<li> <a href="https://github.com/mikaelaustin/patronus_app" target="_blank" style={{color:'black'}}>Patronus App</a></li>
		          			<li> <a href="https://github.com/mikaelaustin/bulletinboard_app" target="_blank" style={{color:'black'}}>Bulletin Board</a></li>		          			
		          		</ul> 
		        <Footer />
	 		</div>
	    );
  	}
};