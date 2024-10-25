import css from './Title.module.css';

const Title = ({ children }) => (
  <h3 className={css.title}>
    {children}
  </h3>
);

export default Title;
