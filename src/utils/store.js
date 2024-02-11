import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import videoReducer from './videoSlice';
import chatReducer from './chatSlice';
import searchReducer from './searchSlice';
import themeReducer from './themeSlice';

const appStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        video: videoReducer,
        chat: chatReducer,
        search: searchReducer,
        theme: themeReducer,
    }
});

export default appStore;