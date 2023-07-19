import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GetNewAccessToken from '~/func/GetNewAccessToken';
import _ from 'lodash';
import { error } from '~/components/Toast';
import { pathApi } from '~/asset/path';

const initialState = {
    cart: null,
    proInCart: null,
    priceCart: null,
    isLoading: false,
    errorcart: null,
};

const changeQuantity = createAsyncThunk('cart/changeQuantity', async ({ id, quantity, tokenACCESS }) => {
    try {
        const response = await axios.patch(
            `${pathApi}/cart`,
            { data: { id, quantity } },
            {
                headers: {
                    Authorization: tokenACCESS,
                },
            },
        );

        return response.data.data;
    } catch (errorr) {
        if (errorr.message === 'Request failed with status code 400') {
            error('Không đủ số lượng sản phẩm vui lòng sửa lại số lượng');
        }
        try {
            const newTokenAccess = await GetNewAccessToken();
            const response = await axios.patch(
                `${pathApi}/cart`,
                { data: { id, quantity } },
                {
                    headers: {
                        Authorization: newTokenAccess,
                    },
                },
            );
            return response.data.data;
        } catch (err) {
            throw new Error(err);
        }
    }
});

const deleteProduct = createAsyncThunk('cart/deleteProduct', async ({ id, tokenACCESS }) => {
    try {
        const response = await axios.post(
            `${pathApi}/cart/delete`,
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
                `${pathApi}/cart/delete`,
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
        setPriceCart: (state, action) => {
            state.priceCart = action.payload;
        },
        setError: (state, action) => {
            state.errorCart = action.payload;
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
            .addCase(changeQuantity.rejected, (state, action) => {
                state.errorcart = action.error.message;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                _.remove(state.cart.carts, (item) => item._id === action.payload);
                state.cart.totalQuanlity -= 1;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.errorcart = action.error.message;
            });
    },
});

export const { setLoading, setCart, setError, setPriceCart, setDataProInCart } = cartSlice.actions;

export { changeQuantity, deleteProduct };

export default cartSlice.reducer;
