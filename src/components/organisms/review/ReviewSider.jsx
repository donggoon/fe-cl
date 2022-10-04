import React from 'react';
import { useSelector } from 'react-redux';
import AnchorButton from '../../atoms/common/buttons/AnchorButton';
import Status from '../../atoms/common/Status';
import QuestionItem from '../../atoms/question/QuestionItem';
import QuestionList from '../../atoms/question/QuestionList';
import SiderTitle from '../../atoms/sider/SiderTitle';
import SiderWrapper from '../../atoms/sider/SiderWrapper';

function ReviewSider() {
  const history = useSelector(state => state.history);

  const getQuestionItem = () => {
    return history.resultDetails.map((resultDetail, index) => {
      const { question, handleScroll } = resultDetail;
      return (
        <QuestionItem id={question.id}>
          <AnchorButton id={question.id} onClick={handleScroll}>
            {`질문 ${index + 1}`}
          </AnchorButton>
          <Status value={question.correct_yn} />
        </QuestionItem>
      );
    });
  };

  return (
    <SiderWrapper>
      <SiderTitle>바로가기</SiderTitle>
      <QuestionList>{getQuestionItem()}</QuestionList>
    </SiderWrapper>
  );
}

export default ReviewSider;
