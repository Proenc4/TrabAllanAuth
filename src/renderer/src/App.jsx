import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard  from './components/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <div>

      <Routes>
          <Route  path="/" element={<Login />} />
          <Route  path="/login" element={<Login />}></Route>
          <Route  path="/register" element={<Register />}></Route>
          <Route  path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}