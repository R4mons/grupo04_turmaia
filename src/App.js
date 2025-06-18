import './App.css';
import Footer from './Footer';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { RingLoader } from 'react-spinners';
import ErrorPage from './ErrorPage';
import Sobre from './sobre';


function delayImport(factory, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      factory().then(resolve);
    }, delay);
  });
}

const Menu = lazy(() => delayImport(() => import('./Menu'), 2000));
const Main = lazy(() => delayImport(() => import('./Main'), 2000));
const Login = lazy(() => delayImport(() => import('./Login'), 3000));


function App() {
  return (
    <>
      {/* <> Fragment React - encapsula html - Novo*/}

      <BrowserRouter>

        {/*  <Suspense fallback={<div>Aguarde carregando a pagina...</div>}> */}

        <Suspense fallback={<div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3 suspense-loading">
          <div className="d-flex align-items-center flex-column px-4"><RingLoader color={'#3c44b1'} loading={true} /></div>
          <div className="text-muted font-size-xl text-center pt-3"> Aguarde enquanto preparamos tudo para você'</div>
        </div>}>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Menu> <Main /> </Menu>} />
            <Route path="/footer" element={<Menu> <Footer
              insta="@marcosamiguel"
              whats="32 98401-5080" /> </Menu>} />
           {/* <Route path="/pokedex" element={<Menu> <Pokedex /> </Menu>} /> */}
           {/* <Route path="/habitat" element={<Menu> <Habitat /> </Menu>} /> */}
            <Route path="/sobre" element={<Menu> <Sobre /> </Menu>} /> / 
            <Route path="*" element={<ErrorPage />} />

          </Routes>
        </Suspense>
      </BrowserRouter>

    </>

  );
}

export default App;
