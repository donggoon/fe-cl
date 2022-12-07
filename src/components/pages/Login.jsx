/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { userLogin } from '../../features/user/userSlice';
import { showAlert } from '../../features/modal/modalSlice';

import { callApi, isEmpty } from '../../functions/commonUtil';
import Button from '../atoms/common/buttons/LoginButton';
import LoginInput from '../molecules/login/LoginInput';
import LoginForm from '../organisms/login/LoginForm';

function Login() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(user.id)) {
      navigate('/');
    }
  }, [user.id]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const loginId = formData.get('id');
    const password = formData.get('password');

    const params = {
      login_id: loginId,
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

    callApi('post', '/u/login', params)
      .then(response => {
        dispatch(userLogin(response.data));
        navigate('/');
      })
      .catch(error => {
        const payload = {
          isShow: true,
          title: '알림',
          message: error.response.data.message,
          callback: () => {},
        };
        dispatch(showAlert(payload));
      });
  };

  return (
    <LoginForm name="login" onSubmit={handleSubmit}>
      <LoginInput id="id" name="id" required>
        아이디
      </LoginInput>
      <LoginInput id="password" name="password" required>
        비밀번호
      </LoginInput>
      <Button>로그인</Button>
    </LoginForm>
  );
}

export default Login;
