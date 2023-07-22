import { Card } from "react-bootstrap";
import Image from "./../images/rating.png";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export const ProductCard = ({ product }) => {
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "2rem",
        height: "23rem",
        textAlign: "center",
      }}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            height: "179px",
            width: "149px",
            margin: "auto",
            padding: "15px",
          }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <h5 className="semi-bold">{product.title}</h5>
        </Link>
        <img
          style={{
            height: "49px",
            width: "79px",
          }}
          src={Image}
        />
        ({product.rating.rate})
        <div>
          <AddToCart product={product} />
        </div>
      </Card.Body>
    </Card>
  );
};
