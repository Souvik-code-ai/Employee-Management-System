import Layout from "../layouts/Layout";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../store/features/Popup/popup.slice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-base-200 sticky top-0 z-10 shadow-sm">
      <Layout>
        <div className="flex items-center w-full min-h-16 px-2 sm:px-4">
          <div className="flex items-center justify-start w-1/2">
            <h1 className="text-lg sm:text-xl font-bold">Employees</h1>
          </div>

          <div className="flex items-center justify-end w-1/2 gap-2">
            <button
              className="inline-flex items-center justify-center  py-3  font-semibold cursor-pointer transition-all duration-200   h-8 min-h-8 px-4 text-sm sm:h-12 sm:min-h-12 bg-blue-700 text-amber-50 rounded-full"
              onClick={() => dispatch(openEmployeePopup())}
            >
              <FaPlus />
              <span className="hidden sm:inline ml-1">Add</span>
            </button>

            <button className="inline-flex items-center justify-center px-4 py-3 cursor-pointer  font-semibold transition-all duration-200 bg-transparent border-transparent text-inherit shadow-none rounded-full w-11 h-11 p-0 hover:bg-base-300 hover:border-2 hover:border-base-300">
              ❤️
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
