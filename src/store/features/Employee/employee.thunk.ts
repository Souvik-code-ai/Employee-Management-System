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