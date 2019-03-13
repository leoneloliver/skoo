import React, {Component} from 'react'
import snipet from '../images/ajax-loader.gif';
import SearchBar from './SearchBar'
import styles from '../styles/main.css'
import axios from 'axios'

class List extends Component {

handleClick = () => {
    var objBody = document.body;
    function clickable(){
      var classname = document.getElementsByClassName("class-static");
      var myFunction = function() {
        var fullname = this.getAttribute("data-fullname");
        var address = this.getAttribute("data-address");
        var email = this.getAttribute("data-email");
        var avatar = this.getAttribute("data-avatar");
        document.getElementById("my-modal").classList.add("show-it");
        //alert(fullname+' - '+address+' - '+email+' - '+avatar);
        document.getElementById("avatar").src=avatar;
        document.getElementById("name").innerText=fullname;
        document.getElementById("address").innerText=address;
        document.getElementById("email").innerText=email;
        objBody.classList.add("noscroll");


        document.getElementById("my-modal").classList.add("show-it"); 
        document.getElementById("badge").innerText=fullname;
        document.getElementById("mini-avatar").src=avatar;
       

        // document.getElementById("badge").innerText=fullname;
        // document.getElementById("mini-avatar").src=avatar;
      };
      document.getElementById("loading").classList.add("loaded"); 
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
      document.getElementById("close").addEventListener("click", closeModal);
      document.getElementById("my-modal").addEventListener("click", closeModal);
      function closeModal(){
        document.getElementById("my-modal").classList.remove("show-it");
        objBody.classList.remove("noscroll");
      }
    }
    setTimeout(function(){ clickable(); }, 900);
    setTimeout(function(){ 
      document.getElementById("fill").classList.add("full");
    },50);

     
    document.getElementById("close-box").addEventListener("click", closeMessege);
    function closeMessege(){
      document.getElementById("message-box").classList.remove("show");
    }
    var callMsg = function(){
      var box = document.getElementById("msg");
      box.innerHTML = "";
      document.getElementById("message-box").classList.add("show"); 
      var btn = document.getElementById("send");
      var message = document.getElementById("message");
      message.focus();

      function sendMessage(){
        box.innerHTML += "<p class='line'>"+ message.value+"</p>";
        message.value = "";
      }
      
      btn.addEventListener("click", sendMessage);
      
    }
    document.getElementById("call-msg").addEventListener("click", callMsg);
 
    
  }
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      users: [],
      store: []
    }
  }
  componentDidMount() {
    //call function when load page list
    this.handleClick();
    window.addEventListener('load', this.handleLoad);
    axios.get('https://randomuser.me/api/?results=50')
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,       
        avatar: `${result.picture.large}`,
        email: `${result.email}`, 
        state: `${result.location.city} - ${result.location.state}`,
        phone: `${result.phone}`
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }
  filterNames(e){
    this.setState({users: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))});
    this.handleClick();
  }
  handleLoad() {
    this.handleClick();
  }
  render() {
    const {users} = this.state
    return (
      <div>
        <div className={styles['panel']}>
          <div className={styles['title-container']}>
            <h1 className={styles['center-mobile']}>Tutors</h1>
          </div>
        </div>   
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <div id="productPage" className={styles['list-view']}>
          <ul className={styles['productWrapper']}>
            {users.map(
              user =>
                <li className={`${styles['product-block']} class-static`} data-avatar={user.avatar} data-fullname={user.name} data-address={user.state} data-email={user.email}>
                  <div className={styles['pb-upper']}>
                    <div className={styles['pb-image']}>
                      <a><img src={user.avatar} className={styles['pb-img']} /></a>
                    </div>
                    <div className={styles['pb-description']}>
                      <div className={styles['description']}>
                        <p>{user.name}</p>
                        <p className={styles['address']}>{ user.email }</p>
                        <p className={styles['location']}>{ user.state }</p>
                      </div>        
                    </div>
                  </div>
                </li>
            )}
          </ul>
        </div>

        <div id="loading" className={`${styles['loading']} ${styles['center']}`}>
          <div id="bar" className={styles['bar']}>
            <div id="fill" className={styles['fill']}></div>
          </div>
          <img src={snipet} className={styles["ico-load"]} />
        </div>

      </div>  
    );
  }
}
export default List;