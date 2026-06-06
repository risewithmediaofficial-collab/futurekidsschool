import SchoolIcon from "@mui/icons-material/School";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-black/8 bg-black text-white">
      <div className="page-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                <SchoolIcon />
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold">Future Kids School</p>
                <p className="text-sm text-white/70">Bright beginnings for growing minds</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
              A modern early-learning school experience built around safety,
              structure, creativity, and care for every child.
            </p>
          </div>

          <div>
            <p className="font-display text-xl font-extrabold">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-white/75">
              <NavLink to="/" className="transition hover:text-white">
                Home
              </NavLink>
              <NavLink to="/about" className="transition hover:text-white">
                About
              </NavLink>
              <NavLink to="/contact" className="transition hover:text-white">
                Contact
              </NavLink>
            </div>
          </div>

          <div>
            <p className="font-display text-xl font-extrabold">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 text-[#ff4a4a]" fontSize="small" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-start gap-3">
                <EmailIcon className="mt-0.5 text-[#ff4a4a]" fontSize="small" />
                <span>info@futurekidsschool.com</span>
              </p>
              <p className="flex items-start gap-3">
                <LocationOnIcon className="mt-0.5 text-[#ff4a4a]" fontSize="small" />
                <span>School address will be added later</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/55">
          Copyright {new Date().getFullYear()} Future Kids School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
