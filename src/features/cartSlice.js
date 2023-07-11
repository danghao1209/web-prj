import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import _ from 'lodash';

const initialState = {
    cart: null,
    proInCart: null,
    totalPrice: null,
    isLoading: false,
    error: null,
};

const changeQuantity = createAsyncThunk('cart/changeQuantity', async ({ id, quantity, tokenACCESS }) => {
    try {
        const response = await axios.put(
            'http://localhost:1209/api/cart',
            { data: { id, quantity } },
            {
                headers: {
                    Authorization: tokenACCESS,
                },
            },
        );
        return response.data.data;
    } catch (error) {
        try {
            const newTokenAccess = await GetNewAccessToken();
            const response = await axios.put(
                'http://localhost:1209/api/cart',
                { data: { id, quantity } },
                {
                    headers: {
                        Authorization: newTokenAccess,
                    },
                },
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error);
        }
    }
});

const deleteProduct = createAsyncThunk('cart/deleteProduct', async ({ id, tokenACCESS }) => {
    try {
        const response = await axios.post(
            'http://localhost:1209/api/cart/delete',
            { data: { id } },
            {
                headers: {
                    Authorization: tokenACCESS,
                },
            },
        );
        return response.data.data;
    } catch (error) {
        try {
            const newTokenAccess = await GetNewAccessToken();
            const response = await axios.post(
                'http://localhost:1209/api/cart/delete',
                { id },
                {
                    headers: {
                        Authorization: newTokenAccess,
                    },
                },
            );
            return response.data.data;
        } catch (error) {
            throw new Error(error);
        }
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(changeQuantity.pending, (state) => {
                state.error = null;
            })
            .addCase(changeQuantity.fulfilled, (state, action) => {
                const updatedCarts = _.cloneDeep(state.cart.carts); // Tạo bản sao sâu của mảng carts
                const foundItem = _.find(updatedCarts, { _id: action.payload._id }); // Tìm phần tử cần thay đổi trong bản sao mảng carts
                foundItem.quantity = action.payload.quantity; // Cập nhật thuộc tính quantity trong bản sao phần tử tìm thấy
                state.cart.carts = updatedCarts; // Gán bản sao mảng đã được cập nhật vào state
            })
            .addCase(changeQuantity.rejected, (state) => {
                state.error = 'Lỗi khi thay đổi số lượng sản phẩm';
            })
            .addCase(deleteProduct.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                _.remove(state.cart.carts, (item) => item._id === action.payload);
                state.cart.totalQuanlity -= 1;
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.error = 'Lỗi khi xoá sản phẩm';
            });
    },
});

export const { setLoading, setCart, setError, setTotalPrice, setDataProInCart } = cartSlice.actions;

export { changeQuantity, deleteProduct };

export default cartSlice.reducer;
