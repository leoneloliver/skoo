import React, {Component} from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/main.css'
import axios from 'axios'

class List extends Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     users: [],
  //     store: []
  //   }
  // }

  // componentDidMount(){
  //   // axios.get('https://randomuser.me/api/?results=50')
  //   axios.get('https://randomuser.me/api/?results=50')
  //   .then(json => json.data.results.map(result => (
  //     {
  //       name: `${result.name.first} ${result.name.last}`,       
  //       avatar: `${result.picture.large}`,
  //       email: `${result.email}`, 
  //       state: `${result.location.city} - ${result.location.state}`,
  //       phone: `${result.phone}`
  //     })))
  //   .then(newData => this.setState({users: newData, store: newData}))
  //   .catch(error => alert(error))
  // }

  // filterNames(e){
  //   this.setState({users: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  // }


// --------

handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("class-static");
      var myFunction = function() {
        var fullname = this.getAttribute("data-fullname");
        var address = this.getAttribute("data-address");
        var email = this.getAttribute("data-email");
        var avatar = this.getAttribute("data-avatar");

        document.getElementById("my-modal").classList.add("show-it");

        alert(fullname+' - '+address+' - '+email+' - '+avatar);

      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });

      document.getElementById("close").addEventListener("click", closeModal);
      function closeModal(){
        document.getElementById("my-modal").classList.remove("show-it");
      }

    }
    setTimeout(function(){ clickable(); }, 900);
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
    // axios.get('https://randomuser.me/api/?results=50')
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
    //call function when search 
    this.handleClick();
  }

  handleLoad() {
    this.handleClick();
  }


// ---------





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
      </div>  
    );
  }
}

export default List;



      






          