import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
// import updateSlice from "./updateSlice";

const store = configureStore({
    reducer : {
        users : userSlice,
        // update : updateSlice
    }
})

export default store;