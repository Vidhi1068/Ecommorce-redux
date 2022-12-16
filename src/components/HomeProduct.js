import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomeProduct.css";
import { Card, Button } from "react-bootstrap";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

export default function HomeProduct() {
  const [Allproducts, setAllproducts] = useState([]);
  const [showTitle, setShowTitle] = useState(false);

  const dispatch = useDispatch();

  const Getdata = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setAllproducts(response.data);
    });
  };

  useEffect(() => {
    Getdata();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    //product means payload which is dispatched
    //now we have to store our product into store.js
    //flow:---1)we dispatch action with productdata
    //2)action calls the reducer and send data to reducer
    //3)reducer update the state
  };

  const showFulltitle = () => {
   
    setShowTitle((prev) => !prev);

  };
  return (
    <>
      <div className="container">
        {Allproducts.map((product) => (
          <Card style={{ margin: 5 }}>
            <Card.Img className="img" variant="top" src={product.image} />

            <Card.Body>
              <Card.Title
                className={`${showTitle ? "show" : "card-title"}  mb-2`}
                onClick={() => showFulltitle()}
              >
                {product.title}
              </Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button onClick={() => handleAdd(product)}>ADD TO CART</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
// width: "13rem", width: "13rem",
