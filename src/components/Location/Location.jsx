import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import css from './Location.module.css';

const Location = () => (
  <label className={css.location}>
    <span className={css.label}>
      Location
    </span>
    <span className={css.field}>
      <SvgIcon path="map" />
      <input name="location" className={css.input} type="text" placeholder="City" />
    </span>
  </label>
);

export default Location;
