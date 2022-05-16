import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import {DISCOUNT_PRICE} from '../../constants';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1, price: Math.floor(item.price * DISCOUNT_PRICE) }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1" style={{marginBottom: '20px'}}>
      <Link style={{ textDecoration: 'none', color: "black", paddingLeft: '15px'}} to={`/products/${_id}`}>
        <img id="prodImage"
          alt={name}
          src={`/images/${image}`}
        />
        <h3>{name}</h3>
      </Link>
      <div style={{paddingLeft: '15px'}}>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span><b>${Math.floor(price * DISCOUNT_PRICE)}</b> instead of ${price}</span>
        <br />
        <br />
      </div>
      <button id="tag" onClick={addToCart}>Hire Now</button>
      <br />
    </div>
  );
}

export default ProductItem;
