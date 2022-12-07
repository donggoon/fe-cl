import React from 'react';
import { isEmpty } from '../../../functions/commonUtil';
import Status from '../../atoms/common/Status';
import Image from '../../atoms/common/Image';

function QuestionContent({ seq, text, status, image, children }) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <div className="flex items-center">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{`질문 ${seq}`}</h3>
          {!isEmpty(status) ? <Status value={status} /> : null}
        </div>
        <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">{text}</p>
        <Image src={image} />
        {children}
      </div>
    </div>
  );
}

export default QuestionContent;
