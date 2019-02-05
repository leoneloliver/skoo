import React from 'react'
import styles from '../styles/main.css';

const SearchBar = (props) => {
  return(
		<div className={styles['search-bar']}>
		  <div className={styles['md-form']}>
		    <i className={styles['fa fa-search']}></i> <input id="myInput" type="search" className={styles['search-item']} placeholder="Search Tutors" onChange={props.searchFunc} />
		  </div>
		</div>
  )
}

export default SearchBar







					