import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loader from '../Loader/Loader.jsx';
import Header from '../Header/Header.jsx';

const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage.jsx'));
const ProductFeatures = lazy(() => import('../ProductFeatures/ProductFeatures.jsx'));
const ProductReviews = lazy(() => import('../ProductReviews/ProductReviews.jsx'));

import { ROUTE } from '../../variables/route.js';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={ROUTE.HOME} element={<HomePage />} />
            <Route path={ROUTE.CATALOG} element={<CatalogPage />} />
            <Route path={ROUTE.PRODUCT} element={<ProductPage />}>
              <Route path="features" element={<ProductFeatures />} />
              <Route path="reviews" element={<ProductReviews />} />
            </Route>
            <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
