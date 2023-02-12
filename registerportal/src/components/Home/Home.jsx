import React from 'react';
import homeImg from "../../Images/home-img.png";
import "./home.css";
import Header from '../Header';

function Home() {
  return (<>
  <Header/>
  <div className="home px-5">
      <div className="row">
          <div className="home-text  d-flex flex-column justify-content-center col-6">
              <h1>Better platform For Crypto Trading </h1>
              <p>Wanted to do Crypto trading?</p>
          </div>
          <div className="home-img d-flex justify-content-center col-6 py-5">
              <img src={homeImg} alt="Home-Page description" className='img-fluid' />
          </div>
      </div>
  </div>
  </>
    
  )
}

export default Home;