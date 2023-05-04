import { createSlice } from "@reduxjs/toolkit";

export const MyLoginSlice = createSlice({
  name: 'login',
  initialState: {
    loginDataForProfile: []
  },

  reducers: {
    loginFetchDataForProfile: (state, action) => {
      state.loginData = action.payload
    },
    loginFetchDataForProfile_token: (state, action) => {
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

export const { loginFetchDataForProfile, profileUpdate, orderDetailsToView, ledgerBalcance, outstandingRecievable, loginFetchDataForProfile_token, Registercheck } = MyLoginSlice.actions
export default MyLoginSlice.reducer