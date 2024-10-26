import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import css from './CategoryTag.module.css';

const CategoryTag = ({ iconPath, label }) => (
  <div className={css.card}>
    <SvgIcon path={iconPath} size="20" />
    <p className={css.label}>{label}</p>
  </div>
);

export default CategoryTag;
