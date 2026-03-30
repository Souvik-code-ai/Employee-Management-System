const Footer = () => {
  return (
<footer className="footer footer-center bg-base-200 text-base-content p-6">

  <nav className="flex flex-wrap justify-center gap-4 text-sm">
    <a className="cursor-pointer hover:underline underline-offset-2 transition-all">About</a>
    <a className="cursor-pointer hover:underline underline-offset-2 transition-all">Contact</a>
    <a className="cursor-pointer hover:underline underline-offset-2 transition-all">Jobs</a>
  </nav>

  <aside className="text-xs text-center">
    <p>&copy; {new Date().getFullYear()} Broadifi Technologies Pvt Ltd</p>
  </aside>

</footer>
  )
}

export default Footer
