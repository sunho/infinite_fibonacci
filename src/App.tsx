import React from 'react';
import {
  BrowserRouter, Route, Link, Routes 
} from "react-router-dom";
import FindEncode from './pages/FindEncode';
import FindIndex from './pages/FindIndex';
import FindNumber from './pages/FindNumber';
import Home from './pages/Home';

function App() {
  return (
    <div className="antialiased bg-slate-200 text-slate-700 h-screen overflow-auto">
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-2xl">
          <div className="flex flex-row justify-between items-center">
              <div>
                  <h1 className="text-3xl font-medium">Infinite Fibonacci</h1>
              </div>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-number" element={<FindNumber/>}/>
              <Route path="/find-index" element={<FindIndex/>}/>
              <Route path="/find-encode" element={<FindEncode/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
