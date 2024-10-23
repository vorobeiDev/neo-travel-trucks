import { Link } from 'react-router-dom';
import { currencyFormat } from '../../helpers/currencyHelpers.js';
import { getPluralText } from '../../helpers/textHelpers.js';

import CategoryTag from '../CategoryTag/CategoryTag.jsx';

import { ROUTE } from '../../variables/route.js';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

import css from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const {
    id,
    gallery,
    reviews,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water
  } = product;

  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={gallery[0].thumb}
        alt={name}
      />
      <div className={css.content}>
        <div className={css.info}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.priceContainer}>
            <p className={css.price}>
              {currencyFormat(price)}
            </p>
            <button className={css.favorite}>
              <SvgIcon path="like" width={26} height={24} />
            </button>
          </div>
        </div>
        <div className={css.details}>
          <Link to={`${ROUTE.CATALOG}/${id}`} className={css.rating}>
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
        <div className={css.tags}>
          <CategoryTag label={transmission} iconPath="transmission"/>
          <CategoryTag label={engine} iconPath="engine"/>
          {AC && <CategoryTag label="AC" iconPath="ac"/>}
          {bathroom && <CategoryTag label="Bathroom" iconPath="bathroom"/>}
          {kitchen && <CategoryTag label="Kitchen" iconPath="kitchen"/>}
          {TV && <CategoryTag label="TV" iconPath="tv"/>}
          {radio && <CategoryTag label="Radio" iconPath="radio"/>}
          {refrigerator && <CategoryTag label="Refrigerator" iconPath="refrigerator"/>}
          {microwave && <CategoryTag label="Microwave" iconPath="microwave"/>}
          {gas && <CategoryTag label="Gas" iconPath="gas"/>}
          {water && <CategoryTag label="Water" iconPath="water"/>}
        </div>
        <Link to={`${ROUTE.CATALOG}/${id}`} className="button">Show more</Link>
      </div>
    </div>
  );
};

export default ProductCard;