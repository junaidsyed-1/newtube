import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        comments: [],
    },
    reducers: {
        addComment: (state, action) => {
            state.comments.unshift(action.payload);
            state.comments.splice(25, 1);
        }
    }
});

export const { addComment } = chatSlice.actions;
export default chatSlice.reducer;