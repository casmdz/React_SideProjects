//
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from '@mui/material/Container';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { Landing } from './pages/Landing';
import { ResponsiveAppBar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    // <>
<BrowserRouter>
<ShoppingCartProvider>
  <ResponsiveAppBar />
      <Container>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Container>
</ShoppingCartProvider>
</BrowserRouter>
    // </>
  )
}
export default App;