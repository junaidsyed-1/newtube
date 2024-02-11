import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: true,
    },
    reducers: {
        addToggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        }
    }
});

export const { addToggleTheme } = themeSlice.actions;
export default themeSlice.reducer;