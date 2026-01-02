import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChairmanMessage from './pages/about/ChairmanMessage';
import Profile from './pages/about/Profile';
import OurVision from './pages/about/OurVision';
import Management from './pages/about/Management';
import OngoingProjects from './pages/projects/OngoingProjects';
import ExecutedProjects from './pages/projects/ExecutedProjects';
import NewsEvents from './pages/media/NewsEvents';
import GalleryPage from './pages/media/GalleryPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/chairman-message" element={<ChairmanMessage />} />
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/about/our-vision" element={<OurVision />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/executed" element={<ExecutedProjects />} />
          <Route path="/media/news-events" element={<NewsEvents />} />
          <Route path="/media/gallery" element={<GalleryPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
