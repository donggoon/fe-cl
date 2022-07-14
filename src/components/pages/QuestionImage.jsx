/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import QuestionTitle from '../atoms/QuestionTitle';
import LabelTextCheck from '../molecules/LabelTextCheck';
import QuestionForm from '../organisms/forms/QuestionForm';
import LabelTextRadio from '../molecules/LabelTextRadio';
import Groupbox from '../atoms/Groupbox';

function QuestionImage({ history }) {
  const questionImage = {
    id: 1,
    title: `Which of the following is the customer's obligation under the shared responsibility model?`,
    type: '',
    options: [
      {
        id: 1,
        name: 'A',
        label: 'A',
        text: 'Ensuring that disk drives are wiped after use.',
      },
      {
        id: 2,
        name: 'B',
        label: 'B',
        text: 'Ensuring that firmware is updated on hardware devices.',
      },
      {
        id: 3,
        name: 'C',
        label: 'C',
        text: 'Ensuring that data is encrypted at rest.',
      },
      {
        id: 4,
        name: 'D',
        label: 'D',
        text: 'Ensuring that network cables are category six or higher.',
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
      <QuestionTitle id={questionImage.id}>{questionImage.title}</QuestionTitle>
      <div>
        <img
          className="relative h-72 w-auto"
          src="./img/cat.png"
          alt="Workflow"
        />
      </div>
      <Groupbox
        styleOption={{
          spaceBetween: { negative: true },
          borderRadius: 'md',
          boxShadow: 'sm',
        }}
      >
        {getOptions(questionImage.type, questionImage.options)}
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
          type="button"
          className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Next
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

export default QuestionImage;
