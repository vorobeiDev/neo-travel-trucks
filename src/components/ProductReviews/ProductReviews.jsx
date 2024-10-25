import { useSelector } from 'react-redux';

import ProductReviewCard from '../ProductReviewCard/ProductReviewCard.jsx';

import { selectProduct } from '../../redux/productSlice.js';

import css from './ProductReviews.module.css';

const ProductReviews = () => {
  const { item: product } = useSelector(selectProduct);

  return (
    <ul className={css.list}>
      {product.reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <li key={index}>
          <ProductReviewCard rating={reviewer_rating} name={reviewer_name} comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default ProductReviews;
