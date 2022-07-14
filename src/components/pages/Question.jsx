/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import QuestionTitle from '../atoms/QuestionTitle';
import LabelCheck from '../molecules/LabelCheck';
import QuestionForm from '../organisms/forms/QuestionForm';
import LabelTextRadio from '../molecules/LabelTextRadio';
import Groupbox from '../atoms/Groupbox';

function Question() {
  const question = {
    id: 1,
    title: `Amazon DynamoDB is used by a corporation to manage and track orders.
    The order date is used to split the DynamoDB table. During a sales
    event, the company receives a large spike in orders, forcing DynamoDB
    writes to choke, and the used throughput is considerably lower than the
    permitted throughput. How can this issue be rectified with MINIMAL
    expenses, according to AWS best practices?`,
    type: 'multi',
    options: [
      {
        id: 1,
        name: 'comments',
        label: 'Comments',
        text: 'Get notified when someones posts a comment on a posting.',
      },
      {
        id: 2,
        name: 'offers',
        label: 'Offers',
        text: 'Get notified when a candidate accepts or rejects an offer.',
      },
      {
        id: 3,
        name: 'offers',
        label: 'Offers',
        text: 'Get notified when a candidate accepts or rejects an offer.',
      },
      {
        id: 4,
        name: 'offers',
        label: 'Offers',
        text: 'Get notified when a candidate accepts or rejects an offer.',
      },
    ],
  };

  const getOptions = (type, options) => {
    if (type === 'multi') {
      return options.map(option => {
        return (
          <LabelCheck id={option.id} name={option.name}>
            {option.text}
          </LabelCheck>
        );
      });
    }
    return options.map(option => {
      return (
        <LabelTextRadio id={option.id} name={option.name} label={option.label}>
          {option.text}
        </LabelTextRadio>
      );
    });
  };

  return (
    <QuestionForm>
      <QuestionTitle id={question.id}>{question.title}</QuestionTitle>
      <Groupbox
        styleOption={{
          spaceBetween: { negative: false, axis: 'y', weight: 4 },
          borderRadius: 'md',
          boxShadow: 'sm',
          paddingTop: 6,
        }}
      >
        {getOptions(question.type, question.options)}
      </Groupbox>
    </QuestionForm>
  );
}

export default Question;
