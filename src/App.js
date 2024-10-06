import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <VideoPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
