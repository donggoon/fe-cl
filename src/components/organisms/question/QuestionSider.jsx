import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AnchorButton from '../../atoms/common/buttons/AnchorButton';
import Status from '../../atoms/common/Status';
import QuestionItem from '../../atoms/question/QuestionItem';
import QuestionList from '../../atoms/question/QuestionList';
import SiderTitle from '../../atoms/sider/SiderTitle';
import SiderWrapper from '../../atoms/sider/SiderWrapper';

function QuestionSider() {
  const navigate = useNavigate();
  const quiz = useSelector(state => state.quiz);
  const { id } = useParams();

  const handleClick = (e, questionNumber) => {
    e.preventDefault();

    navigate(`../../q/${questionNumber}`);
  };

  const getQuestionItem = () => {
    return quiz.questionSet.map((qid, index) => {
      return (
        <QuestionItem id={qid}>
          <AnchorButton
            id={qid}
            current={id}
            onClick={e => handleClick(e, qid)}
          >
            {`질문 ${index + 1}`}
          </AnchorButton>
          <Status value={quiz.progressSet[index]} />
        </QuestionItem>
      );
    });
  };

  return (
    <SiderWrapper>
      <SiderTitle>검토하기</SiderTitle>
      <QuestionList>{getQuestionItem()}</QuestionList>
    </SiderWrapper>
  );
}

export default QuestionSider;
