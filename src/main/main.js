import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import { useHistory  } from 'react-router-dom';
import { useUser } from '../user/UserContext'; // UserContext import
import axios from 'axios';

const Main = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory ();
  const { setUser } = useUser(); // useUser hook 사용

  // useEffect 내부에서 데이터를 가져옵니다.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 사용자 데이터를 가져오는 API 엔드포인트를 호출합니다.
        const response = await axios.get('http://192.168.0.26:8000/user/json/login');
        // 응답에서 사용자 데이터를 추출합니다.
        const userData = response.data;
        // 가져온 사용자 데이터를 상태에 설정합니다.
        setUser(userData);
      } catch (error) {
        console.error('사용자 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    // 데이터 가져오는 함수를 호출합니다.
    fetchUserData();
  }, []); // useEffect의 의존성 배열을 빈 배열로 전달하여 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 설정합니다.

  const handleLogin = () => {
    if (!userId) {
      alert('ID를 입력해주세요.');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    // 로그인 처리 로직 (이 부분은 백엔드와 통신하는 코드로 변경해야 합니다.)
    axios.post('/user/json/login', {
      userId: userId,
      password: password
    })
    .then(response => {
      // 로그인이 성공하면 페이지 이동
      //window.location.href = 'http://192.168.0.17:8080/main.jsp';
      setUser(response.data);
      history.push('/getuser');
    })
    .catch(error => {
      // 서버에서 예외를 받은 경우
      if (error.response && error.response.data) {
        alert("아이디 비밀번호를 확인해");
      } else {
        // 그 외의 오류
        console.error('Error:', error);
        alert('로그인 중 오류가 발생했습니다.');
      }
    });
  };

  const handleSignUp = () => {
    // 회원가입 페이지로 이동하는 로직
    window.location.href = '/user/addUser';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'whitesmoke' }}>Model2 MVC Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse show" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
              </li>
            </ul>
            <form className="d-flex ml-auto">
              <input className="form-control me-sm-2" type="text" placeholder="ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
              <input className="form-control me-sm-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="btn btn-secondary my-2 my-sm-0" type="button" style={{ width: '200px' }} onClick={handleLogin}>Sign in</button>
              <button className="btn btn-secondary my-2 my-sm-0" type="button" style={{ width: '200px' }} onClick={handleSignUp}>Sign Up</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            {/* 메뉴 부분은 동일하게 유지 */}
          </div>
          <div className="col-md-9">
            <div className="jumbotron">
              <h1>Model2 MVC Shop</h1>
              <p>로그인 후 사용가능...</p>
              <p>로그인 전 검색만 가능합니다.</p>
              <p>회원가입 하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
