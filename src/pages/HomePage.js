import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "../images/rating.png";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import AddToCart from "../components/AddToCart";

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
                  <Card
                    style={{
                      width: "19rem",
                      marginBottom: "3rem",
                      height: "22rem",
                    }}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{
                          height: "180px",
                          width: "150px",
                          margin: "auto",
                          padding: "16px",
                        }}
                      />
                    </Link>
                    <Card.Body>
                      <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <h6 className="semi-bold">{product.title}</h6>
                      </Link>
                      <img
                        style={{
                          height: "50px",
                          width: "80px",
                        }}
                        src={Image}
                      />
                      ({product.rating.rate})
                      <div>
                        <AddToCart product={product} />
                      </div>
                    </Card.Body>
                  </Card>
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
