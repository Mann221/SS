import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import Blogs from './Blogs';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Services':
        return <Services />;
      case 'Contact':
        return <Contact />;
      case 'Gallery':
        return <Gallery />;
      case 'About':
        return <About />;
      case 'Blogs':
        return <Blogs />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
