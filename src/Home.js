import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286844220_.jpg"
        alt=""></img>
      

      <div className="home__row">
        <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"  
        rating={5}
        id="2351728"/>
        <Product title="Apple AirPods with Charging Case (Wired)"
        price={96.75}
        id="1562738"
        image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
        
        rating={4}/>
        
        {/*product*/}
      </div>

      <div className="home__row">
        {/*product*/}
        <Product title="COWIN E7 Active Noise Cancelling Headphones , 30 Hours Playtime for Travel/Work, Black"
        rating={4}
        price={59.67}
        id="532627373"
        image="https://images-na.ssl-images-amazon.com/images/I/41WzHq0SkRL._AC_.jpg"
        
        />
        <Product title="HP Chromebook 14-inch HD Laptop, Intel Celeron N4000 "
        rating={4}
        price={299.00}
        image="https://images-na.ssl-images-amazon.com/images/I/91shKLxoedL._AC_SL1500_.jpg"
        />
        <Product title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display"
        rating={4}
        price={359.87}
        id="16839390"
        image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        
        
        />
        {/*product*/}
        {/*product*/}
      </div>

      <div className="home__row">
        {/*product*/}
        <Product title="SAMSUNG Q60T Series 50-inch Class QLED Smart TV|4K, UHD Dual LED Quantum HDR | Alexa Built-in | QN50Q60TAFXZA, 2020 Model "
        rating={5}
        price={519.76}
        id="67352453"
        image="https://images-na.ssl-images-amazon.com/images/I/61fKzrson-L._AC_SL1000_.jpg"
        
        />
      </div>

      </div>

      
      
    </div>
  )
}

export default Home