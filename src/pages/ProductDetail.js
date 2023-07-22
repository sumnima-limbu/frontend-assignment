import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddToCart from "../components/AddToCart";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const parsedProductId = parseInt(productId, 10);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [parsedProductId]);

  console.log(productId);

  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        {!product ? (
          <p>Loading ...</p>
        ) : (
          <>
            <h1>Product Details</h1>
            <div className="col-lg-12">
              <Row>
                <div className="col-lg-6">
                  <img src={product.image} className="productImg" />
                </div>
                <div className="col-lg-6 p-container">
                  <h4 className="mb-40">Product Description</h4>
                  <h6 className="my-4">{product.title}</h6>
                  <p>{product.description}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Rating: {product.rating.rate}</p>
                  <div>
                    <AddToCart product={product} />
                  </div>
                </div>
              </Row>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail;
