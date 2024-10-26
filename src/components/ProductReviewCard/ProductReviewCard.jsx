import Rating from '../Rating/Rating.jsx';

import css from './ProductReviewCard.module.css';

const ProductReviewCard = ({ name, rating, comment }) => (
  <div>
    <div className={css.top}>
      <div className={css.avatar}>{name[0].toUpperCase()}</div>
      <div className={css.review}>
        <p className={css.name}>{name}</p>
        <Rating rating={rating} />
      </div>
    </div>
    <p className={css.comment}>{comment}</p>
  </div>
);

export default ProductReviewCard;
