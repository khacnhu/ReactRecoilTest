import { useRecoilValue } from "recoil";
import { cartState } from "../cartState";
import { cartToTal } from "../cartState";

const CartInfo = () => {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartToTal);

  return (
    <div>
      <h2>Cart Info: </h2>
      <ul className="cart-item">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>
        ))}
      </ul>

      <h1>total : {total} </h1>
    </div>
  );
};

export default CartInfo;
