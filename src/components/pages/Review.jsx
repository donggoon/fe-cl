import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initHistory } from '../../features/history/historySlice';

import { menuChanged } from '../../features/menu/menuSlice';

import { callApi } from '../../functions/commonUtil';
import Divider from '../atoms/Divider';
import QutestionImage from '../atoms/QuestionImage';
import QuestionTitle from '../atoms/QuestionTitle';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [history, setHistory] = useState({
    resultDetails: [],
  });
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
          itemsRef: String(itemsRef.current),
        };
        dispatch(initHistory(payload));
        setHistory(payload);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return history.resultDetails.map((resultDetail, index) => {
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
            <QuestionTitle
              seq={index + 1}
              text={question.text}
              status={question.correct_yn}
            >
              <QutestionImage src={question.image} />
            </QuestionTitle>
            <Divider padding="1" />
            <QuestionOptionGroup
              type={question.type}
              options={getFormattedOptions(options)}
            />
          </div>
        </div>
      </div>
    );
  });
}

export default Review;
