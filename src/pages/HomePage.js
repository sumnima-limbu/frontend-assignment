import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { setProducts } from "../store/productsSlice";
import SearchBar from "../components/SearchBar";
import { ProductCard } from "../components/ProductCard";

const HomePage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  // console.log(products);
  return (
    <>
      <SearchBar />

      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="col-lg-12">
          <h1>Products ...</h1>
          {products.length > 0 ? (
            <Row>
              {products.map((product) => (
                <Col key={product.id} md={4} style={{ marginBottom: 40 }}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
