import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Employee from "./components/Employee/Employee";
import EmployeePopup from "./components/EmployeePopup/EmployeePopup";
import DeletePopup from "./components/deletePopup/deletePopup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/features/Employee/employee.thunk";
import type { AppDispatch } from "./store/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (

    <div className="min-h-screen w-full flex flex-col bg-base-100">
      <Navbar />
      <EmployeePopup />
      <DeletePopup />
      <div className="flex-1 py-6 px-4 sm:px-6 md:px-10">
        <Employee />
      </div>
      <Footer />
    </div>
  );
}

export default App;
