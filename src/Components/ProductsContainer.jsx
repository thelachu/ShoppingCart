import "./ProductsContainer.css";
function ProductContainer({ visibleProducts }) {
  return visibleProducts.map((product) => (
    <div className="card" key={product.id}>
      <img src={product.image} />
      <p className="name">{product.title}</p>
      <p className="price">{product.price}</p>
      {/* <p>{product.rating.rate}</p> */}
      <button>ADD TO CART</button>
    </div>
  ));
}

export default ProductContainer;
