import styles from "./Header.module.scss";
import mng from "../assets/images/Mng°.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={`${styles.header}`}>
        <Link to="/"><img src={mng} alt="" /></Link>
      <nav>
        <ul>
          <li>
            <a target="_blank" href="https://victorlemercier.com/index.html">Portfolio</a>
          </li>
          <li>
            <a target="_blank" href="https://victorlemercier.com/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      </div>
      {/* <div className="headerContent">
        <div className={`${styles.headerfixobjects}`}>
          <p>passion</p>
          <a href="">Découvrir</a>
        </div>
      </div> */}
    </header>
    
  );
}

export default Header;