import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import { ScrollSpreadText } from "../components/ScrollSpreadText";
import { contactDetails, faqs } from "../data/schoolData";

const iconMap = {
  Phone: PhoneIcon,
  Address: LocationOnIcon,
  "Working Hours": AccessTimeIcon,
};

const visitImage =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=72";

// Group phone numbers together for display
const phones = contactDetails.filter((d) => d.label === "Phone");
const otherDetails = contactDetails.filter((d) => d.label !== "Phone");

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white"
    >
      <section className="full-bleed-section relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <img src={visitImage} alt="School activity" className="h-full w-full object-cover" fetchpriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/35 to-transparent" />
        </div>
        <div className="page-shell-wide relative">
          <span className="accent-pill">
            <span className="red-dot" />
            Contact Future Kids Kindergarten School
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-balance text-4xl font-bold leading-[1] text-black md:text-6xl">
            Let&apos;s talk about your child&apos;s admission journey
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/70 md:text-lg md:leading-8">
            Have questions about our Pre-KG, Jr. KG, or Sr. KG programs, campus visits, or Early Bird Discounts?
            Reach out to us — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Phone Numbers Section */}
      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* Phone Numbers Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="section-card p-5 sm:col-span-2 xl:col-span-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ef5b3f] text-white">
              <PhoneIcon fontSize="small" />
            </div>
            <p className="mt-4 font-display text-xl font-bold text-black md:text-2xl">Phone</p>
            {phones.map((p, i) => (
              <a
                key={i}
                href={`tel:${p.value.replace(/\s/g, "")}`}
                className="mt-2 block text-sm font-semibold text-[#211c4f] hover:text-[#ef5b3f] transition-colors"
              >
                {p.value}
              </a>
            ))}
            <p className="mt-2 text-sm leading-6 text-black/60">Admissions &amp; parent enquiries</p>
          </motion.div>

          {/* Address Card */}
          {otherDetails.filter((d) => d.label === "Address").map((item, index) => {
            const Icon = iconMap[item.label];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="section-card p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#27b3a8] text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-4 font-display text-xl font-bold text-black md:text-2xl">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-black leading-6">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.note}</p>
              </motion.div>
            );
          })}

          {/* Working Hours Card */}
          {otherDetails.filter((d) => d.label === "Working Hours").map((item, index) => {
            const Icon = iconMap[item.label];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="section-card p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#211c4f] text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-4 font-display text-xl font-bold text-black md:text-2xl">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-black">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.note}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Call Now + Get Location buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:+919962826466"
            id="call-now-btn"
            className="inline-flex items-center gap-2 rounded-full bg-[#ef5b3f] px-6 py-3.5 font-bold text-white shadow-[0_16px_28px_rgba(239,91,63,0.28)] transition hover:bg-[#211c4f]"
          >
            <CallIcon fontSize="small" />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=No.+7+Bye+Pass+Road+Ananth+Nagar+Near+Amirdham+Hotel+Ambur"
            target="_blank"
            rel="noopener noreferrer"
            id="get-location-btn"
            className="inline-flex items-center gap-2 rounded-full border border-[#211c4f]/10 bg-white px-6 py-3.5 font-bold text-[#211c4f] shadow-[0_14px_28px_rgba(33,28,79,0.08)] transition hover:border-[#27b3a8] hover:text-[#27b3a8]"
          >
            <MyLocationIcon fontSize="small" />
            Get Location
          </a>
        </div>
      </section>

      <ScrollSpreadText
        text="admissions open for 2026 – 27"
        className="font-display whitespace-nowrap text-[clamp(1rem,4vw,1.65rem)] font-bold uppercase tracking-tight md:text-5xl"
        charClassName="text-[#ef5b3f]"
        heightClassName="min-h-[150px] py-4 md:min-h-[320px] md:py-12"
      />

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card overflow-hidden">
            <div className="image-frame aspect-[4/3] rounded-none border-0">
              <img src={visitImage} alt="Children with teacher during a school activity" loading="lazy" decoding="async" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#ef5b3f]">
                Visit Campus
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-black md:text-3xl">
                Book an in-person visit at Future Kids Kindergarten School.
              </p>
              <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
                Tour our interactive classrooms, creative play area, and speak with
                our caring teachers about the right program for your child — Pre-KG, Jr. KG, or Sr. KG.
              </p>
              <p className="mt-4 text-sm font-semibold text-black/70">
                No. 7, Bye Pass Road, Ananth Nagar, Near Amirdham Hotel, Ambur.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="section-card p-6 md:p-8">
          <SectionTitle
            badge="Location"
            title="Find Future Kids Kindergarten School, Ambur."
            description="No. 7, Bye Pass Road, Ananth Nagar, Near Amirdham Hotel, Ambur."
            align="left"
          />
          <div className="flex min-h-[280px] items-center justify-center rounded-[1.25rem] border border-dashed border-black/15 bg-black/[0.03]">
            <div className="text-center px-6">
              <p className="font-display text-2xl font-bold text-black md:text-3xl">📍 Ambur, Tamil Nadu</p>
              <p className="mt-3 text-sm text-black/60">No. 7, Bye Pass Road, Ananth Nagar, Near Amirdham Hotel, Ambur.</p>
              <a
                href="https://maps.google.com/?q=No.+7+Bye+Pass+Road+Ananth+Nagar+Near+Amirdham+Hotel+Ambur"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#211c4f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#ef5b3f]"
              >
                <MyLocationIcon fontSize="small" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="FAQs"
          title="A few helpful answers before you enquire."
          description="Here are answers to the most common questions from parents about Future Kids Kindergarten School."
        />
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="section-card p-5 md:p-6">
              <p className="font-display text-xl font-bold text-black md:text-2xl">{item.question}</p>
              <p className="mt-3 text-sm leading-7 text-black/65">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
