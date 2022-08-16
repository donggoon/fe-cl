import React, { useState } from 'react';
// button -> 문제 생성 버튼

// 문제 생성 버튼
// input form 화면
// 문제, 답 입력 -> 등록 버튼
// 문제 조회 버튼

// 문제 입력해서 저장

function Admin() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        문제 생성
      </button>
      {isVisible && <Problem />}
      <p />
      {/* eslint-disable-next-line react/button-has-type */}
      999999999999999999999999999999999 9999999999999999 9 99 9 9 9 9 9 9 99 9 9
      9 9 9 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9
      9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9
      9 9 99 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9
      99 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 9 9 9 9 9 99 9
      9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9
      9 99 9 9 9 9 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9 99 9 9 9 9 9 9 9 9 9
      99 9 9 9 9 9 99999999999999999 99999999999999999 9 9 9 9 9 9 9 9 9 9
      99999999999999999999999999999
      <button>문제 조회</button>
    </>
  );
}
function Problem() {
  return (
    <form>
      <input type="text" />
      <input />
      <input />
      <input />
      <input />
      <input />
      <button type="button">문제 등록</button>
    </form>
  );
}

export default Admin;
