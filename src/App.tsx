import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //react-router-dom을 통해서 import함

function App(): React.ReactElement {
  // TS이기 때문에 타입을 항상 설정해줘야 함
  return (
    <Router>
      {/* BrowserRouter as Router를 import해주지 않으면 오류가 뜸 */}
      <Routes>
        <Route path="/" element={<MainPage />} />{' '}
        {/* / : 의미하는 것은 url 주소 === http://localhost:3000/  */}
        {/* Route path? 어떤 url에 element? 어떤 component를 노출 시키겠다. */}
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
