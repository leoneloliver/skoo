import React, {Component} from 'react'
import styles from '../styles/main.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className={styles['panel-home']}>
			  <div className={styles['title-container']}>
			    <h1 className={styles['center']}>Welcome</h1>
			    
			    <p className={styles['center']}>
			    	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			    </p>
			   
			    <p className={`${styles['btn-space']} ${styles['center']}`}>
			    	<Link to="/List" className={styles['btn-start']}>Get Started</Link>
			    	
			    </p>

			  </div>
			  
			</div>
    );
  }
}

export default Home;



      






          