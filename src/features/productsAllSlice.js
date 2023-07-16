import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataProAll: { products: [] },
    isLoading: false,
};

const productsAllSlice = createSlice({
    name: 'productAll',
    initialState,
    reducers: {
        setDataPro(state, action) {
            state.dataProAll.products = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setDataPro, setLoading } = productsAllSlice.actions;

export default productsAllSlice.reducer;
