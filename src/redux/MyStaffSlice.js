import { createSlice } from "@reduxjs/toolkit";

export const MyStaffSlice = createSlice({
    name: 'myStaff',
    initialState: {
        // MyStaffReduceres: []
    },

    reducers: {
        MyStaffAddData: (state, action) => {
            console.log(action.payload, "mystaff payload... for myslice")
            state.myStaffData = action.payload
        },
    }
});

export const { MyStaffAddData } = MyStaffSlice.actions
export default MyStaffSlice.reducer