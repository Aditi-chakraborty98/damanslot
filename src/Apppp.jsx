import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import Invite from './invite';

const App = () => {
  return (
    <Router>
      {/* <div>
        <div><Link to={"/home"}>Login</Link></div>
      </div> */}
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </Router>
  );
};

export default App;
