import './App.css';
import Home from '../../pages/home/home'
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound/pageNotFound';
import AnnoncePage from '../../pages/annoncePage/annoncePage';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import About from '../../pages/about/about';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <>
          <Navbar />

          <BrowserRouter>

            <Routes>
              <Route path="annonce/:id" element={<AnnoncePage />} />
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<PageNotFound />}>
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      </div>
    );
  }
}


export default App; 