import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import FilterItem from '../Filter/FilterItem.jsx';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';
import Title from '../Title/Title.jsx';

import css from './FiltersList.module.css';

const FiltersList = ({ title, items, type = 'checkbox', isActive = false }) => {
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [isOpen, setIsOpen] = useState(isActive);
  const listRef = useRef(null);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRadioChange = (id) => {
    setSelectedRadio(id);
  };

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      list.style.maxHeight = isOpen ? `${list.scrollHeight}px` : '0';
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={toggleList} type="button" className={css.button}>
        <Title>{title} <SvgIcon size={20} path="chevron" className={clsx(css.chevron, { [css.rotate]: isOpen })} /></Title>
      </button>
      <ul ref={listRef} className={clsx(css.list, { [css.open]: isOpen })}>
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
