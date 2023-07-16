import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pathApi } from '~/asset/path';

const initialState = {
    productData: null,
    indexColor: 0,
    size: null,
    isLoading: false,
    error: null,
};
export const fetchDataAddCart = createAsyncThunk('product/fetchDataAddCart', async (tokenACCESS, thunkAPI) => {
    const state = thunkAPI.getState();
    const { productData, size, indexColor } = state.product;

    try {
        const response = await axios.post(
            `${pathApi}/cart`,
            {
                id: productData._id,
                data: { size, color: indexColor },
            },
            {
                headers: {
                    Authorization: tokenACCESS,
                },
            },
        );
        return response.data; // Trả về dữ liệu từ response nếu cần thiết
    } catch (error) {
        console.log('abc');
        throw new Error(error); // Ném ra error nếu có lỗi
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setProductData: (state, action) => {
            state.productData = action.payload;
        },
        setIndexColor: (state, action) => {
            state.indexColor = action.payload;
        },
        setSize: (state, action) => {
            state.size = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        extraReducers: (builder) => {
            builder.addCase(fetchDataAddCart.pending, (state) => {
                // Xử lý trạng thái khi đang loading
                state.isLoading = true;
                state.error = null;
            });
            builder.addCase(fetchDataAddCart.fulfilled, (state, action) => {
                // Xử lý khi thành công
                state.isLoading = false;
                // Cập nhật dữ liệu nếu cần thiết
            });
            builder.addCase(fetchDataAddCart.rejected, (state, action) => {
                // Xử lý khi bị lỗi
                state.isLoading = false;
                state.error = action.error.message;
            });
        },
    },
});

export const { setLoading, setProductData, setIndexColor, setSize, setError } = productSlice.actions;

export default productSlice.reducer;
