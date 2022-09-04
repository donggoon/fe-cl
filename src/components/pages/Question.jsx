/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import QuestionTitle from '../atoms/QuestionTitle';
import QuestionOption from '../molecules/QuestionOption';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';

import { menuChanged } from '../../features/menu/menuSlice';
import {
  initQuiz,
  setAnswerSet,
  setProgressSet,
} from '../../features/quiz/quizSlice';

import {
  callApi,
  isEmpty,
  getFormattedAnswer,
} from '../../functions/commonUtil';
import SubmitButton from '../atoms/SubmitButton';
import QutestionImage from '../atoms/QuestionImage';
import QuestionHeader from '../organisms/QuestionHeader';
import Divider from '../atoms/Divider';

function Question() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);

  const getCheckedOptions = originOptions => {
    const currentIndex = quiz.questionSet.indexOf(id);
    const currentAnswer = quiz.answerSet[currentIndex].split(':');
    const checkedOptions = originOptions.map(option => {
      if (currentAnswer.includes(String(option.id))) {
        return {
          ...option,
          checked: true,
        };
      }
      return {
        ...option,
        checked: false,
      };
    });
    return checkedOptions;
  };

  useEffect(() => {
    if (isEmpty(quiz.id)) {
      navigate('../../c');
    }

    dispatch(
      menuChanged({
        id: 'Question',
        name: '문제풀기',
        description: '문제를 잘 읽고 정답을 고르세요.',
      }),
    );

    callApi('get', `/q/${id}`)
      .then(response => {
        setQuestion(response.data.question);
        setOptions(getCheckedOptions(response.data.options));
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const moveQuestionIndex = (target, targetIndex) => {
    const currentIndex = quiz.questionSet.indexOf(id);
    const lastIndex = quiz.questionSet.length - 1;
    if (targetIndex < 0) {
      alert('첫번째 문제입니다.');
      return;
    }
    const formData = new FormData(target);
    console.log('formData', formData);
    const answerSet = [...quiz.answerSet];
    const progressSet = [...quiz.progressSet];

    const formattedAnswer = getFormattedAnswer(formData.entries());
    // 현재 문제 완료 체크
    if (isEmpty(formattedAnswer)) {
      progressSet[currentIndex] = '1'; // 건너뜀
      answerSet[currentIndex] = '0';
    } else {
      progressSet[currentIndex] = '2'; // 완료됨
      answerSet[currentIndex] = formattedAnswer;
    }

    const params = {
      answer_set: answerSet.toString(),
      category_id: quiz.categoryId,
      correct_set: quiz.correctSet.toString(),
      id: quiz.id,
      progress_set: progressSet.toString(),
      question_id: id,
      question_set: quiz.questionSet.toString(),
      success_cd: quiz.successCd,
    };

    if (targetIndex > lastIndex) {
      for (let i = 0; i < progressSet.length; i += 1) {
        if (String(progressSet[i]) === '0') {
          // TODO seq 값으로 변경
          alert(`질문 ${i + 1}번이 완료되지 않았습니다.`);
          return;
        }
      }
      callApi('post', '/q/end', {
        ...params,
      })
        .then(response => {
          const payload = {
            answerSet: response.data.answer_set.split(','),
            categoryId: response.data.category_id,
            correctSet: response.data.correct_set.split(','),
            endDt: response.data.end_dt,
            id: response.data.id,
            progressSet: response.data.progress_set.split(','),
            questionSet: response.data.question_set.split(','),
            seq: response.data.seq,
            startDt: response.data.start_dt,
            successCd: response.data.success_cd,
            userId: response.data.user_id,
          };
          dispatch(initQuiz(payload));
          navigate(`../../r/${quiz.id}`);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      callApi('post', '/q/move', {
        ...params,
      })
        .then(() => {
          dispatch(setAnswerSet(answerSet));
          dispatch(setProgressSet(progressSet));
          navigate(`../../q/${quiz.questionSet[targetIndex]}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const currentIndex = quiz.questionSet.indexOf(id);
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === 'previous') {
      moveQuestionIndex(e.target, currentIndex - 1);
    } else if (buttonName === 'next') {
      moveQuestionIndex(e.target, currentIndex + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden shadow sm:rounded-md">
        {!isEmpty(quiz.id) ? <QuestionHeader /> : null}
        <Divider padding="1" />
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <QuestionTitle
            // TODO seq 값으로 변경
            seq={quiz.questionSet.indexOf(id) + 1}
            text={question.text}
          >
            <QutestionImage src={question.image} />
          </QuestionTitle>
          <Divider padding="1" />
          <QuestionOptionGroup
            type={question.type}
            options={options}
            setOptions={setOptions}
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <SubmitButton name="previous">Previous</SubmitButton>
          <SubmitButton name="next">Next</SubmitButton>
        </div>
      </div>
    </form>
  );
}

export default Question;
