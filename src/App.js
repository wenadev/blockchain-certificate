import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './add';
import Verify from './verify';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add />}/>
            <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    );
  }
