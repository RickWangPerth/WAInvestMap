import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profiles';
import Navigation from './components/navigation';
import Userinfo from './components/userinfo';

function App() {


  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/userinfo" element={<Userinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
