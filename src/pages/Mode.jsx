import Header from "../components/Header";
import common from './Commonstyle.module.scss';
import styles from './Mode.module.scss';
import drole from "../assets/images/drole/DDMpic.webp";
import boobabg from "../assets/images/drole/DDMbaseend.jpg";

function Mode() {
  return (
    <div className="basepage">
      <Header />

      {/* Première page */}
      <div className={common.presentation} style={{backgroundImage:`url(${boobabg})` }}>
        <div className={`${common.protagonist} ${styles.protagonist}`}>
          <h1>Not From Paris Madame</h1>
          <img src={drole} alt="" />
        </div>
        <div className={`${common.contentDetails} ${styles.contentDetails}`}>
          <h1>Drôle <br /> de Monsieur, parfait ?</h1>
          <div className={`${common.contentDetailsTitle} ${styles.contentDetailsTitle}`}>
            <p>Marque <br /> Française</p>
            <h2>la mode à la française qui charme le monde</h2>
          </div>
          <p>Marque de vêtements incontournable, reconnue pour son style unique, son attention aux détails et son engagement envers la qualité. Avec des collections empreintes d'originalité et d'élégance, la marque incarne l'essence de l'industrie de la mode contemporaine française.</p>
        </div>
      </div>
      
      {/* Deuxième page */}
    </div>
  );
}

export default Mode;