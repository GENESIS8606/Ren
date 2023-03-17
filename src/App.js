import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Nave from './components/Nave';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nave/>
    <Routes>
      <Route path={'/Login'} element={<Login/>}></Route>
      <Route path={'/Signup'} element={<Signup/>}></Route>
      <Route path={'/Facebook'} element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
