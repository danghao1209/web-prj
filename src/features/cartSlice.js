import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: null,
    isLoading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setCart, setError } = cartSlice.actions;

export default cartSlice.reducer;
