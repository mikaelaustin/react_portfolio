import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


export default class Home extends Component {
  	render() {
	    return (
	        <div style={{backgroundColor: '#b3ffff'}}>
	        	<Header/>
	          	<h1 className = "text-center">Welcome to Mikael's Site!</h1>
		         <img id="me" style={{height: '300px', transform: 'rotate(-90deg)', top: '30px'}} src="./images/me.jpg"/><br></br>
		          		
				<Footer/>
			</div>	
	    );
  	}
};