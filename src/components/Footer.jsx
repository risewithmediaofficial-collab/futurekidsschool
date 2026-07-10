import SchoolIcon from "@mui/icons-material/School";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#100d2e] text-white">
      <div className="page-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Future Kids Kindergarten Logo" className="h-12 w-12 shrink-0 rounded-2xl object-cover" />
              <div>
                <p className="font-display text-xl font-extrabold leading-tight">Future Kids Kindergarten School</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ef5b3f]">
                  A Unit of Future School (CBSE) – Solur
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Where Little Minds Blossom into Bright Futures! Offering Pre-KG, Jr. KG, and Sr. KG programs with activity-based learning, caring teachers, and a safe, creative environment.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#ef5b3f]">Admissions Open for 2026 – 27 · Early Bird Discount Available</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-xl font-extrabold">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-white/70">
              <NavLink to="/" className="transition hover:text-white">Home</NavLink>
              <NavLink to="/about" className="transition hover:text-white">About Us</NavLink>
              <NavLink to="/contact" className="transition hover:text-white">Programs</NavLink>
              <NavLink to="/contact" className="transition hover:text-white">Admissions</NavLink>
              <NavLink to="/contact" className="transition hover:text-white">Contact Us</NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-xl font-extrabold">Contact Us</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a href="tel:+919962826466" className="flex items-start gap-3 transition hover:text-white">
                <PhoneIcon className="mt-0.5 text-[#ef5b3f]" fontSize="small" />
                <span>+91 99628 26466</span>
              </a>
              <a href="tel:+918778091408" className="flex items-start gap-3 transition hover:text-white">
                <PhoneIcon className="mt-0.5 text-[#ef5b3f]" fontSize="small" />
                <span>+91 87780 91408</span>
              </a>
              <a href="tel:+919486490063" className="flex items-start gap-3 transition hover:text-white">
                <PhoneIcon className="mt-0.5 text-[#ef5b3f]" fontSize="small" />
                <span>+91 94864 90063</span>
              </a>
              <p className="flex items-start gap-3">
                <LocationOnIcon className="mt-0.5 shrink-0 text-[#ef5b3f]" fontSize="small" />
                <span>No. 7, Bye Pass Road, Ananth Nagar, Near Amirdham Hotel, Ambur.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/45">
          © {new Date().getFullYear()} Future Kids Kindergarten School, Ambur. All rights reserved. · A Unit of Future School (CBSE), Solur.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
