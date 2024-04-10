import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../productState";
import { addToCart } from "../cartState";
import { cartState } from "../cartState";

const Product = () => {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  // console.log("check product state ", productList);

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };

  return (
    <div>
      <h2>Product List</h2>

      <ul className="product-list">
        {productList.map((item) => {
          return (
            <>
              <li key={item.id}>
                {" "}
                {item.title} - {item.price}{" "}
              </li>
              <button
                style={{ marginLeft: "1rem" }}
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Product;
