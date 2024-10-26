import { NavLink, Outlet, useParams } from 'react-router-dom';

import clsx from 'clsx';

import BookingForm from '../BookingForm/BookingForm.jsx';

import { ROUTE } from '../../variables/route.js';

import css from './ProductDetails.module.css';

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <div className={css.tabs}>
        <NavLink
          className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
          to={`${ROUTE.CATALOG}/${productId}/features`}
        >
          Features
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(css.link, { [css.active]: isActive })}
          to={`${ROUTE.CATALOG}/${productId}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <div className={css.grid}>
        <Outlet/>
        <BookingForm/>
      </div>
    </div>
  );
};

export default ProductDetails;
