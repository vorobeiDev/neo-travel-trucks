import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../ProductCard/ProductCard.jsx';

import { fetchProducts } from '../../redux/productsOps.js';
import { selectProducts } from '../../redux/productsSlice.js';

import css from './ProductList.module.css';

const HEADER_HEIGHT = 90;

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, total, page } = useSelector(selectProducts);

  const [prevItemsLength, setPrevItemsLength] = useState(0);
  const firstNewProductRef = useRef(null);

  const loadMoreHandler = async () => {
    if (items.length >= total) return;

    setPrevItemsLength(items.length);
    await dispatch(fetchProducts(page + 1));

    if (firstNewProductRef.current) {
      const elementPosition = firstNewProductRef.current.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={css.catalog}>
      <ul className={css.list}>
        {items.length > 0 ? (
          items.map((product, index) => (
            <li
              key={product.id}
              ref={index === prevItemsLength ? firstNewProductRef : null} // Реф на перший новий елемент
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