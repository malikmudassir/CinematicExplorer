// src/App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Characters from './components/Characters';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';
import HomePage from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      <Router>
        <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
