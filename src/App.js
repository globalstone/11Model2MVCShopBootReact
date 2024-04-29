import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './main/main';
import Welcome from './index/wellcome';
import Main from './main/main';
import { UserProvider } from './user/UserContext'; // UserProvider 추가

function App() {
  return (
    <div className="App">
      <Router>
        {/* UserProvider로 Main 컴포넌트를 감싸줍니다. */}
        <UserProvider>
          <Route path="/" exact component={Login} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/main" component={Main} /> {/* 추가적으로 Main에 대한 Route 설정 */}
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
