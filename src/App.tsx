import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStoryPage from './pages/OurStoryPage';
import Newsletter from './pages/Newsletter';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import SamdSuite from './pages/SamdSuite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/our-story" element={<OurStoryPage />} />
      <Route path="/evidence/SaMD" element={<SamdSuite />} />
      <Route path="/about" element={<ComingSoonPage />} />
      <Route path="/services" element={<ComingSoonPage />} />
      <Route path="/resources" element={<ComingSoonPage />} />
      <Route path="/careers" element={<ComingSoonPage />} />
      <Route path="/product" element={<ComingSoonPage />} />
      <Route path="/category" element={<ComingSoonPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
