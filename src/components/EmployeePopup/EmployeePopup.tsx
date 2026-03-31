// import { useSelector, useDispatch } from "react-redux";
// import { closeEmployeePopup } from "../../store/features/Popup/popup.slice";
// import type { RootState } from "../../store/store";
// import type { AppDispatch } from "../../store/store";
// import { useEffect, useState } from "react";
// import { postEmployees,updateEmployee } from "../../store/features/Employee/employee.thunk";
// type Employee = {
//   id: string;
//   profileUrl: string;
//   name: string;
//   email: string;
//   bio: string;
//   highlight: boolean;
// };

// type Props = {
//   editEmployee: Employee | null;
// };
// const EmployeePopup = ({editEmployee}:Props) => {
//   const popup = useSelector((state:RootState) => state.popup.employeePopup);
//   console.log(popup)
//   const [formDetails,setFormDetails]=useState({
//     profileUrl:'',
//     name:'',
//     email:'',
//     bio:'',
//     highlight:false
//   })
//   const dispatch = useDispatch<AppDispatch>();
//   console.log(popup);
//   if (popup === false) {
//     return null;
//   }

//   const handleInputChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
//     console.log(e);
//     const {name,value}=e.target;
//   setFormDetails((prev) => ({
//   ...prev,
//   [name]: value
// }));
//   }
//   console.log(formDetails)
// const handleSubmit = async () => {
//   if (editEmployee?.id) {
//     await dispatch(
//       updateEmployee({
//         id: editEmployee.id,
//         data: formDetails
//       })
//     );
//   } else {
//     await dispatch(postEmployees(formDetails));
//   }

//   setFormDetails({
//     profileUrl: "",
//     name: "",
//     email: "",
//     bio: "",
//     highlight: false
//   });

//   dispatch(closeEmployeePopup());
// };
// useEffect(() => {
//   if (editEmployee) {
//     setFormDetails({
//       profileUrl: editEmployee.profileUrl,
//       name: editEmployee.name,
//       email: editEmployee.email,
//       bio: editEmployee.bio,
//       highlight: editEmployee.highlight
//     });
//   } else {
//     setFormDetails({
//       profileUrl: "",
//       name: "",
//       email: "",
//       bio: "",
//       highlight: false
//     });
//   }
// }, [editEmployee]);
//   return (
//     <div
//       className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 px-4 py-6 overflow-y-auto"
//       onClick={() => dispatch(closeEmployeePopup())}
//     >
//       <div
//         className="bg-base-100 w-full max-w-lg rounded-2xl shadow-xl p-5 sm:p-6 relative animate-fadeIn"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* <button
//           className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost"
//           onClick={() => dispatch(closeEmployeePopup())}
//         >
          
//         </button> */}
//         <h2 className="text-lg sm:text-xl font-semibold mb-4">
//           Employee Details
//         </h2>
//         <div className="flex flex-col gap-3">
//           <div>
//             <label className="flex items-center justify-between px-1 py-2  font-medium text-sm">Profile URL</label>
//             <input
//               type="text"
//               className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
//               placeholder="Enter image URL"
//               name="profileUrl"
//               onChange={handleInputChange}
//               value={formDetails.profileUrl}
//             />
//           </div>
//           <div>
//             <label className="flex items-center justify-between px-1 py-2 font-medium text-sm">Name</label>
//             <input
//               type="text"
//               className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
//               placeholder="Enter name"
//               name="name"
//               onChange={handleInputChange}
//               value={formDetails.name}
//             />
//           </div>
//           <div>
//             <label className="flex items-center justify-between px-1 py-2 text-sm font-medium ">Email</label>
//             <input
//               type="email"
//               className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
//               placeholder="Enter email" 
//               name="email"
//               onChange={handleInputChange}
//               value={formDetails.email}
//             />
//           </div>
//           <div>
//             <label className="flex items-center justify-between px-1 py-2 text-sm font-medium">Bio</label>
//             <textarea
//               className="block w-full px-4 py-3 rounded-lg text-sm border border-base-300 focus:ring focus:ring-primary focus:outline-none textarea-bordered  h-24 resize-none"
//               placeholder="Write something..."
//               name="bio"
//               onChange={handleInputChange}
//               value={formDetails.bio}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-2 mt-4">
//             <button className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold cursor-pointer transition-all min-h-12 bg-blue-700 text-amber-50 flex-1" onClick={handleSubmit}>
//               Submit
//             </button>
//             <button
//               className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold cursor-pointer transition-all min-h-12 border flex-1"
//               onClick={() => dispatch(closeEmployeePopup())}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeePopup;


import { useSelector, useDispatch } from "react-redux";
import { closeEmployeePopup } from "../../store/features/Popup/popup.slice";
import type { RootState, AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import {
  postEmployees,
  updateEmployee
} from "../../store/features/Employee/employee.thunk";

type Employee = {
  id: string;
  profileUrl: string;
  name: string;
  email: string;
  bio: string;
  highlight: boolean;
};

type Props = {
  editEmployee: Employee | null;
};

const EmployeePopup = ({ editEmployee }: Props) => {
  const popup = useSelector(
    (state: RootState) => state.popup.employeePopup
  );

  const dispatch = useDispatch<AppDispatch>();

  const defaultForm = {
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false
  };

  const [formDetails, setFormDetails] = useState(defaultForm);

  // ✅ Prefill form for edit / reset for add
  useEffect(() => {
    if (editEmployee) {
      setFormDetails({
        profileUrl: editEmployee.profileUrl,
        name: editEmployee.name,
        email: editEmployee.email,
        bio: editEmployee.bio,
        highlight: editEmployee.highlight
      });
    } else {
      setFormDetails(defaultForm);
    }
  }, [editEmployee]);

  // ✅ Close handler (reset + close)
  const handleClose = () => {
    setFormDetails(defaultForm);
    dispatch(closeEmployeePopup());
  };

  // ✅ Controlled input handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Submit (POST / PUT)
  const handleSubmit = async () => {
    if (editEmployee?.id) {
      await dispatch(
        updateEmployee({
          id: editEmployee.id,
          data: formDetails
        })
      );
    } else {
      await dispatch(postEmployees(formDetails));
    }

    handleClose();
  };

  // ✅ Don't render if popup closed
  if (!popup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 px-4 py-6 overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="bg-base-100 w-full max-w-lg rounded-2xl shadow-xl p-5 sm:p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          {editEmployee ? "Edit Employee" : "Add Employee"}
        </h2>

        <div className="flex flex-col gap-3">
          {/* Profile URL */}
          <div>
            <label className="text-sm font-medium">Profile URL</label>
            <input
              type="text"
              name="profileUrl"
              placeholder="Enter image URL"
              value={formDetails.profileUrl}
              onChange={handleInputChange}
              className="w-full h-12 px-4 rounded-lg border border-base-300 focus:ring focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formDetails.name}
              onChange={handleInputChange}
              className="w-full h-12 px-4 rounded-lg border border-base-300 focus:ring focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formDetails.email}
              onChange={handleInputChange}
              className="w-full h-12 px-4 rounded-lg border border-base-300 focus:ring focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              placeholder="Write something..."
              value={formDetails.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-base-300 focus:ring focus:ring-primary focus:outline-none h-24 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-700 text-white px-4 py-3 rounded-lg flex-1"
            >
              {editEmployee ? "Update" : "Submit"}
            </button>

            <button
              onClick={handleClose}
              className="border px-4 py-3 rounded-lg flex-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePopup;