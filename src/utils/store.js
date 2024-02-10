import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import videoReducer from './videoSlice';
import chatReducer from './chatSlice';
import searchReducer from './searchSlice';

const appStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        video: videoReducer,
        chat: chatReducer,
        search: searchReducer,
    }
});

export default appStore;