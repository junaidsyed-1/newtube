import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import videoReducer from './videoSlice';
import chatReducer from './chatSlice';

const appStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        video: videoReducer,
        chat: chatReducer
    }
});

export default appStore;