import {Routes, Route} from 'react-router-dom'; 

import Home from './pages/Home';
import Create from './pages/Create';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Character from './pages/Character';
import {createClient} from '@supabase/supabase-js';

import "./App.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_SUPAPASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseApiKey);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create supabase={supabase}/>} />
        <Route path="/gallery" element={<Gallery supabase={supabase}/>}>
          <Route path="/gallery/:id" element={<Character supabase={supabase}/>}/>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
