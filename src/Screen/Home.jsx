import React from 'react'
import Navbar from '../Components/Navbar/Navbar-comp';

function Home() {
  return (
      <>
      <Navbar />
    <div className="App">
        <img className="main-img" src="https://raw.githubusercontent.com/Sindhu983/e-commerce/dev/girl-image.jpg" alt="girl image"/>
        <p className="content">The kids dress a lot better here</p>
            <button className="shop-btn">
                <a className="shop-now" href="#">Explore Now</a>
            </button>
        <div className="card_contianer">
            <div className="features">
                <img className="card-image" src="https://raw.githubusercontent.com/Sindhu983/e-commerce/dev/product%20list/image1.jpg" alt="boy image"/>
                <div className="arrivals">
                    <p className="arrival-title">NEW ARRIVALS</p>
                    <h2 className="levis">Pepe Jeans</h2>
                    <p className="abt-text">The regular fit they provide, everything is top-notch</p>
                </div>
            </div>
            <div className="features">
                <img className="card-image" src="https://raw.githubusercontent.com/Sindhu983/e-commerce/dev/product%20list/image5.jpg" alt="girl image" />
                <div className="arrivals">
                    <p className="arrival-title">NEW ARRIVALS</p>
                    <h2 className="levis">Calvin Klein</h2>
                    <p className="abt-text">Calvin Klein is a premium brand because not everyone can buy</p>
                </div> 
            </div> 
        </div>
    </div>
    </>
  )
}
export default Home;