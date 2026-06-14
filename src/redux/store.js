import { configureStore } from '@reduxjs/toolkit'
import OrderReducer from  '../redux/features/orderSlice'
export const store = configureStore({
  reducer: {
    order: OrderReducer,
  },
})