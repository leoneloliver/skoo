import React, { Component } from 'react';
import logo from '../images/logo.png';
import styles from '../styles/main.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     
       <header>
			  <div className={styles['container']}>
			    <div className={styles['header']}>
			 			<img src={logo} className={styles['logo']} alt="logo" />
			    </div>
			    <nav>
			      <ul>
			        
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/List">Tutors</Link></li>
			        <li><Link to="/Contact">Contact</Link></li>

			      </ul>
			    </nav>
			  </div>
			</header>
    );
  }
}

export default Header;