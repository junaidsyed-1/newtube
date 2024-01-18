import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggle: true,
    },
    reducers: {
        handleMenuToggle: (state) => {
            state.toggle = !state.toggle;
        },
        closeMenuToggle: (state) => {
            state.toggle = false;
        }
    }
});

export const { handleMenuToggle, closeMenuToggle } = toggleSlice.actions;
export default toggleSlice.reducer;