import { createSlice } from "@reduxjs/toolkit";

export const MyLoginSlice = createSlice({
  name: 'login',
  initialState: {
    loginDataForProfile: []
  },

  reducers: {
    MyStaffAddData: (state, action) => {
      console.log(action.payload, "mystaff payload...")
      state.myStaffData = action.payload
    },

    loginFetchDataForProfile: (state, action) => {
      // console.log(action.payload, " action.paluylod profile")
      state.loginData = action.payload
    },
    // here we are storing track teacher data in redux api endpoint track_teacher_management...
    trackTeacherData: (state, action) => {
      console.log(action.payload, " track teach data ")
      state.myTrack_teach_data = action.payload
    },

    loginFetchDataForProfile_token: (state, action) => {
      console.log(state.loginData.token, " token")
      state.loginData.token = action.payload
    },
    Registercheck: (state, action) => {
      state.isregister = action.payload
    },
    profileUpdate: (state, action) => {
      state.loginData.name = action.payload.resp.name
      state.loginData.company = action.payload.resp.company
      state.loginData.mobile = action.payload.resp.mobile
      state.loginData.image = action.payload.resp.image
      state.loginData.address = action.payload.resp.address

    },
    orderDetailsToView: (state, action) => {
      state.orderInfo = action.payload
    },
    ledgerBalcance: (state, action) => {
      state.ledgerBal = action.payload
    },
    outstandingRecievable: (state, action) => {
      state.outstanding = action.payload
    }
  }
})

export const { loginFetchDataForProfile, profileUpdate, orderDetailsToView, ledgerBalcance, outstandingRecievable, loginFetchDataForProfile_token, Registercheck, MyStaffAddData, trackTeacherData } = MyLoginSlice.actions
export default MyLoginSlice.reducer