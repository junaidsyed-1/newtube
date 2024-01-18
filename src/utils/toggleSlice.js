import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggle: true,
    },
    reducers: {
        handleToggle: (state) => {
            state.toggle = !state.toggle;
        },
    }
});

export const { handleToggle } = toggleSlice.actions;
export default toggleSlice.reducer;