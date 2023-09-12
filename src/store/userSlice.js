import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    status: 'idle'
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getList.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getList.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'idle';
            })
            .addCase(getList.rejected, (state, action) => {
                state.status = 'error';
            })
    }
})

export const { remove } = userSlice.actions;
export default userSlice.reducer;


//read
export const getList = createAsyncThunk('list/get', async () => {
    const data = await fetch('https://64fb1b2ecb9c00518f7aa6bb.mockapi.io/crud');
    const result = await data.json();
    return result
})


//add
export const createUser = createAsyncThunk('user/add', async (data) => {
    const response = await fetch("https://64fb1b2ecb9c00518f7aa6bb.mockapi.io/crud", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
})


// delete
export const deleteUser = createAsyncThunk('user/delete', async (id) => {
    const response = await fetch(`https://64fb1b2ecb9c00518f7aa6bb.mockapi.io/crud/${id}`, {
        method: 'DELETE'
    })
    const result = await response.json()
    return result
})


//edit
export const editUser = createAsyncThunk('user/edit', async (data) => {
    const response = await fetch(`https://64fb1b2ecb9c00518f7aa6bb.mockapi.io/crud/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result
})