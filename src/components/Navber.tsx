// components/Navbar.tsx
export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center mix-blend-difference">
      <div className="text-white font-bold text-2xl">LOGO</div>
      <ul className="flex gap-8 text-white">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
      </ul>
    </nav>
  )
}