import Layout from "../layouts/Layout";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch} from "react-redux";
import { openDeletePopup, openEmployeePopup } from "../../store/features/Popup/popup.slice";
const Employee = () => {

  return (
    <Layout>
     <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
      </ul>
    </Layout>
  );
};
const EmployeeCard = () => {
  const dispatch = useDispatch();

  return (
    <li className="bg-base-200 rounded-xl p-4 shadow hover:shadow-lg transition">

      <div className="flex items-start gap-4">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-base sm:text-lg">Dio Lupa</h2>
          <p className="text-xs text-gray-500 uppercase">
            Remaining Reason
          </p>
          <p className="text-sm mt-2 line-clamp-3">
            "Remaining Reason" became an instant hit with emotional depth.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="inline-flex items-center justify-center h-8 w-9  rounded-lg border border-base-400 bg-transparent hover:bg-base-200 transition-all"
          onClick={() => dispatch(openEmployeePopup())}>
          <CiEdit className="text-lg" />
        </button>
        <button
  className="inline-flex items-center justify-center h-8 min-h-8 px-3 rounded-lg text-sm font-semibold bg-red-500 text-white hover:bg-red-600 cursor-pointer transition-all"
  onClick={() => dispatch(openDeletePopup())}
>
  <MdDeleteOutline />
</button>

      </div>

    </li>
  );
};

export default Employee;
