import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { selectProduct } from '../../redux/productSlice.js';

import { currencyFormat } from '../../utils/currencyHelpers.js';

import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import { ROUTE } from '../../variables/route.js';
import { getPluralText } from '../../utils/textHelpers.js';

import cardCss from '../ProductCard/ProductCard.module.css';
import css from './Product.module.css';

const Product = () => {
  const { item: product } = useSelector(selectProduct);

  const {
    name,
    id,
    location,
    rating,
    reviews,
    price,
    gallery,
    description,
  } = product;

  return (
    <div className={css.product}>
      <div>
        <h1 className={cardCss.title}>{name}</h1>
        <div className={clsx(cardCss.details, css.details)}>
          <Link to={`${ROUTE.CATALOG}/${id}/reviews`} className={cardCss.rating}>
            <SvgIcon path="rating" width={16} height={16}/>
            {rating}({getPluralText('Review', reviews.length)})
          </Link>
          <p className={cardCss.location}>
            <SvgIcon path="map" width={16} height={16}/>
            {location}
          </p>
        </div>
        <p className={cardCss.price}>
          {currencyFormat(price)}
        </p>
      </div>
      <ul className={css.gallery}>
        {gallery.map((image, index) => (
          <li key={index}>
            <img
              className={css.image}
              src={image.thumb}
              alt={`${name} image ${index + 1}`}
            />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default Product;
