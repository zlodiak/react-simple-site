import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css';

const Header = (props) => {
  return <header className="App-header">
        <Link to="/page1" className={styles.link}>Page1</Link>
        <Link to="/page2" className={styles.link}>Page2</Link>
        <Link to="/page3" className={styles.link}>Page3</Link>
    </header>;
}

export default Header;
