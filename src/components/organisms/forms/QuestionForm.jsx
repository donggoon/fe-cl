import React from 'react';

function QuestionForm({ history, children }) {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <fieldset>
            <legend className="sr-only">Options</legend>
            {children}
          </fieldset>
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

export default QuestionForm;
