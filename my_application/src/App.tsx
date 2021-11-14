import React from 'react';
import {Route, Router, Routes, BrowserRouter,Link} from 'react-router-dom';
import './App.css';

import {Main} from "./Pages/Main/main";
import {Auth} from "./Pages/Auth/auth";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/"element={<Main />} />
                  <Route  path= "auth/*"element={<Auth />} />
              </Routes>
              <Link to="/">Main Page</Link>
              <Link to="/auth">Auth Page</Link>
          </BrowserRouter>
      </>
  );
}

export default App;
