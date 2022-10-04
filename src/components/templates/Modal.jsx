import React from 'react';

import CancelButton from '../atoms/common/buttons/CancelButton';
import ConfirmButton from '../atoms/common/buttons/ConfirmButton';
import ExclamationIcon from '../atoms/common/icons/ExclamationIcon';
import QuestionIcon from '../atoms/common/icons/QuestionIcon';
import ModalContent from '../molecules/modal/ModalContent';

function Modal({ type, info, handleConfirm, handleCancel }) {
  const color = type === 'alert' ? 'rose' : 'indigo';

  return info.isShow ? (
    <div
      className="sticky top-0 z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative w-full overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-${color}-100 sm:mx-0 sm:h-10 sm:w-10`}
                >
                  {type === 'alert' ? (
                    <ExclamationIcon color={color} />
                  ) : (
                    <QuestionIcon color={color} />
                  )}
                </div>
                <ModalContent title={info.title} message={info.message} />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {handleConfirm ? (
                <ConfirmButton color={color} onClick={handleConfirm}>
                  확인
                </ConfirmButton>
              ) : null}
              {handleCancel ? (
                <CancelButton onClick={handleCancel}>취소</CancelButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
