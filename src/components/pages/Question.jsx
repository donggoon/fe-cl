/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import QuestionContent from '../molecules/question/QuestionContent';
import QuestionOptions from '../molecules/question/QuestionOptions';

import { menuChanged } from '../../features/menu/menuSlice';
import {
  initQuiz,
  setAnswerSet,
  setProgressSet,
} from '../../features/quiz/quizSlice';

import { showConfirm, showAlert } from '../../features/modal/modalSlice';

import {
  callApi,
  isEmpty,
  getFormattedAnswer,
} from '../../functions/commonUtil';
import SubmitButton from '../atoms/common/buttons/SubmitButton';
import QuestionHeader from '../organisms/question/QuestionHeader';
import Divider from '../atoms/common/Divider';

function Question() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [isLast, setIsLast] = useState(false);
  const formRef = useRef();

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

    window.scrollTo({
      top: formRef.current.offsetTop,
      left: 0,
      behavior: 'auto',
    });

    if (quiz.progressSet.filter(value => String(value) === '0').length < 1) {
      setIsLast(true);
    }

    callApi('get', `/q/${id}`)
      .then(response => {
        setQuestion(response.data.question);
        setOptions(getCheckedOptions(response.data.options));
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

  const getIsLast = () => {
    if (isLast) return true;

    const targetIndex = quiz.questionSet.indexOf(id) + 1;
    const lastIndex = quiz.questionSet.length - 1;
    if (targetIndex > lastIndex) {
      return true;
    }

    return false;
  };

  const endQuestion = (target, currentIndex) => {
    const formData = new FormData(target);
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

    for (let i = 0; i < progressSet.length; i += 1) {
      if (String(progressSet[i]) === '0') {
        const payload = {
          isShow: true,
          title: '알림',
          message: `질문 ${i + 1}번이 완료되지 않았습니다.`,
          callback: () => {},
        };
        dispatch(showAlert(payload));
        return;
      }
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
      accum_sec: quiz.accumSec,
    };

    callApi('post', '/q/end', params)
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
          accumSec: response.data.accum_sec,
        };
        dispatch(initQuiz(payload));
        navigate(`../../r/${quiz.id}`);
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
  };

  const moveQuestionIndex = (target, targetIndex) => {
    const currentIndex = quiz.questionSet.indexOf(id);
    if (targetIndex < 0) {
      const payload = {
        isShow: true,
        title: '알림',
        message: '첫 번째 문제입니다.',
        callback: () => {},
      };
      dispatch(showAlert(payload));
      return;
    }
    const formData = new FormData(target);
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
      accum_sec: quiz.accumSec,
    };

    callApi('post', '/q/move', params)
      .then(() => {
        dispatch(setAnswerSet(answerSet));
        dispatch(setProgressSet(progressSet));
        navigate(`../../q/${quiz.questionSet[targetIndex]}`);
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    const currentIndex = quiz.questionSet.indexOf(id);
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === 'previous') {
      moveQuestionIndex(e.target, currentIndex - 1);
    } else if (buttonName === 'next') {
      moveQuestionIndex(e.target, currentIndex + 1);
    } else if (buttonName === 'submit') {
      const payload = {
        isShow: true,
        title: '확인',
        message: '답안을 제출하시겠습니까?',
        callback: () => {
          endQuestion(e.target, currentIndex);
        },
      };
      dispatch(showConfirm(payload));
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="overflow-hidden shadow sm:rounded-md">
        {!isEmpty(quiz.id) ? <QuestionHeader /> : null}
        <Divider padding="1" />
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <QuestionContent
            seq={quiz.questionSet.indexOf(id) + 1}
            text={question.text}
            image={question.image}
          />
          <Divider padding="1" />
          <QuestionOptions
            type={question.type}
            options={options}
            setOptions={setOptions}
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <SubmitButton name="previous">뒤로</SubmitButton>
          {getIsLast() ? (
            <SubmitButton name="submit">제출</SubmitButton>
          ) : (
            <SubmitButton name="next">다음</SubmitButton>
          )}
        </div>
      </div>
    </form>
  );
}

export default Question;
