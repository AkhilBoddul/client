import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import MERNAK from './components/MERNAK';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MERNAK />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
