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

export const getFormattedAnswer = entries => {
  let formattedAnswer = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    console.log('key:', key, ', value:', value);
    if (value === 'true') {
      formattedAnswer += `${key}:`;
    }
  }

  return formattedAnswer.slice(0, -1);
};

export const getFormattedQuizInfo = data => {
  return {
    answerSet: data.answer_set.split(','),
    categoryId: data.category_id,
    correctSet: data.correct_set.split(','),
    endDt: data.end_dt,
    id: data.id,
    progressSet: data.progress_set.split(','),
    questionSet: data.question_set.split(','),
    seq: data.seq,
    startDt: data.start_dt,
    successCd: data.success_cd,
    userId: data.user_id,
  };
};
