import { useSelector } from 'react-redux';
import useLoadMore from '../../hooks/useLoadMore.js';
import Loader from '../Loader/Loader.jsx';

import ProductCard from '../ProductCard/ProductCard.jsx';
import { selectProducts } from '../../redux/catalogSlice.js';

import css from './ProductList.module.css';

const ProductList = () => {
  const { products, total, isLoading } = useSelector(selectProducts);
  const { loadMoreHandler, prevItemsLength, productRef } = useLoadMore();

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <li
              key={product.id}
              ref={index === prevItemsLength ? productRef : null}
            >
              <ProductCard product={product} />
            </li>
          ))
        ) : (
          <p>Products list is empty</p>
        )}
      </ul>
      {isLoading && <Loader />}
      {products.length < total && (
        <button
          className="button button--secondary"
          onClick={loadMoreHandler}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default ProductList;
