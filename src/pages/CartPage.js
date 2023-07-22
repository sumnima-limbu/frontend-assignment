import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { removeProductFromCart } from "../store/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { products, productCount } = useSelector((state) => state.cart);

  const handleDeleteProduct = (productId) => {
    dispatch(removeProductFromCart(productId));
  };

  const totalAmount = products.reduce((acc, cartProduct) => {
    return (acc += cartProduct.price * cartProduct.quantity);
  }, 0);
  return (
    <div>
      <Container
        style={{
          marginTop: 30,
        }}
      >
        <h2>Products ({productCount})</h2>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((cartProduct, index) => (
              <tr key={cartProduct.id}>
                <td>{index + 1}</td>
                <td>
                  <Image width={100} thumbnail src={cartProduct.image} />
                </td>
                <td>{cartProduct.title}</td>
                <td>{cartProduct.price}</td>
                <td>{cartProduct.quantity}</td>
                <td>{cartProduct.price * cartProduct.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(cartProduct.id)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan={5}></th>
              <th colSpan={2}>Total: {totalAmount}</th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CartPage;
