import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader.jsx';
import Product from '../../components/Product/Product.jsx';
import ProductDetails from '../../components/ProductDetails/ProductDetails.jsx';

import { fetchProductById } from '../../redux/productsOps.js';
import { selectProduct } from '../../redux/productSlice.js';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { item: product, isLoading } = useSelector(selectProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (isLoading) return <Loader />;
  return (
    <div className="container">
      {
        product
          ? (
            <>
              <Product />
              <ProductDetails />
            </>
          )
          : <p>Product not found</p>
      }
    </div>
  );
};

export default ProductPage;
