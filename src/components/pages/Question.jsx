/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionTitle from '../atoms/QuestionTitle';
// eslint-disable-next-line no-unused-vars
import QuestionOption from '../molecules/QuestionOption';
import QuestionOptionGroup from '../organisms/QuestionOptionGroup';
// import Check from '../molecules/Check';
// import CheckGroup from '../organisms/CheckGroup';

function Question({ id, history }) {
  const [question, setQuestion] = useState({
    id: 9,
    text: "Returning consumers may log in to see personalized web pages on an e-commerce site. The process is shown below:\r\n\r\nOn EC2 instances, an application is executing. The database that records user accounts and preferences is hosted on Amazon RDS. While waiting for the login stage to finish, the website freezes or loads slowly. The remainder of the site's components are properly optimized.",
    image_name: '9.png',
    image:
      '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',
    seq: 0,
    use_yn: 'Y',
    type: 'S',
    category_id: 3,
  });
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState([
    {
      id: 17,
      number: 0,
      seq: 1,
      text: 'A. Implement the user login page as an asynchronous Lambda function.',
      correct_yn: 'Y',
      question_id: 9,
      del_yn: 'N',
      checked: false,
    },
    {
      id: 18,
      number: 0,
      seq: 2,
      text: 'B. Use Amazon ElastiCache for MemCached to cache user data.',
      correct_yn: 'N',
      question_id: 9,
      del_yn: 'N',
      checked: false,
    },
    {
      id: 19,
      number: 0,
      seq: 3,
      text: 'C. Use an Amazon Application Load Balancer to load balance the traffic to the website.',
      correct_yn: 'N',
      question_id: 9,
      del_yn: 'N',
      checked: false,
    },
    {
      id: 20,
      number: 0,
      seq: 4,
      text: 'D. Call the database asynchronously so the code can continue executing.',
      correct_yn: 'N',
      question_id: 9,
      del_yn: 'N',
      checked: false,
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://3.37.139.180:9002/api/q/${id}`)
      .then(data => {
        console.log(data);
        setQuestion(data.data.question);
        setOptions(data.data.options);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getAnswerSet = entries => {
    let answerSet = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of entries) {
      if (value === 'true') {
        answerSet += key;
      }
    }

    return answerSet;
  };

  const handleSubmit = event => {
    const formData = new FormData(event.target);
    event.preventDefault();

    axios
      .post('http://3.37.139.180:9002/api/q/move', {
        id: question.id,
        question_id: question.id,
        progress_set: '',
        answer_set: getAnswerSet(formData.entries()),
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <QuestionTitle id={question.id}>{question.text}</QuestionTitle>
          {question.image ? (
            <img
              className="my-0 mx-auto"
              src={`data:image/png;base64,${question.image}`}
              alt="no images"
            />
          ) : null}
          <QuestionOptionGroup options={options} />
          {/* <QuestionOptionGroup>
              {options.map(option => {
                return <QuestionOption option={option} />;
              })}
            </QuestionOptionGroup> */}
        </div>
        <div className="px-4 py-3 text-right sm:px-6">
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
            className="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default Question;
