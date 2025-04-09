import React from 'react';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarBootstrap } from './components/NavbarBS';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';
import Events from './pages/Events';
import LoginPage from './admin/adminLogin';
import AdminDashboard from './admin/AdminDashboard';

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  // Helper component to handle protected routes
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              {/* Add other admin routes here */}
            </Routes>
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
