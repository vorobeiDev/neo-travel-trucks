import { Link } from 'react-router-dom';

import { ROUTE } from '../../variables/route.js';

import css from './Hero.module.css';

const Hero = () => (
  <section className={css.hero}>
    <div className="container">
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.description}>You can find everything you want in our catalog</h2>
      <Link className="button" to={ROUTE.CATALOG}>View Now</Link>
    </div>
  </section>
);

export default Hero;
