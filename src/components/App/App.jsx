import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import ProductPage from '../../pages/ProductPage/ProductPage.jsx';
import Header from '../Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

import { ROUTER } from '../../variables/router.js';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={ROUTER.HOME} element={<HomePage />} />
            <Route path={ROUTER.CATALOG} element={<CatalogPage />} />
            <Route path={ROUTER.PRODUCT} element={<ProductPage />} />
            <Route path={ROUTER.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
