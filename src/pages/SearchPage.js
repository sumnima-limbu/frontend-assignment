import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "../images/rating.png";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Filter data based on query parameter (e.g., title)
        const queryParams = new URLSearchParams(location.search);
        const q = queryParams.get("q");

        if (q) {
          data = data.filter((item) =>
            item.title.toLowerCase().includes(q.toLowerCase())
          );
        }

        dispatch(setProducts(data));
      });
  }, [dispatch, location.search]);

  return (
    <>
      <SearchBar />

      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="col-lg-12">
          <h1>Search Page Products ...</h1>
          {products.length > 0 ? (
            <Row>
              {products.map((product) => (
                <Col key={product.id} md={4} style={{ marginBottom: 40 }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      style={{
                        width: "19rem",
                        marginBottom: "3rem",
                        height: "22rem",
                      }}
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
                      <Card.Body>
                        <h6 className="semi-bold">{product.title}</h6>
                        <img
                          style={{
                            height: "50px",
                            width: "80px",
                          }}
                          src={Image}
                        />
                        ({product.rating.rate})
                      </Card.Body>
                    </Card>
                  </Link>
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

export default SearchPage;
