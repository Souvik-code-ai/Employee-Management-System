import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../store/features/Popup/popup.slice";
import type { AppDispatch, RootState } from "../../store/store";
import { deleteEmployees } from "../../store/features/Employee/employee.thunk";

const DeletePopup = () => {
  const dispatch = useDispatch<AppDispatch>();

  const deletePopup = useSelector(
    (state: RootState) => state.popup.deletePopup
  );

  if (!deletePopup) return null;

  const handleDelete = async () => {

    if (!deletePopup) {
      return;
    }

    await dispatch(deleteEmployees(deletePopup));
    dispatch(closeDeletePopup());
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 px-4 py-6"
      onClick={() => dispatch(closeDeletePopup())}
    >
      <div
        className="w-full max-w-sm bg-base-100 rounded-2xl shadow-xl p-5 sm:p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-xl font-semibold text-error mb-2">
          Delete Employee
        </h2>

        <p className="text-sm text-gray-500 mb-5">
          Are you sure you want to delete this employee?
          This action cannot be undone.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button
            className="inline-flex items-center justify-center px-4 py-3 min-h-12 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-all flex-1 sm:flex-none"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>

          <button
            className="inline-flex items-center justify-center px-4 py-1 min-h-12 rounded-lg font-semibold border border-base-400 bg-transparent hover:bg-base-200 transition-all flex-1 sm:flex-none"
            onClick={() => dispatch(closeDeletePopup())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;