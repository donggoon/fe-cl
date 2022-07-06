export const getSpaceBetween = (
  spaceBetween = { negative: false, axis: 'x', weight: 'px' },
) => {
  let className = '';
  if (spaceBetween.negative) {
    className += '-';
  }
  className += 'space';
  if (spaceBetween.axis === 'y') {
    className += '-y';
  } else {
    className += '-x';
  }
  className += `-${spaceBetween.weight}`;

  return className;
};

export const getGroup = (group = false) => {
  if (group) {
    return 'group';
  }
  return '';
};

export const getBorderRadius = borderRadius => {
  if (borderRadius === 'top-only') {
    return 'rounded-t-md';
  }
  if (borderRadius === 'bottom-only') {
    return 'rounded-b-md';
  }
  if (borderRadius === 'none') {
    return '';
  }
  return 'rounded-md';
};

export const getAlignItems = (alignItems = 'start') => {
  switch (alignItems) {
    case 'start':
      return 'items-start';
    case 'end':
      return 'items=end';
    case 'center':
      return 'items-center';
    case 'baseline':
      return 'items-baseline';
    case 'stretch':
      return 'items-stretch';
    default:
      return 'items-start';
  }
};

export const getHeight = (height = 'px') => {
  return `h-${height}`;
};

export const getBoxShadow = (boxShadow = 'none') => {
  switch (boxShadow) {
    case 'sm':
      return 'shadow-sm';
    case 'md':
      return 'shadow-md';
    case 'lg':
      return 'shadow-lg';
    case 'xl':
      return 'shadow-xl';
    case '2xl':
      return 'shadow-2xl';
    case 'inner':
      return 'shadow-inner';
    case 'none':
      return 'shadow-none';
    default:
      return 'shadow';
  }
};

export const getMarginTop = marginTop => {
  if (marginTop) {
    return `mt-${marginTop}`;
  }
  return '';
};
