import clsx from 'clsx';

import CategoryTag from '../CategoryTag/CategoryTag.jsx';

import css from './Tags.module.css';

const Tags = ({ product, className }) => {
  const {
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
    water,
  } = product;

  return (
    <div className={clsx(css.tags, className)}>
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
  );
};

export default Tags;
