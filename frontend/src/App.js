import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
   <Router>
    <main>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
     </main>
   </Router>
  );
};

export default App;
