import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../config/axiosinstance";
export const getEmployees=createAsyncThunk(
    'employee/getEmployees',
    async (_,{rejectWithValue})=>{
        try{
           const response=await API.get('Employee');
           return response.data 
        }catch(error){
            console.log(error);
            return rejectWithValue('something went wrong');

        }

    }

)
export const postEmployees=createAsyncThunk(
    'employee/postEmployees',
    async (details,{rejectWithValue,dispatch})=>{
        try{
           const response=await API.post('Employee',details);
           dispatch(getEmployees());

           return response.data 
        }catch(error){
            console.log(error);
            return rejectWithValue('something went wrong');

        }

    }

)
export const deleteEmployees=createAsyncThunk(
    'employee/deleteEmployees',
    async (id,{rejectWithValue,dispatch})=>{
        try{
           const response=await API.delete(`Employee/${id}`);
           dispatch(getEmployees());

           return response.data 
        }catch(error){
            console.log(error);
            return rejectWithValue('something went wrong');

        }

    }

)
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, data }, { rejectWithValue, dispatch }) => {
    try {
      const response = await API.put(`Employee/${id}`, data);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("something went wrong");
    }
  }
);