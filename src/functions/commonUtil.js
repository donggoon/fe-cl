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
  const baseurl = 'http://43.200.138.19:9002/api/';

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
    categoryNm: data.category_nm,
    correctSet: data.correct_set.split(','),
    endDt: data.end_dt,
    id: data.id,
    progressSet: data.progress_set.split(','),
    questionSet: data.question_set.split(','),
    seq: data.seq,
    startDt: data.start_dt,
    successCd: data.success_cd,
    userId: data.user_id,
    logoUrl: data.logo_url,
    accumSec: data.accum_sec,
  };
};

export const getIsProgressed = value => {
  if (String(value) === '0') {
    return false;
  }
  return true;
};

// export const getProgressedText = value => {
//   if (String(value) === '2') {
//     return '?????????';
//   }
//   if (String(value) === '1') {
//     return '?????????';
//   }
//   if (String(value) === 'S') {
//     return '?????????';
//   }
//   return '?????????';
// };

export const getStatusText = value => {
  if (isEmpty(value)) {
    return '?????????';
  }

  switch (String(value)) {
    case '2':
      return '?????????';
    case '1':
      return '?????????';
    case 'S':
      return '??????';
    case 'F':
      return '?????????';
    case 'Y':
      return '??????';
    case 'N':
      return '??????';
    default:
      return '????????????';
  }
};

export const getStatusStyle = value => {
  switch (String(value)) {
    case '2':
      return 'bg-sky-400/10 text-sky-600';
    case '1':
      return 'bg-slate-400/20';
    case 'S':
      return 'bg-indigo-600 text-white';
    case 'F':
      return 'bg-rose-600 text-white';
    case 'Y':
      return 'bg-indigo-600 text-white';
    case 'N':
      return 'bg-rose-600 text-white';
    default:
      return 'bg-slate-400/20';
  }
};
export const getOptionColor = (checked, correct) => {
  // ??????
  // if (correct && checked) {
  //   return 'rgb(99 102 241)';
  // }
  // ?????????
  if (isEmpty(correct) && checked) {
    return 'rgb(79 70 229)';
  }
  // ??????
  if (!correct && checked) {
    return 'rgb(256 256 256)';
  }
  // ?????? ??? ?????? ??????
  // if (correct && !checked) {
  //   return 'rgb(244 63 94)';
  // }
  return '';
};

export const getOptionStyle = (checked, correct) => {
  // ??????
  if (correct && checked) {
    return 'ring-2 ring-indigo-600';
  }
  // ??????
  if (!correct && checked) {
    return 'ring-2 ring-indigo-600';
  }
  // ?????????
  if (isEmpty(correct) && checked) {
    return 'ring-2 ring-indigo-600';
  }
  // ?????? ??? ?????? ??????
  // if (correct && !checked) {
  //   return 'ring-2 ring-rose-500';
  // }
  return 'ring-1 ring-slate-700/10';
};

export const getProgressTimeText = progressTime => {
  const hour = String(parseInt(progressTime / 3600, 10)).padStart(2, '0');
  const minute = String(parseInt((progressTime % 3600) / 60, 10)).padStart(
    2,
    '0',
  );
  const second = String(parseInt(progressTime % 60, 10)).padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};

export const getFormattedProgressTimeText = progressTime => {
  const hour = parseInt(progressTime / 3600, 10);
  const minute = parseInt((progressTime % 3600) / 60, 10);
  const second = parseInt(progressTime % 60, 10);

  const formattedProgressTimeText = [];
  if (hour > 0) {
    formattedProgressTimeText.push(`${hour}??????`);
  }
  if (minute > 0) {
    formattedProgressTimeText.push(`${minute}???`);
  }
  if (second > 0) {
    formattedProgressTimeText.push(`${second}???`);
  }

  if (formattedProgressTimeText.length > 0) {
    return formattedProgressTimeText.join(' ');
  }
  return '0???';
};

export const getCategoryInfoText = (
  questionCount,
  timeLimit,
  successPercent,
) => {
  return `${questionCount}?????? ??????  |  ${getFormattedProgressTimeText(
    timeLimit * 60,
  )}  |  ??????????????? ${successPercent}%??? ????????? ???????????????`;
};
