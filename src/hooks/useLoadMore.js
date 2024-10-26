import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/productsOps.js';
import { selectProducts, setPage } from '../redux/catalogSlice.js';

const CUSTOM_TOP_PADDING = 90;

const useLoadMore = () => {
  const dispatch = useDispatch();
  const { products, total, page } = useSelector(selectProducts);
  const productRef = useRef(null);
  const [prevItemsLength, setPrevItemsLength] = useState(0);

  const loadMoreHandler = async () => {
    if (products.length >= total) return;

    setPrevItemsLength(products.length);
    await dispatch(setPage(page + 1));
    await dispatch(fetchProducts()).then(() => {
      if (productRef.current) {
        const elementPosition = productRef
          .current.getBoundingClientRect().top + window.scrollY - CUSTOM_TOP_PADDING;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    });
  };

  return {
    loadMoreHandler,
    prevItemsLength,
    productRef,
  };
};

export default useLoadMore;
