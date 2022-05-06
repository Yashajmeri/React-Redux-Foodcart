import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState: {
    cart: [],
    totalQty: 0,
    checkoutPrice:0,
  },
  reducers: {
    addtocart(state, action) {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.id === newItem.id);
      state.totalQty++;
      if (!existItem) {
        state.cart.push({
          id: newItem.id, ///  we have to set just id not itemId
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img:newItem.img
        });
        state.checkoutPrice = state.checkoutPrice +newItem.price;
      } else {
        existItem.qty++;
        existItem.totalPrice = existItem.totalPrice + newItem.price;
        state.checkoutPrice = state.checkoutPrice +newItem.price;
      }
    },
    renovetocart(state,action) {
        
        const id = action.payload;
        const existItem =  state.cart.find((item) => item.id === id);
        state.totalQty--;
        if (existItem.qty === 1){
            state.cart = state.cart.filter((item)=>item.id !==id);
            state.checkoutPrice = state.checkoutPrice -existItem.price;
        }else {
            existItem.qty--;
            existItem.totalPrice = existItem.totalPrice - existItem.price;
            state.checkoutPrice = state.checkoutPrice -existItem.price;
        }
    },
  },
});

export const cartAction = cartSlice.actions
export default cartSlice;