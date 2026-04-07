import './App.css';
import Main from './Main';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Sobre from './Sobre';

const Menu = lazy(() => import('./Menu'));
const Login = lazy(() => import('./Login'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
          <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
            <RingLoader color={'#0d6efd'} loading={true} />
            <div className="text-muted font-size-xl text-center pt-3">Carregando sistema...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/main" element={
              <Menu>
                <Main />
              </Menu>
            } />
            
            <Route path="/sobre" element={
              <Menu>
                <Sobre />
              </Menu>
            } />
            
            <Route path="*" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
