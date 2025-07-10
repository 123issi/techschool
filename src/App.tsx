import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Countries from './components/Countries';
import ApplicationForm from './components/ApplicationForm';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <Countries />
      <ApplicationForm />
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;