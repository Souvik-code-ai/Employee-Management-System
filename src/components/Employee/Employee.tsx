// import { useState } from "react";
// import { CiEdit } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   openDeletePopup,
//   openEmployeePopup,
// } from "../../store/features/Popup/popup.slice";
// const Employee = () => {
//   const dispatch = useDispatch();
//   const employeeDetails=useSelector(s=>s.employee.employees);
//     const [editEmployee, setEditEmployee] = useState(null);
//   console.log(employeeDetails);
//   return (
//    <div className="sm:px-4 px-5">
//     <div className="pb-5 flex flex-row items-center justify-between">
//         <div>
//           <h2 className="text-lg sm:text-xl font-medium">Employee Summary:</h2>
//           <h4 className="text-sm">Most secure and reliable employee description platform.</h4>
//         </div>
//         <button
//           className="inline-flex items-center justify-center    font-semibold cursor-pointer transition-all duration-200   h-8 min-h-8 px-3 text-sm sm:h-8 sm:min-h-8 bg-blue-700 text-amber-50 rounded-full"
//           onClick={() => {
//           setEditEmployee(null);
//           dispatch(openEmployeePopup());
//         }}
//         >
//           <FaPlus className="h-2.5 w-2.5"/>
//           <span className="hidden sm:inline ml-1">Add</span>
//         </button>
//       </div>
//       <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {
//           employeeDetails.map((details)=>{
//             return  <EmployeeCard details={details} key={details.id} setEditEmployee={setEditEmployee}/>
//           })
//         }
       
       
//       </ul>
//    </div>
      
  
//   );
// };
// const EmployeeCard = ({details,setEditEmployee}) => {
//   const dispatch = useDispatch();
//   console.log(details)

//   return (
//     <li className="bg-base-200 rounded-xl p-4 shadow hover:shadow-lg transition">
//       <div className="flex items-start gap-4">
//         <img
//           className="w-14 h-14 rounded-full object-cover"
//           // src="https://img.daisyui.com/images/profile/demo/1@94.webp"
//           src={details.profileUrl}
//         />
//         <div className="flex-1">
//           <h2 className="font-semibold text-base sm:text-lg"> {details.name}</h2>
//           <p className="text-xs text-gray-500 uppercase">Remaining Reason</p>
//           <p className="text-sm mt-2 line-clamp-3">
//             {details.email}
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-end gap-2 mt-4">
//         <button
//           className="inline-flex items-center justify-center h-7 min-h-7 px-2  rounded-lg border border-base-400 bg-transparent hover:bg-base-200 transition-all"
//            onClick={() => {
//           setEditEmployee(details);
//           dispatch(openEmployeePopup());
//         }}
//         >
//           <CiEdit className="h-3 w-3"  />
//         </button>
//         <button
//           className="inline-flex items-center justify-center h-7 min-h-7 px-2 rounded-lg text-sm font-semibold bg-red-500 text-white hover:bg-red-600 cursor-pointer transition-all"
//           onClick={() => dispatch(openDeletePopup(details.id))}
//         >
//           <MdDeleteOutline />
//         </button>
//       </div>
//     </li>
//   );
// };

// export default Employee;
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/features/Popup/popup.slice";
import EmployeePopup from "../EmployeePopup/EmployeePopup"
import type { RootState } from "../../store/store";
type EmployeeType = {
  id: string;
  profileUrl: string;
  name: string;
  email: string;
  bio: string;
  highlight: boolean;
};

const Employee = () => {
  const dispatch = useDispatch();
  const employeeDetails = useSelector(
  (state: RootState) => state.employee.employees
);
  const [editEmployee, setEditEmployee] =
    useState<EmployeeType | null>(null);

  return (
    <div className="sm:px-4 px-5">
      <div className="pb-5 flex flex-row items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl font-medium">
            Employee Summary:
          </h2>
          <h4 className="text-sm">
            Most secure and reliable employee description platform.
          </h4>
        </div>

       
        <button
          className="inline-flex items-center justify-center    font-semibold cursor-pointer transition-all duration-200   h-8 min-h-8 px-3 text-sm sm:h-8 sm:min-h-8 bg-blue-700 text-amber-50 rounded-full"
          onClick={() => {
            setEditEmployee(null); // clear old edit data
            dispatch(openEmployeePopup());
          }}
        >
          <FaPlus className="h-2.5 w-2.5"/>
          <span className="hidden sm:inline ml-1">Add</span>
        </button>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {employeeDetails.map((details: EmployeeType) => (
          <EmployeeCard
            key={details.id}
            details={details}
            setEditEmployee={setEditEmployee}
          />
        ))}
      </ul>

      
      <EmployeePopup editEmployee={editEmployee} />
    </div>
  );
};

type CardProps = {
  details: EmployeeType;
  setEditEmployee: React.Dispatch<
    React.SetStateAction<EmployeeType | null>
  >;
};

const EmployeeCard = ({
  details,
  setEditEmployee,
}: CardProps) => {
  const dispatch = useDispatch();

  return (
    <li className="bg-base-200  p-4 shadow hover:shadow-lg transitionbg-base-200 rounded-xl  ">
      <div className="flex items-start gap-4">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={details.profileUrl}
        />

        <div className="flex-1">
          <h2 className="font-semibold text-base sm:text-lg">{details.name}</h2>
          <p className="text-sm mt-2 line-clamp-3">{details.email}</p>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        
        <button
          onClick={() => {
            setEditEmployee(details);
            dispatch(openEmployeePopup()); 
          }}
          className="inline-flex items-center justify-center h-7 min-h-7 px-2  rounded-lg border border-base-400 bg-transparent hover:bg-base-200 transition-all"
        >
          <CiEdit className="h-3 w-3"  />
        </button>

        <button
          onClick={() => dispatch(openDeletePopup(details.id))}
        className="inline-flex items-center justify-center h-7 min-h-7 px-2 rounded-lg text-sm font-semibold bg-red-500 text-white hover:bg-red-600 cursor-pointer transition-all">
          <MdDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default Employee;
