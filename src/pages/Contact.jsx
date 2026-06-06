import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContactForm from "../components/ContactForm";
import SectionTitle from "../components/SectionTitle";
import { ScrollSpreadText } from "../components/ScrollSpreadText";
import { contactDetails, faqs } from "../data/schoolData";

const iconMap = {
  Phone: PhoneIcon,
  Email: EmailIcon,
  Address: LocationOnIcon,
  "Working Hours": AccessTimeIcon,
};

const visitImage =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80";

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
          <img src={visitImage} alt="School activity" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/35 to-transparent" />
        </div>
        <div className="page-shell-wide relative">
          <span className="accent-pill">
            <span className="red-dot" />
            Contact Us
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-balance text-4xl font-bold leading-[1] text-black md:text-6xl">
            Let&apos;s talk about your child&apos;s admission journey.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/70 md:text-lg md:leading-8">
            Have questions about programs, campus visits, or school timing?
            Reach out and we can tailor the content later with your final school details.
          </p>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = iconMap[item.label];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="section-card p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-4 font-display text-xl font-bold text-black md:text-2xl">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-black">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-black/60">{item.note}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ScrollSpreadText
        text="book your campus visit"
        className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
        charClassName="text-[#d91f26]"
        heightClassName="min-h-[240px] py-10 md:min-h-[320px] md:py-12"
      />

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card overflow-hidden">
            <div className="image-frame aspect-[4/3] rounded-none border-0">
              <img src={visitImage} alt="Children with teacher during a school activity" />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d91f26]">
                Visit Campus
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-black md:text-3xl">
                Book an in-person meeting with our team.
              </p>
              <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
                Tour the classrooms, understand our daily routine, and speak with
                the school team about the right learning stage for your child.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="section-card p-6 md:p-8">
          <SectionTitle
            badge="Map Placeholder"
            title="School location can be added here later."
            description="Replace this panel with a Google Maps embed once the address and campus location are finalized."
            align="left"
          />
          <div className="flex min-h-[280px] items-center justify-center rounded-[1.25rem] border border-dashed border-black/15 bg-black/[0.03]">
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-black md:text-3xl">Google Map Placeholder</p>
              <p className="mt-3 text-sm text-black/60">Add Google Map iframe here later.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="FAQs"
          title="A few helpful answers before you enquire."
          description="These can be replaced with your official parent support answers later."
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
