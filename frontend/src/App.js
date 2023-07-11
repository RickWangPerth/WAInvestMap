import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile  from "./components/profiles";
import Navigation from './components/navigation';
import { Logout } from './components/logout';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Profile />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;