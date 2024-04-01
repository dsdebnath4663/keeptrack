import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./actions/cartActions";

const ShoppingCart = ({ items, addToCart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: "Item 1", price: 10 })}>
        Add Item
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
