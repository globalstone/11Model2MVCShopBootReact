import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Header from '../common/Header'

function wellcome() {
  return (
    <div>
      <Header/>
    <div className="container">
      <div className="jumbotron">
        <h1>Model2MVCShop</h1>
        <p>J2SE, DBMS, JDBC, Servlet & JSP, Java Framework, HTML5, UI Framework 학습 후 Mini-Project 진행</p>
      </div>
      <div>
        <h3>나폴레옹은 이렇게 말했다.</h3>
        <p>"오늘 나의 불행은 언젠가 내가 잘못 보낸 시간의 보복이다."</p>
        <h3>"... 장벽은 절실하게 원하지 않는 사람들을 걸러내려고 존재합니다. 장벽은. 당신이 아니라 '다른' 사람들을 멈추게 하려고 거기 있는 것이지요."</h3>
        <h3>혜광스님</h3>
        <p>행복한 삶의 비결은.</p>
        <p>좋아하는 일을 하는 것이 아리라,</p>
        <p>지금 하는 일을 좋아하는 것입니다.</p>
      </div>
    </div>
    </div>
  );
}

export default wellcome;
