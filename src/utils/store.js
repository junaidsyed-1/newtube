import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import videoReducer from './videoSlice';

const appStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        video: videoReducer,
    }
});

export default appStore;