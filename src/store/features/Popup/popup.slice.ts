import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  employeePopup: boolean,
  deletePopup:string|null
}

const initialState: CounterState = {
  employeePopup: false,
  deletePopup:null
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openEmployeePopup:(state)=>{
        state.employeePopup= true;
    },
    closeEmployeePopup:(state)=>{
      state.employeePopup=false;
    },
    openDeletePopup:(state,action)=>{
      console.log("delete")
      state.deletePopup= action.payload;
    },
    closeDeletePopup:(state)=>{
      state.deletePopup=null;
    }
  },
})

export const { openEmployeePopup, closeEmployeePopup,openDeletePopup,closeDeletePopup } = popupSlice.actions

export default popupSlice.reducer