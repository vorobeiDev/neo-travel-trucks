import { useDispatch } from 'react-redux';

import FiltersList from '../FiltersList/FiltersList.jsx';
import Location from '../Location/Location.jsx';

import { fetchProducts } from '../../redux/productsOps.js';
import { setFilters } from '../../redux/catalogSlice.js';
import { ENGINE_TYPE, TRANSMISSION_TYPE, VEHICLE_EQUIPMENT, VEHICLE_TYPE } from '../../variables/vehicle.js';

import css from './Sidebar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const filters = [...formData].reduce((acc, [name, value]) => {
      value = value === 'on' ? true : value;
      return {
        ...acc,
        [name]: value,
      };
    }, {});

    await dispatch(setFilters(filters));
    dispatch(fetchProducts(false));
  };

  return (
    <form onSubmit={submitHandler}>
      <Location />
      <div className={css.filters}>
        <h2 className={css.title}>
          Filters
        </h2>
        <FiltersList
          title="Vehicle equipment"
          items={VEHICLE_EQUIPMENT}
          isActive
        />
        <FiltersList
          title="Vehicle type"
          items={VEHICLE_TYPE}
          type="radio"
        />
        <FiltersList
          title="Transmission type"
          items={TRANSMISSION_TYPE}
          type="radio"
        />
        <FiltersList
          title="Engine type"
          items={ENGINE_TYPE}
          type="radio"
        />
      </div>
      <button type="submit" className="button">Search</button>
    </form>
  );
};

export default Sidebar;
