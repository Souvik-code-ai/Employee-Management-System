import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./employee.thunk";
interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}
interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });

    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  }
});

export default employeeSlice.reducer;