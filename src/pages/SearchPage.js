import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productsSlice";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { ProductCard } from "../components/ProductCard";

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

export default SearchPage;
