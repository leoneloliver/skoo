import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import List from './components/List'
import styles from './styles/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className={styles['main']} >          
            <div className={styles['main-content']}>
              <Route exact path="/" component={Home} />  
              <Route exact path="/list" component={List} />          
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;