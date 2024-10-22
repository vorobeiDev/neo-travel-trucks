import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const search = useSelector(selectNameFilter);

  const searchHandler = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={searchId}>
        Find contacts by name or phones:
      </label>
      <input
        type="text"
        value={search}
        onChange={(e) => searchHandler(e.target.value)}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
