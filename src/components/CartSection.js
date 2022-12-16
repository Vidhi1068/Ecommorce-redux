import React from "react";
import "./CartSection.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
/*we use useSelector for getting updated data of state from store
1) collect data from cart and useselector give us updated data  ..for getting counter :add to cart data*/

export default function CartSection() {
  const AddedItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (AddItemsId) => {
    dispatch(remove(AddItemsId));
  };

  return (
    <>
      <div className="container">
        {AddedItems.map((AddItems) => (
          <div className="AddedItems">
            <img src={AddItems.image} alt="CART-ITEM" className="cartimg" />
            <h5 className="carttitle">{AddItems.title}</h5>
            <h5 className="cartprice">{AddItems.price}</h5>
            <button
              className="buttonforcart"
              onClick={() => handleRemove(AddItems.id)}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
