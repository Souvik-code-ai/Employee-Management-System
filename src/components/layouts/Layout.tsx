import type { ReactNode } from "react";
type LayoutProps= {
  children: ReactNode;
}
const Layout = ({ children }:LayoutProps) => {
  return (
    <div className="w-full  mx-auto px-0.5 sm:px-2 md:px-4 lg:px-4">
      {children}
    </div>
  );
};

export default Layout;