import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  employeePopup: boolean,
  deletePopup:boolean
}

const initialState: CounterState = {
  employeePopup: false,
  deletePopup:false
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openEmployeePopup:(state,action)=>{
        state.employeePopup=action.payload ?? true;
    },
    closeEmployeePopup:(state)=>{
      state.employeePopup=false;
    },
    openDeletePopup:(state,action)=>{
      console.log("delete")
      state.deletePopup= true;
    },
    closeDeletePopup:(state)=>{
      state.deletePopup=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { openEmployeePopup, closeEmployeePopup,openDeletePopup,closeDeletePopup } = popupSlice.actions

export default popupSlice.reducer