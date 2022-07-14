import { isEmpty } from './commonUtil';

// spaceBetween = { negative: false, axis: 'x', weight: 'px' }
export const getSpaceBetween = spaceBetween => {
  if (isEmpty(spaceBetween)) {
    return '';
  }
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

export const getAlignItems = alignItems => {
  if (isEmpty(alignItems)) {
    return '';
  }
  const candidates = ['start', 'end', 'center', 'baseline', 'stretch'];
  if (candidates.includes(alignItems)) {
    return `items-${alignItems}`;
  }
  return 'items-start';
};

export const getHeight = height => {
  if (isEmpty(height)) return '';
  return `h-${height}`;
};

export const getBoxShadow = boxShadow => {
  if (isEmpty(boxShadow)) {
    return '';
  }
  const candidates = ['sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];
  if (candidates.includes(boxShadow)) {
    return `shadow-${boxShadow}`;
  }
  return 'shadow-none';
};

export const getMarginTop = marginTop => {
  if (isEmpty(marginTop)) {
    return '';
  }
  return `mt-${marginTop}`;
};

export const getPaddingTop = paddingTop => {
  if (isEmpty(paddingTop)) {
    return '';
  }
  return `pt-${paddingTop}`;
};

export const getPaddingX = paddingX => {
  if (isEmpty(paddingX)) {
    return '';
  }
  return `px-${paddingX}`;
};

export const getPaddingY = paddingY => {
  if (isEmpty(paddingY)) {
    return '';
  }
  return `py-${paddingY}`;
};
