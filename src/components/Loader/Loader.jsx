import { Triangle } from 'react-loader-spinner';

import css from './Loader.module.css';

const Loader = () => (
  <div className={css.loader}>
    <Triangle color="#E44848" />
  </div>
);

export default Loader;
