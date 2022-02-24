import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .catch((err) => console.log(err));
    };
    fetchProducts();
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {products.map((product) => (
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={Math.round(product.rating.rate)}
            />
          ))}
          {/* <Product
            id={0}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={1}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Black"
            price={249}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SX425_.jpg"
            rating={4}
          /> */}
        </div>

        {/* <div className="home__row">
          <Product
            id={2}
            title="Kids Smartwatch Phone 4G GPS Wifi Bluetooth Smart Watch for Boys Girls with Touch Screen HD Voice Video Chat, Dual Camera, Tracking Locator Christmas Birthday Gifts,Blue"
            price={59.65}
            image="https://images-na.ssl-images-amazon.com/images/I/71Iewf7tT7L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={3}
            title="Echo Dot (3rd Gen) | Smart speaker with clock and Alexa + Amazon Smart Plug, Works with Alexa"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51gfEQq5PNL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 64GB) - Space Gray"
            price={912.25}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BWrV0wJsL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={5}
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor"
            price={1099.66}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SX679_.jpg"
            rating={4}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
