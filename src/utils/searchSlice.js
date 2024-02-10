import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: null,
        cachedRes: {},
    },
    reducers: {
        addSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        addCachedResult: (state, action) => {
            const { query, result } = action.payload;
            state.cachedRes[query] = result;
        }
    }
});

export const { addSearchResult, addCachedResult } = searchSlice.actions;
export default searchSlice.reducer;