import Layout from "../layouts/Layout";

const Footer = () => {
  return (
    <Layout>
      <footer className=" bg-base-200 text-base-content  flex min-[503px]:flex-row  min-[503px]:gap-0 gap-2 flex-col items-center justify-between min-[778px]:px-9 px-7 py-5">
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          <a className="cursor-pointer hover:underline underline-offset-2 transition-all">
            About
          </a>
          <a className="cursor-pointer hover:underline underline-offset-2 transition-all">
            Contact
          </a>
          <a className="cursor-pointer hover:underline underline-offset-2 transition-all">
            Jobs
          </a>
        </nav>

        <aside className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Broadifi Technologies Pvt Ltd</p>
        </aside>
      </footer>
    </Layout>
  );
};

export default Footer;
