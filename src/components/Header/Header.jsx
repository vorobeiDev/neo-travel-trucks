import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Logo from '../Logo/Logo.jsx';

import { ROUTE } from '../../variables/route.js';

import css from './Header.module.css';

const Header = () => (
  <header className={css.header}>
    <div className="container">
      <div className={css.content}>
        <Logo />
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink
                className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
                to={ROUTE.HOME}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
                to={ROUTE.CATALOG}
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
