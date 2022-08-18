import axios from 'axios';

export const isEmpty = value => {
  if (
    value === '' ||
    value === null ||
    typeof value === 'undefined' ||
    value === undefined ||
    (value != null && typeof value === 'object' && !Object.keys(value).length)
  ) {
    return true;
  }
  return false;
};

export const nvl = (a, b) => {
  if (isEmpty(a)) {
    return b;
  }
  return a;
};

export const getHyphenated = (a, b) => {
  if (isEmpty(a) && isEmpty(b)) {
    return '';
  }
  if (isEmpty(a)) {
    return b;
  }
  if (isEmpty(b)) {
    return a;
  }
  return `${a}-${b}`;
};

// eslint-disable-next-line default-param-last
export const callApi = (method, url, params, type = 'json') => {
  const baseurl = 'http://43.200.138.19:9002/';

  const instance = axios.create({
    baseURL: baseurl,
    withCredentials: false,
    responseType: type,
  });

  instance.interceptors.request.use(
    request => {
      return request;
    },
    // error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    // error => Promise.reject(error),
  );

  if (method.toLowerCase() === 'post') {
    return instance.post(url, params);
  }
  return instance.get(url, { params });
};
