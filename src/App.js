import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
  <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
