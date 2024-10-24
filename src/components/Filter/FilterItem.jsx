import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import css from './FilterItem.module.css';

const FilterItem = ({ id, title, icon, fieldName, type, isChecked, onChange }) => {
  const handleClick = (e) => {
    if (isChecked) {
      e.target.checked = false;
      onChange(null);
    }
  };

  return (
    <label className={css.label}>
      <input
        className={css.input}
        name={fieldName ?? id}
        type={type}
        value={type === 'radio' ? id : 'on'}
        checked={isChecked}
        onChange={() => onChange(id)}
        onClick={handleClick}
      />
      <SvgIcon path={icon} size={32} />
      <span>{title}</span>
    </label>
  );
};

export default FilterItem;