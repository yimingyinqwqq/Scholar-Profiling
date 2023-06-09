import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Dashboard from './Dashboard';
import UploadResume from './UploadResume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<App/>} /> */}
        <Route path="" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<><Dashboard /><UploadResume /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
