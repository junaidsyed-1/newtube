import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        popularVideos: null,
    },
    reducers: {
        getPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        },
    }
});

export const { getPopularVideos } = videoSlice.actions;
export default videoSlice.reducer;