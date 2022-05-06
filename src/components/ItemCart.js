import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

function ItemCart(props) {
  const [isFavourite, setIsFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(props.rating));

  const handleClick = (value) => {
    setCurrentValue(value);
  };
    
   const dispatch = useDispatch();
   const addtocartfun =()=> {
     dispatch(cartAction.addtocart({
       name : props.name,
       id :props.itemId,
       price :props.price,
       img:props.img,
     }))
   }


  return (
    <div className="itemcard" id = {props.itemId}>
      <div className="imgbox">
        <img src={props.img} alt="" className="itemimg" />
      </div>
      <div className={`isfavourite  ${isFavourite ? "active " : ""}`}>
        <Favorite onClick={() => setIsFavorite(!isFavourite)} />
      </div>
      <div className="itemcontent">
        <h3 className="itemname">{props.name}</h3>
        <div className="bottom">
          <div className="rating">
            {Array.apply(null, { length: 5 }).map((element, index) => {
              return (
                <i
                  key={index}
                  className={`rating ${
                    currentValue > index ? "orange" : "gray"
                  }`}
                  onClick={() => handleClick(index + 1)}
                >
                 {/* {console.log(index)} */}
                  <StarRounded />
                </i>
              );
            })}
            <h3 className="price">
              {" "}
              <span>$</span> {props.price}
            </h3>
          </div>
          <i className="addtocart" onClick={addtocartfun}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
