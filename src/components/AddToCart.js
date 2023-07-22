import React from "react";
import Button from "react-bootstrap/Button";
import { addProductToCart, removeProductFromCart } from "./../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { product } = props;

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    dispatch(
      addProductToCart({
        ...product,
        quantity: 1,
      })
    );
    // toast.success("Product added to cart");
  };

  const handleRemoveFromCart = (event, productId) => {
    event.stopPropagation();
    dispatch(removeProductFromCart(productId));
    // toast.error("Product removed from cart");
  };

  const findProductInCart = cart.products.find(
    (cartProduct) => cartProduct.id === product.id
  );

  return findProductInCart ? (
    <Button
      onClick={(event) => handleRemoveFromCart(event, product.id)}
      variant="danger"
    >
      Remove from Cart
    </Button>
  ) : (
    <Button
      onClick={(event) => handleAddToCart(event, product)}
      variant="primary"
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
