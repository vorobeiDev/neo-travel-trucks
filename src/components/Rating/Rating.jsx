import clsx from 'clsx';

import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import css from './Rating.module.css';

const MAX_STARS = 5;
const STARS = Array(MAX_STARS).fill(0);

const Rating = ({ rating }) => (
  <ul className={css.rating}>
    {STARS.map((_, index) => (
      <li key={index} className={clsx(css.star, { [css.active]: index < rating })}>
        <SvgIcon path="rating" size={16}  />
      </li>
    ))}
  </ul>
);

export default Rating;
