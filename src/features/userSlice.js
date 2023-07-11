import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profileData: null,
    addressData: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setProfileData: (state, action) => {
            state.profileData = action.payload;
        },
        setAddressData: (state, action) => {
            state.addressData = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setProfileData, setError, setAddressData } = userSlice.actions;

export default userSlice.reducer;
