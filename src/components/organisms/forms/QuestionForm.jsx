import React from 'react';

function QuestionForm({ children }) {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <fieldset>
              <legend className="sr-only">By Email</legend>
              {children}
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuestionForm;
