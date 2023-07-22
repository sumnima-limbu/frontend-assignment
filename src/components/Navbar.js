import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const { productCount } = useSelector((state) => state.cart);
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Online Store</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/cart">
            <Button variant="primary">
              Cart <Badge bg="secondary">{productCount}</Badge>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
