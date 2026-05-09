import './App.css';
import React, { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const lazyWithDelay = (importFunc, delay = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(importFunc()), delay);
  });
};

const Login = lazy(() => lazyWithDelay(() => import('./Login')));

function LoadingSpinner() {
  return (
    <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
      <FadeLoader
        color="#0d6efd"
        cssOverride={{}}
        height={15}
        loading
        margin={2}
        radius={2}
        speedMultiplier={1}
        width={5}
      />
      <div className="text-muted font-size-xl text-center pt-3">Carregando sistema...</div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  const Menu = useMemo(() => lazy(() => lazyWithDelay(() => import('./Menu'))), [location.pathname]);
  const Main = useMemo(() => lazy(() => lazyWithDelay(() => import('./Main'))), [location.pathname]);
  const Sobre = useMemo(() => lazy(() => lazyWithDelay(() => import('./Sobre'))), [location.pathname]);
  const Usuarios = useMemo(() => lazy(() => lazyWithDelay(() => import('./pages/Usuarios'))), [location.pathname]);

  const Ddd = useMemo(() => lazy(() => lazyWithDelay(() => import('./Ddd'))), [location.pathname]);
  const IbgeMunicipios = useMemo(() => lazy(() => lazyWithDelay(() => import('./IbgeMunicipios'))), [location.pathname]);

  return (
    <Suspense key={location.pathname} fallback={<LoadingSpinner />}>
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

        <Route path="/usuarios" element={
          <Menu>
            <Usuarios />
          </Menu>
        } />



        <Route path="/ddd" element={
          <Menu>
            <Ddd />
          </Menu>
        } />

        <Route path="/ibge" element={
          <Menu>
            <IbgeMunicipios />
          </Menu>
        } />

        <Route path="*" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
