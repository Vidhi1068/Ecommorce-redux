import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomeProduct.css";
import { Card, Button } from "react-bootstrap";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

export default function HomeProduct() {
  const [Allproducts, setAllproducts] = useState([]);

  const Getdata = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setAllproducts(response.data);
    });
  };

  useEffect(() => {
    Getdata();
  }, []);
  return (
    <>
      <div className="container">
        {Allproducts.map((product) => (
          // <Card style={{ width: "14rem", height: "12rem" }}>
          //   <Card.Img variant="top" src={product.image} />
          //   <Card.Body>
          //     <Card.Title>{product.title}</Card.Title>
          //     <Card.Text>{product.price}</Card.Text>
          //     <Button>ADD TO CART</Button>
          //   </Card.Body>
          // </Card>
          <Card style={{ width: "18rem", margin: 5 }}>
            <Card.Img className="img" variant="top" src={product.image} />

            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button>ADD TO CART</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
