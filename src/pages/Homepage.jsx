import React from 'react';
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import styles from '../App.module.scss';


function Homepage() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Sliders />
    </div>
  );
}

export default Homepage;
