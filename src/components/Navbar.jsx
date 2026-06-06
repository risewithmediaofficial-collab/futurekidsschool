import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "group relative overflow-hidden rounded-full px-4 py-2 text-sm font-bold transition-all duration-300",
      "before:absolute before:inset-0 before:rounded-full before:bg-[#d91f26] before:transition-transform before:duration-300 before:content-['']",
      isActive
        ? "text-white shadow-[0_10px_24px_rgba(217,31,38,0.24)] before:scale-100"
        : "text-black before:scale-x-0 before:origin-left hover:text-white hover:before:scale-x-100 hover:shadow-[0_10px_24px_rgba(217,31,38,0.18)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur">
      <div className="page-shell flex items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
            <SchoolIcon fontSize="medium" />
          </div>
          <div>
            <p className="font-display text-[1.85rem] font-bold leading-none text-black">
              Future Kids
            </p>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d91f26]">
              School
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              <span className="relative z-10">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 text-black transition hover:border-[#d91f26] hover:text-[#d91f26] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="page-shell pb-4 md:hidden">
          <div className="section-card p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
