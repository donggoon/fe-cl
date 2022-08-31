/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { menuChanged } from '../../features/menu/menuSlice';

import {
  callApi,
  isEmpty,
  getFormattedAnswer,
} from '../../functions/commonUtil';
import Divider from '../atoms/Divider';
import QutestionImage from '../atoms/QuestionImage';
import QuestionTitle from '../atoms/QuestionTitle';
import StatusText from '../atoms/StatusText';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';

function Review() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [history, setHistory] = useState({
    resultDetails: [],
  });

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
        console.log(response.data);
        setHistory(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="overflow-hidden shadow sm:rounded-md">
      <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
        {history.resultDetails.map(resultDetail => {
          const { question, options } = resultDetail;
          return (
            <div className="space-y-2">
              <StatusText value={question.correct_yn} />
              <QuestionTitle id={question.id} text={question.text}>
                <QutestionImage src={question.image} />
              </QuestionTitle>
              <Divider padding="1" />
              <QuestionOptionGroup
                type={question.type}
                options={getFormattedOptions(options)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
