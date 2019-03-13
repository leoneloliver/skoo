import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import List from './components/List'
import styles from './styles/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Modal = () => {
  return (
    // <div className={`${styles['my-modal']} ${styles['show-it']}`}>
    <div className={`${styles['my-modal']}`} id="my-modal">
      <div className={styles['card']}>
        <div id="close" className={styles['close']}>X</div>
        <div className={`${styles['profile-bg']} ${styles['center']}`}>
          <img src="" id="avatar" className={styles['avatar-details']}/> 
        </div> 
        <div className={styles['profile-info']}>
          <div className={`${styles['review']} ${styles['center']}`}><span>&#9733;</span> 4.9</div>
          <h2 id="name" className={styles['center']}></h2>
          <div id="email" className={styles['center']}></div>
          <div id="address" className={`${styles['address-details']} ${styles['center']}`}></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className={styles['profile-footer']}>
          
          <a className={styles['btn-send']} id="call-msg">Contact</a>
        </div>
      </div>
    </div>
  );
};

const Msg = () => {
  return (
    <div id="message-box" className={styles['message-box']}>
      <div id="close-box" className={styles['close-box']}>X</div>
      <div className={styles['message-container']}>
        <div className={styles['message-title']}>
          <img src="" id="mini-avatar" className={styles['mini-avatar']}/><div className={styles['badge']} id="badge"></div>
        </div>
        <div id="msg" className={styles['msg']}>
        </div>
      </div>
      <div className={styles['message-footer']}>   
        <input type="text" name="message" id="message" placeholder="Write a message"/>
        <input type="submit" value="Send" id="send"/>
      </div>
  </div>
  );

};



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

          <Modal />
          
          <Footer />
          <Msg />
        </div>
      </Router>
    );
  }
}

export default App;