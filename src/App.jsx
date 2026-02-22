// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetails from './pages/CarDetails';
import Contact from './pages/Contact';

function App() {
  // Initialize smooth scrolling
  useLenis();

  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<CarDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
