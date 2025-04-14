import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarBootstrap } from './components/NavbarBS';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';
import Events from './pages/Events';
import LoginPage from './admin/adminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminGallery from './admin/pages/AdminGallery';
import AdminTestimonials from './admin/pages/AdminTestimonials';
import AdminBoard from './admin/pages/AdminBoard';
import AdminResources from './admin/pages/AdminResources';
import AdminRecentEvents from './admin/pages/AdminRecentEvents';
import AdminUpcomingEvents from './admin/pages/AdminUpcomingEvents';
import AdminMusic from './admin/pages/AdminMusic';
import ProtectedRoute from './admin/components/ProtectedRoute';
import AdminNavbar from './admin/components/AdminNavbar';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <div style={{ display: 'flex' }}>
              <AdminNavbar />
              <div style={{ marginLeft: '250px', width: '100%', padding: '20px' }}>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/gallery" element={<AdminGallery />} />
                  <Route path="/resources" element={<AdminResources />} />
                  <Route path="/recentEvents" element={<AdminRecentEvents />} />
                  <Route path="/upcomingEvents" element={<AdminUpcomingEvents />} />
                  <Route path="/testimonials" element={<AdminTestimonials />} />
                  <Route path="/music" element={<AdminMusic />} />
                  <Route path="/board" element={<AdminBoard />} />
                </Routes>
              </div>
            </div>
          </ProtectedRoute>
        } />

        {/* Public routes */}
        <Route
          path="/*"
          element={
            <>
              <NavbarBootstrap />
              <div className="d-flex flex-column min-vh-100">
                <main className="flex-grow-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
