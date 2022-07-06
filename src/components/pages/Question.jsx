/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import QuestionTitle from '../atoms/QuestionTitle';
import LabelTextCheck from '../molecules/LabelTextCheck';
import QuestionForm from '../organisms/forms/QuestionForm';
import LabelTextRadio from '../molecules/LabelTextRadio';
import Groupbox from '../atoms/Groupbox';

function Question({ history }) {
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
          <LabelTextCheck
            id={option.id}
            name={option.name}
            label={option.label}
          >
            {option.text}
          </LabelTextCheck>
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
        styleoption={{
          spaceBetween: { negative: true },
          borderRadius: 'md',
          boxShadow: 'sm',
        }}
      >
        {getOptions(question.type, question.options)}
      </Groupbox>
      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
          className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </QuestionForm>
  );
}

export default Question;
