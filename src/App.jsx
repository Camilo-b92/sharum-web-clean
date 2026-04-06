import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Inicio   from './pages/Inicio';
import Shakira  from './pages/Shakira';
import Nosotras from './pages/Nosotras';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Inicio />}   />
        <Route path="/shakira"  element={<Shakira />}  />
        <Route path="/nosotras" element={<Nosotras />} />
      </Routes>
    </BrowserRouter>
  );
}
