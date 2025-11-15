import ProductContainer from "./Components/ProductsContainer";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load Data...");
      }
    }
    fetchData();
  }, []);

  const visibleProducts = products.slice(0, visibleCount);
  function showMore() {
    setVisibleCount((count) => count + 10);
  }
  function darkMode() {
    setIsDark((prev) => !prev);
  }
  return (
    <div id="main " className={isDark ? "dark" : "light"}>
      <Navbar darkMode={darkMode} isDark={isDark} />
      {error && <h3>{error}</h3>}{" "}
      <div className="cardsContainer">
        <ProductContainer visibleProducts={visibleProducts} />
      </div>
      {visibleCount < products.length && (
        <div className="showMore">
          <button onClick={showMore}>Show More</button>
        </div>
      )}
    </div>
  );
}

export default App;
