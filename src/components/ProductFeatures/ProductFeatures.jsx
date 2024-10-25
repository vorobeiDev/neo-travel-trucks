import { useSelector } from 'react-redux';

import Tags from '../Tags/Tags.jsx';
import Title from '../Title/Title.jsx';

import { convertToTitleCase } from '../../utils/textHelpers.js';
import { selectProduct } from '../../redux/productSlice.js';

import css from './ProductFeatures.module.css';

const ProductFeatures = () => {
  const { item: product } = useSelector(selectProduct);

  return (
    <div className={css.features}>
      <Tags className={css.tags} product={product} />
      <Title>Vehicle details</Title>
      <ul className={css.list}>
        <li className={css.feature}>
          <span>Form:</span> <span>{convertToTitleCase(product.form)}</span>
        </li>
        <li className={css.feature}>
          <span>Length:</span> <span>{product.length}</span>
        </li>
        <li className={css.feature}>
          <span>Width:</span> <span>{product.width}</span>
        </li>
        <li className={css.feature}>
          <span>Height:</span> <span>{product.height}</span>
        </li>
        <li className={css.feature}>
          <span>Tank:</span> <span>{product.tank}</span>
        </li>
        <li className={css.feature}>
          <span>Consumption:</span> <span>{product.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductFeatures;
