import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSales,setBestSales]=useState([])
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setTrendingProducts(filteredTrendingProducts);
  }, []);
  useEffect(()=>{
    const bestSales=products.filter((item)=> item.category==="sofa"||  item.category==="watch")
   setBestSales((bestSales));
  },[])
  return (
    <main>
      <section className="make bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-2 items-center">
            <div>
              <span className="tracking-wide">Lorem ipsum dolor sit.</span>
              <h1 className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                illo!
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                quae tempora eius, iusto soluta fuga possimus voluptatum
                voluptas ut sunt.
              </p>
              <Link
                to={"/shop"}
                className="bg-sky-950 text-white px-3.5 py-3.5 rounded-md"
              >
                Shop Now
              </Link>
            </div>
            <div>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="trending__products">
        <div className="container mx-auto px-4">
          <h1 className="text-center mt-4 font-bold">Trending Products</h1>
          {/* {trendingProducts.map((item, index) => (
            <div></div>
          ))} */}
        </div>
      </section>
      <ProductList data={trendingProducts} />
      <h1 className="text-center mt-4 font-bold">Best Sales</h1>
      <ProductList data={bestSales}/>
    </main>
  );
};

export default Home;
