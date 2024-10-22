import { Link } from 'react-router-dom';
import { ROUTER } from '../../variables/router.js';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.description}>You can find everything you want in our catalog</h2>
        <Link className="button" to={ROUTER.CATALOG}>View Now</Link>
      </div>
    </section>
  );
};

export default Hero;