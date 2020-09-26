import React from 'react';
import {Route} from "react-router-dom";
import Page1 from '../../pages/Page1/Page1';
import Page2 from '../../pages/Page2/Page2';
import Page3 from '../../pages/Page3/Page3';
import styles from './Main.module.css';

const Main = (props) => {
  return <main className={ styles.main }>
      <Route exact path='/' render={ () => <Page1 /> }/>
      <Route exact path='/page1' render={ () => <Page1 /> }/>
      <Route exact path='/page2' render={ () => <Page2 /> }/>
      <Route exact path='/page3' render={ () => <Page3 /> }/>
    </main>;
}

export default Main;
