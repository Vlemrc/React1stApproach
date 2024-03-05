import Header from "../components/Header";
import common from './Commonstyle.module.scss';
import styles from './Rap.module.scss';
import booba from "../assets/images/booba/boobapic.webp";
import boobabg from "../assets/images/booba/boobabgbase.png";

// SONGS

import tallac from "../assets/images/booba/booba-pantheon.jpg";
import pitbull from "../assets/images/booba/ouestside.jpg";
import dernierefois from "../assets/images/booba/ultra.jpg";

import React, { useEffect } from 'react';

function Rap() {

  useEffect(() => {
      const handleScroll = () => {
        console.log("yoyo")
        window.scrollTo({
          left: window.scrollY, // Défilement horizontal basé sur le défilement vertical
          behavior: 'smooth', // Défilement fluide
        });
      };

      window.addEventListener('scroll', handleScroll); // Ajouter un écouteur d'événements de défilement
      return () => {
        window.removeEventListener('scroll', handleScroll); // Supprimer l'écouteur d'événements de défilement lors du démontage du composant
      };
    }, []);

  return (
   <div className="horizontalScroll">
     <div className="basepage">
      <Header />
      <div className={`${common.presentation} ${styles.presentation}`} style={{backgroundImage:`url(${boobabg})` }}>
        <div className={`${common.protagonist} ${styles.protagonist}`}>
          <h1>Booba</h1>
          <img src={booba} alt="" />
        </div>
        <div className={`${common.contentDetails} ${styles.contentDetails}`}>
          <h1>Booba, un <br /> roi parmi les rois</h1>
          <div className={`${common.contentDetailsTitle} ${styles.contentDetailsTitle}`}>
            <p>MonaLisa<br /> Pitbull</p>
            <h2>Roi, Goat, Empereur, Duc de boulogne</h2>
          </div>
          <p>Booba, légende du rap français, doit sa renommée à sa longévité, son influence massive, son style unique et son impact sur la culture hip-hop. Avec des paroles percutantes et un flow inimitable durant plus de 20 ans, il laisse une empreinte indélébile dans l'industrie musicale.</p>
        </div>
      </div>

      {/* DEUXIEME PAGE */}

      <div className={styles.musiclistener}>
        <div className={styles.song}>
          <img src={dernierefois} alt=""></img>
          <h1>Dernière fois</h1>
          <h2>booba</h2>
        </div>
        <div className={styles.song}>
          <img src={pitbull} alt=""></img>
          <h1>Pitbull</h1>
          <h2>booba</h2>
        </div>
        <div className={styles.song}>
          <img src={tallac} alt=""></img>
          <h1>Tallac</h1>
          <h2>booba</h2>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Rap;