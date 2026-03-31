import Layout from "../layouts/Layout";

// import { openEmployeePopup } from "../../store/features/Popup/popup.slice";
const Navbar = () => {
 
  return (
    <div className="bg-base-200 sticky top-0 z-10 shadow-sm">
      <Layout>
        <div className="flex items-center w-full min-h-16 px-8 sm:px-10">
          <div className="flex items-center justify-start w-1/2">
            <h1 className="text-xl sm:text-2xl font-bold">PeopleDesk..</h1>
          </div>

          <div className="flex items-center justify-end w-1/2 gap-2">
      
            <button className="inline-flex items-center justify-center px-4 py-3 cursor-pointer  font-semibold transition-all duration-200 bg-transparent border-transparent text-inherit shadow-none rounded-full w-9 h-9 p-0 hover:bg-base-300 hover:border-2 hover:border-base-300">
              ❤️
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
