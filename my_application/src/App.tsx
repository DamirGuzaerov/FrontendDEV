import React from 'react';
import {observer,Provider} from "mobx-react";
import {Route, Router, Routes, BrowserRouter,Link} from 'react-router-dom';
import './App.css';
import mainStore from "./stores/mainStore"

import {Main} from "./Pages/Main/main";
import {Auth} from "./Pages/Auth/auth";
import {Registration} from "./Pages/Registration/registration";

function App() {
  return (
      <>
          <BrowserRouter>
              <Provider {...mainStore}>
                  <Routes>
                      <Route path="registration/" element={<Registration/>}/>
                      <Route path="/Main"element={<Main />} />
                      <Route  path= "auth/"element={<Auth />} />
                  </Routes>
                  <Link to="/Main">Main Page</Link>
                  <Link to="/auth">Auth Page</Link>
                  <Link to="/registration">RegPage</Link>
              </Provider>
          </BrowserRouter>
      </>
  );
}

export default App;
