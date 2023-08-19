import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate 
} from "react-router-dom";

import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
   <Router>
    <main>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/:userId/places" element={<UserPlaces />}/>
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
     </main>
   </Router>
  );
};

export default App;
