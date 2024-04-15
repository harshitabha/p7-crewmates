import {Routes, Route} from 'react-router-dom'; 

import Home from './pages/Home';
import Create from './pages/Create';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
