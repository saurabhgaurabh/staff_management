import { createSlice } from "@reduxjs/toolkit";

export const MyLoginSlice = createSlice({
  name: 'login',
  initialState: {
    loginDataForProfile: []
  },

  reducers: {
    loginFetchDataForProfile: (state, action) => {
      console.log(action.payload," action.paluylod profile")
      state.loginData = action.payload
      // console.log(state.loginData," action data")
    },
    loginFetchDataForProfile_token: (state, action) => {
      console.log(state.loginData.token," token")
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