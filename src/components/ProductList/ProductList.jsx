import { useSelector } from 'react-redux';
import useLoadMore from '../../hooks/useLoadMore.js';

import ProductCard from '../ProductCard/ProductCard.jsx';
import { selectProducts } from '../../redux/productsSlice.js';

import css from './ProductList.module.css';

const ProductList = () => {
  const { items, total } = useSelector(selectProducts);
  const { loadMoreHandler, prevItemsLength, productRef } = useLoadMore();

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {items.length > 0 ? (
          items.map((product, index) => (
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
      {items.length < total && (
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
