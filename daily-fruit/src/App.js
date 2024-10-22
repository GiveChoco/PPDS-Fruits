import React from 'react';
import './App.css';
{/* import fruit pages*/}
import Landing_page from './pages/landing';
import BananaFoods from './pages/banana_foods';
import AppleFoods from './pages/apple_foods';
import BlueberryFoods from './pages/blueberry_foods';
import GrapesFoods from './pages/grapes_foods';
import StrawberryFoods from './pages/strawberry_foods';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/apple_foods" element={<AppleFoods />} />
          <Route path="/banana_foods" element={<BananaFoods />} />
          <Route path="/blueberry_foods" element={<BlueberryFoods />} />
          <Route path="/grapes_foods" element={<GrapesFoods />} />
          <Route path="/strawberry_foods" element={<StrawberryFoods />} />
      </Routes>
    </Router>
  );
}

export default App;
