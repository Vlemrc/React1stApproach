import Header from "../components/Header";
import common from './Commonstyle.module.scss';
import styles from './Mangas.module.scss';
import shin from "../assets/images/kingdom/shin.webp";
import kingdombg from "../assets/images/kingdom/kingdombase.jpg";

function Rap() {
  return (
    <div className="basepage">
      <Header />
      <div className={`${common.presentation} ${styles.presentation}`} style={{backgroundImage:`url(${kingdombg})` }}>
        <div className={`${common.protagonist} ${styles.protagonist}`}>
          <h1>Shin</h1>
          <img src={shin} alt="" />
        </div>
        <div className={`${common.contentDetails} ${styles.contentDetails}`}>
          <h1>Kingdom, <br /> le manga du siècle</h1>
          <div className={`${common.contentDetailsTitle} ${styles.contentDetailsTitle}`}>
            <p>Kanki<br /> Goat</p>
            <h2>L'histoire de l'unification <br /> de la chine</h2>
          </div>
          <p>Le manga Kingdom est une œuvre incroyable, mêlant intrigue politique, batailles épiques et personnages complexes dans le décor fascinant de la Chine ancienne. Son art dynamique et son scénario captivant en font un incontournable, offrant une expérience de lecture inoubliable.</p>
        </div>
      </div>
    </div>
  );
}

export default Rap;