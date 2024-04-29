import React from 'react';
import axios from 'axios';
import { useUser } from '../user/UserContext';

function Header() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    axios.get('/user/logout')
      .then(() => {
        setUser(null); // 사용자 정보 초기화
        window.location.href = '/'; // 로그아웃 후 홈페이지로 이동
      })
      .catch(error => {
        console.error('로그아웃 중 오류 발생:', error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-inverse fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'whitesmoke' }} onClick={() => window.location.href = '/main.jsp'}>Model2 MVC Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle show" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                회원관리
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">개인정보조회</a>
                {user?.role === 'admin' && <a className="dropdown-item" href="#">회원정보조회</a>}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">etc...</a>
              </div>
            </li>
            {user?.role === 'admin' &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle show" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                  상품관리
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">판매상품등록</a>
                  <a className="dropdown-item" href="#">판매상품관리</a>
                  <a className="dropdown-item" href="#">배송관리</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">etc...</a>
                </div>
              </li>
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle show" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                상품구매
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">상품검색</a>
                <a className="dropdown-item" href="#">구매이력조회</a>
                <a className="dropdown-item" href="#">찜 목록</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">etc...</a>
              </div>
            </li>
          </ul>
          <form className="d-flex ml-auto">
            <h4 style={{ color: 'whitesmoke' }}>{user?.userName ? `${user.userName}님 환영합니다.` : ''}</h4>
            <button className="btn btn-secondary me-2" type="button" onClick={handleLogout}>Log out</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
