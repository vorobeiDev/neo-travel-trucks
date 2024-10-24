import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import ProductList from '../../components/ProductList/ProductList.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import { fetchProducts } from '../../redux/productsOps.js';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={clsx(css.catalogPage, 'container')}>
      <Sidebar />
      <ProductList />
    </div>
  );
};

export default CatalogPage;
