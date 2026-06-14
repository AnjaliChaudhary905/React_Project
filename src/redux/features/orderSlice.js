import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderItems: []
    },
    reducers: {
        add: (state, action) => {
            const order = state.orderItems.find((order) => order.id == action.payload.id,);

            if (order) {
                order.quantity += 1;
            }
            else {
                state.orderItems.push({ ...action.payload, quantity: 1 });
            }
        }
    }



})
export const { add } = orderSlice.actions;
export default orderSlice.reducer;