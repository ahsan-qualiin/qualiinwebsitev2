import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStoryPage from './pages/OurStoryPage';
import Newsletter from './pages/Newsletter';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import SamdSuite from './pages/SamdSuite';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/our-story" element={<OurStoryPage />} />
      <Route path="/evidence/SaMD" element={<SamdSuite />} />
      <Route path="/about" element={<ComingSoonPage />} />
      <Route path="/about" element={<ComingSoonPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/resources" element={<ComingSoonPage />} />
      <Route path="/resources" element={<ComingSoonPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/product" element={<ComingSoonPage />} />
      <Route path="/category" element={<ComingSoonPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
