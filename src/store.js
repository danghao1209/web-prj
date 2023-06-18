import { configureStore } from '@reduxjs/toolkit';
import userReducer from '~/features/userSlice';
import productsAllSlice from '~/features/productsAllSlice';
import productSlice from '~/features/productSlice';
import registerSlice from '~/features/registerSlice';
import cartSlice from '~/features/cartSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        productsAll: productsAllSlice,
        product: productSlice,
        register: registerSlice,
        cart: cartSlice,
    },
});

export default store;
