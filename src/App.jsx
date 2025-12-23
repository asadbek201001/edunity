import React from 'react'
import './styles/App.css'

import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './router/MainRoutes';

function App() {

  return (
    <>
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>

    </>
  )
}

export default App
