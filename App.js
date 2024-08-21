import './App.css';
import Header from './components/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Users from './page/Users';
import Notfound from './page/Notfound';
import Login from './components/Login';

function App() {

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element = {<Users />} />
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
