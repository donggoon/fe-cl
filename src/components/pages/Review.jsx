import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initHistory } from '../../features/history/historySlice';

import { menuChanged } from '../../features/menu/menuSlice';
import { showAlert } from '../../features/modal/modalSlice';

import { callApi } from '../../functions/commonUtil';
import Divider from '../atoms/common/Divider';
import QuestionContent from '../molecules/question/QuestionContent';
import QuestionOptions from '../molecules/question/QuestionOptions';
import ReviewHeader from '../organisms/review/ReviewHeader';

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [history, setHistory] = useState({
    resultDetails: [],
  });
  const [isResponsed, setIsResponsed] = useState(false);
  const itemsRef = useRef([]);

  const getFormattedOptions = options => {
    return options.map(option => {
      return {
        ...option,
        checked: option.select_yn === 'Y',
        correct: option.correct_yn === 'Y',
      };
    });
  };

  useEffect(() => {
    dispatch(
      menuChanged({
        id: 'Review',
        name: '검토하기',
        description: '완료된 테스트 결과를 확인하고 오답을 확인해 보세요.',
      }),
    );

    callApi('get', `/u/his/${id}`)
      .then(response => {
        const payload = {
          ...response.data,
          resultDetails: response.data.resultDetails.map(
            (resultDetail, index) => {
              return {
                ...resultDetail,
                handleScroll: e => {
                  e.preventDefault();
                  window.scrollTo({
                    top: itemsRef.current[index].offsetTop,
                    left: 0,
                    behavior: 'smooth',
                  });
                },
              };
            },
          ),
        };
        setIsResponsed(true);
        dispatch(initHistory(payload));
        setHistory(payload);
      })
      .catch(error => {
        dispatch(
          showAlert({
            isShow: true,
            title: '알림',
            message: error.response.data.message,
            callback: () => {},
          }),
        );
      });
  }, [id]);

  return (
    <>
      {isResponsed ? (
        <ReviewHeader history={{ ...history, resultDetail: [] }} />
      ) : null}
      {isResponsed
        ? history.resultDetails.map((resultDetail, index) => {
            const { question, options } = resultDetail;
            return (
              <div
                className="mb-6 overflow-hidden shadow sm:rounded-md"
                key={question.id}
                ref={ref => {
                  itemsRef.current = { ...itemsRef.current, [index]: ref };
                }}
              >
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="space-y-2">
                    <QuestionContent
                      seq={index + 1}
                      text={question.text}
                      status={question.correct_yn}
                      image={question.image}
                    />
                    <Divider padding="1" />
                    <QuestionOptions
                      type={question.type}
                      options={getFormattedOptions(options)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default Review;
