import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="The Book of Sax: How did Sax Do It?"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg"
        />
      </div>

      {/* product */}
    </div>
  );
}

export default Home;
