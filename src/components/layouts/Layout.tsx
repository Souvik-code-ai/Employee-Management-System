

const Layout = ({ children }:{children:any}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default Layout;