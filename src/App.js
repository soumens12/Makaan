import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './component/Header';
import Footer from './component/Footer';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import PropertylistPage from './pages/PropertylistPage';
import PropertytypePage from './pages/PropertytypePage';
import PropertyagentPage from './pages/PropertyagentPage';
import NotFound from './pages/NotFound';


function App() {
  const Layout = ({ children }) => (
    <>
    <div className='container-xxl bg-white p-0'>
      <Header />
      {children}
      <Footer />
    </div>
    </>
  );
  

  return (

  <Router>
      <Routes>
        {/* Layout Routes with Header and Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/propertylist"
          element={
            <Layout>
              <PropertylistPage />
            </Layout>
          }
        />
        <Route
          path="/propertytype"
          element={
            <Layout>
              <PropertytypePage />
            </Layout>
          }
        />
        <Route
          path="/propertyagent"
          element={
            <Layout>
              <PropertyagentPage />
            </Layout>
          }
        />
        <Route
          path="/testimonial"
          element={
            <Layout>
              <Testimonial />
            </Layout>
          }
        />

        {/* 404 Route without Header and Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};



export default App;
