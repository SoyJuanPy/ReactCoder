import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import login from "../../assets/login.jpg";

const AllProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProductsCategory();
  }, []);
  const filterProducts = (allProducts) => {
    setSelectProducts(allProducts);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProducts}`,
          );

          setProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, [selectProducts]);
  return (
    <>
      <Layout>
        {/* Banner */}
        <div className="relative">
          <img
            src={login}
            alt="Login"
            className="object-cover w-full object-center h-[200px] mt-5"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]">
            {" "}
          </div>
          <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            All Products
          </h2>
        </div>
        {/* Categorías */}
        <div className="flex gap-3 flex-wrap">
          {allCategory.map((allProducts, index) => (
            <div className=" border" key={index}>
              <button
                className="border bg-black text-white px-2 py-2 mt-5"
                onClick={() => filterProducts(allProducts.name)}
              >
                {allProducts.name}
              </button>
            </div>
          ))}
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap gap-8">
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border-4"
                  >
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        src={item.thumbnail}
                        className="object-cover object-center w-full h-full block"
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Title:{item.title}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Rating: {item.rating}
                      </h2>
                      <p className="mt-1">Price: {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AllProduct;
