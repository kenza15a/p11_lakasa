import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/navbar';
import AnnonceCard from './components/annonce/annoceCard';
import Banner from './components/banner/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar />
        <Banner />
        <div className='annonces-container'>
            <AnnonceCard /><AnnonceCard /><AnnonceCard />
            <AnnonceCard /><AnnonceCard /><AnnonceCard />
        </div>

    </>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
