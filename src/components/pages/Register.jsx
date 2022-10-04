/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAlert, showConfirm } from '../../features/modal/modalSlice';

import { callApi, isEmpty } from '../../functions/commonUtil';
import LoginButton from '../atoms/common/buttons/LoginButton';
import LoginInput from '../molecules/login/LoginInput';
import LoginForm from '../organisms/login/LoginForm';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const loginId = formData.get('id');
    const name = formData.get('name');
    const password = formData.get('password');
    const confirm = formData.get('confirm');

    const params = {
      login_id: loginId,
      name,
      password,
    };

    if (isEmpty(loginId)) {
      const payload = {
        isShow: true,
        title: '알림',
        message: 'ID를 입력해 주세요.',
        callback: () => {},
      };
      dispatch(showAlert(payload));
      return;
    }

    if (isEmpty(password)) {
      const payload = {
        isShow: true,
        title: '알림',
        message: '비밀번호를 입력해 주세요.',
        callback: () => {},
      };
      dispatch(showAlert(payload));
      return;
    }

    if (password !== confirm) {
      const payload = {
        isShow: true,
        title: '알림',
        message: '패스워드와 패스워드 확인이 일치하지 않습니다.',
        callback: () => {},
      };
      dispatch(showAlert(payload));
      return;
    }

    const payload = {
      isShow: true,
      title: '확인',
      message: '등록을 진행하시겠습니까?',
      callback: () => {
        callApi('post', '/u', params)
          .then(response => {
            if (response.status === 200) {
              dispatch(
                showAlert({
                  isShow: true,
                  title: '알림',
                  message:
                    '사용자 등록이 완료되었습니다.\n로그인 후 이용해주세요.',
                  callback: () => {
                    navigate('../');
                  },
                }),
              );
            }
          })
          .catch(error => {
            dispatch(
              showAlert({
                isShow: true,
                title: '알림',
                message: error.response.data.message,
                callback: () => {},
              }),
            );
          });
      },
    };
    dispatch(showConfirm(payload));
  };

  return (
    <LoginForm name="register" onSubmit={handleSubmit}>
      <LoginInput type="name" id="name" placeholder="이름을 입력하세요">
        이름
      </LoginInput>
      <LoginInput
        type="id"
        id="id"
        name="id"
        required
        placeholder="아이디를 입력하세요"
      >
        아이디
      </LoginInput>
      <LoginInput
        type="password"
        id="password"
        name="password"
        required
        placeholder="비밀번호를 입력하세요"
      >
        비밀번호
      </LoginInput>
      <LoginInput
        type="password"
        id="confirm"
        name="confirm"
        required
        placeholder="비밀번호를 한번 더 입력하세요"
      >
        비밀번호 확인
      </LoginInput>
      <LoginButton>등록하기</LoginButton>
    </LoginForm>
  );
}

export default Register;
