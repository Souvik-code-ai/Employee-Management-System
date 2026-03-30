import { useSelector, useDispatch } from "react-redux";
import { closeEmployeePopup } from "../../store/features/Popup/popup.slice";
const EmployeePopup = () => {
  const popup = useSelector((state) => state.popup.employeePopup);

  const dispatch = useDispatch();
  console.log(popup);
  if (popup === false) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 px-4 py-6 overflow-y-auto"
      onClick={() => dispatch(closeEmployeePopup())}
    >
      <div
        className="bg-base-100 w-full max-w-lg rounded-2xl shadow-xl p-5 sm:p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 btn btn-sm btn-circle btn-ghost"
          onClick={() => dispatch(closeEmployeePopup())}
        >
          
        </button>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Employee Details
        </h2>
        <div className="flex flex-col gap-3">
          <div>
            <label className="flex items-center justify-between px-1 py-2  font-medium text-sm">Profile URL</label>
            <input
              type="text"
              className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label className="flex items-center justify-between px-1 py-2 font-medium text-sm">Name</label>
            <input
              type="text"
              className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="flex items-center justify-between px-1 py-2 text-sm font-medium ">Email</label>
            <input
              type="email"
              className="flex items-center h-12 px-4 rounded-lg text-sm  border border-base-300 focus:ring focus:ring-primary focus:outline-none  w-full"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="flex items-center justify-between px-1 py-2 text-sm font-medium">Bio</label>
            <textarea
              className="block w-full px-4 py-3 rounded-lg text-sm border border-base-300 focus:ring focus:ring-primary focus:outline-none textarea-bordered  h-24 resize-none"
              placeholder="Write something..."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold cursor-pointer transition-all min-h-12 bg-blue-700 text-amber-50 flex-1">
              Submit
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold cursor-pointer transition-all min-h-12 border flex-1"
              onClick={() => dispatch(closeEmployeePopup())}
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
