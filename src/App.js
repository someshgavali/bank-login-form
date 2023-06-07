import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Loginf/Login';
import Otp from './components/Otpcomp/Otp'

function App() {
  return (
    // <div className="App">
    //   <Login/>
    //   <Otp/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/verify' element={<Otp/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
