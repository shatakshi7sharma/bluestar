import { createSlice } from "@reduxjs/toolkit";
import { setter } from "../../../utils/StorageUtil";

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            setter("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        sign_Out: (state, action) => {
            localStorage.clear();
            state.user = null;
        },
        clearAuth: (state) => {
            state.user = null;
        },
    }
});

export const {
    setUser,
    sign_Out,
    clearAuth
} = authSlice.actions;

export default authSlice.reducer;
