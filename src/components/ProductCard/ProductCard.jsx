import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import Tags from '../Tags/Tags.jsx';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import { currencyFormat,  } from '../../utils/currencyHelpers.js';
import { selectFavorites, toggleFavorite } from '../../redux/favoritesSlice.js';
import { getPluralText } from '../../utils/textHelpers.js';
import { ROUTE } from '../../variables/route.js';

import css from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const {
    id,
    gallery,
    reviews,
    name,
    price,
    rating,
    location,
    description,
  } = product;

  const handlerFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={gallery[0].thumb}
        alt={name}
      />
      <div>
        <div className={css.info}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.priceContainer}>
            <p className={css.price}>
              {currencyFormat(price)}
            </p>
            <button
              onClick={handlerFavorite}
              className={clsx(css.favorite, { [css.activeFavorite]: favorites.includes(id) })}
            >
              <SvgIcon path="like" width={26} height={24} />
            </button>
          </div>
        </div>
        <div className={css.details}>
          <Link to={`${ROUTE.CATALOG}/${id}/reviews`} className={css.rating}>
            <SvgIcon path="rating" width={16} height={16} />
            {rating}({getPluralText('Review', reviews.length)})
          </Link>
          <p className={css.location}>
            <SvgIcon path="map" width={16} height={16} />
            {location}
          </p>
        </div>
        <p className={css.description}>
          {description}
        </p>
        <Tags className={css.tags} product={product} />
        <Link to={`${ROUTE.CATALOG}/${id}/features`} className="button">Show more</Link>
      </div>
    </div>
  );
};

export default ProductCard;
