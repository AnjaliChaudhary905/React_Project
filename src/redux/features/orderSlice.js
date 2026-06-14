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
        },

        sub: (state, action) => {
            const order = state.orderItems.find((order) => order.id == action.payload.id);

            if (order) {
                if (order.quantity > 1) {

                    order.quantity -= 1;
                } else {

                    state.orderItems = state.orderItems.filter((item) => item.id !== action.payload.id);
                }
            }
        },
        removeItem: (state, action) => {

            state.orderItems = state.orderItems.filter((item) => item.id !== action.payload.id);
        }
    }



})
export const { add, sub, removeItem } = orderSlice.actions;
export default orderSlice.reducer;