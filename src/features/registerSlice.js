import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    password: null,
    name: null,
    phone: null,
    isLoading: false,
    error: null,
};

const registerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setEmail, setPassword, setPhone, setLoading, setName, setError } = registerSlice.actions;

export default registerSlice.reducer;
