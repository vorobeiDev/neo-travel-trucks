import { useState } from 'react';

import FilterItem from '../Filter/FilterItem.jsx';

import css from './FiltersList.module.css';

const FiltersList = ({ title, items, type = 'checkbox' }) => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (id) => {
    setSelectedRadio(id);
  };

  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {items.map(({ id, title, icon, fieldName }) => (
          <li key={id}>
            <FilterItem
              type={type}
              id={id}
              title={title}
              icon={icon}
              fieldName={fieldName}
              isChecked={type === 'radio' ? selectedRadio === id : undefined}
              onChange={type === 'radio' ? () => handleRadioChange(id) : undefined}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersList;
