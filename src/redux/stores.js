import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlices";
import mapSlices from "./slices/mapSlices";

export const store = configureStore({
    reducer: {
        user: authSlice,
        map: mapSlices
    },
});