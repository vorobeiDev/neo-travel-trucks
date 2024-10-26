const SvgIcon = ({ path, width, height, size = 20 }) => (
  <svg
    viewBox="0 0 100 100"
    width={width ?? size}
    height={height ?? size}
    className={`icon-${path}`}
  >
    <use href={`/icons/sprite.svg#icon-${path}`} />
  </svg>
);

export default SvgIcon;
