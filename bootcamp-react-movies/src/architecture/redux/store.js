import { configureStore } from "@reduxjs/toolkit";
import { shiftSlice } from "./states/shifts/shift.state";

export const AppStore = configureStore({
    reducer: {
        shifts: shiftSlice.reducer,
    },
});
