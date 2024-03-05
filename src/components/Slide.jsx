import styles from './Sliders.module.scss';
import { Link } from 'react-router-dom';

function Sliders ({ title, example, href, bgSliderImg }) {

  return (
    <div className={styles.slide} style={{backgroundImage:`url(${bgSliderImg})` }}>
        <div className={`${styles.slideTitle}`}>
            <h2>{title}</h2>
            <h1>{example}</h1>
            <Link to={href}>Découvrir</Link>
        </div>
    </div>
  );
}

export default Sliders;
