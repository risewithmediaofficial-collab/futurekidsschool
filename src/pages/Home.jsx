import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import StickyCardSections from "../components/StickyCardSections";
import { ScrollSpreadIcons, ScrollSpreadText } from "../components/ScrollSpreadText";
import {
  activities,
  facilities,
  features,
  highlights,
  programs,
  schedule,
  stats,
} from "../data/schoolData";

const heroImage =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80";

const heroWords = ["A", "clean,", "modern", "school", "website", "built", "for", "bright", "beginnings."];

function Home() {
  const stickySections = [
    {
      id: "why-choose",
      eyebrow: "Why Choose Us",
      title: "A modern school experience with warmth, safety, and structure.",
      description:
        "Everything from classroom flow to teacher care is designed to help children feel comfortable, supported, and excited to learn every day.",
      image:
        "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Safe, guided classroom learning",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-3 font-display text-base font-bold text-black sm:text-lg">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "programs",
      eyebrow: "Programs",
      title: "Three learning stages built for strong early foundations.",
      description:
        "Each level supports age-appropriate development in communication, confidence, routines, creativity, and classroom readiness.",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Pre-KG to UKG journey",
      content: (
        <div className="grid gap-3 md:grid-cols-3">
          {programs.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-3 font-display text-base font-bold text-black sm:text-lg">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "support",
      eyebrow: "Learning Support",
      title: "Inspire growth through thoughtful daily routines.",
      description:
        "Teacher attention, structured classroom time, and child-friendly support systems help every learner settle in, participate, and progress confidently.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Personal support and guided growth",
      content: (
        <div className="space-y-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                    <Icon fontSize="small" />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-black sm:text-lg">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "facilities",
      eyebrow: "Facilities",
      title: "Safe spaces and caring people behind every school day.",
      description:
        "Parents can expect bright classrooms, active play, and teacher support built around early childhood needs and comfort.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Campus designed for children",
      content: (
        <div className="grid gap-3 sm:grid-cols-3">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-3 font-display text-sm font-bold text-black sm:text-base">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "activities",
      eyebrow: "Extra Activities",
      title: "More than classroom learning.",
      description:
        "Creative, physical, and cognitive activities keep children engaged across the full week and help them grow holistically.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Creative and active school life",
      content: (
        <div className="space-y-3">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3 rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                  <Icon fontSize="small" />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-black sm:text-lg">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "schedule",
      eyebrow: "Daily Schedule",
      title: "A clear, calm structure for every school day.",
      description:
        "Consistent timing helps children settle into learning, play, and transition routines with comfort and confidence.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Consistent daily rhythm",
      content: (
        <div className="grid gap-3 sm:grid-cols-2">
          {schedule.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#d91f26]">{item.time}</p>
                <p className="mt-2 font-display text-base font-bold text-black sm:text-lg">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.detail}</p>
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  const iconRow = [
    features[0].image,
    programs[0].image,
    facilities[0].image,
    activities[0].image,
    programs[1].image,
    facilities[1].image,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white"
    >
      <section className="full-bleed-section relative min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Kids in a bright classroom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/84 to-white/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />

        <div className="page-shell-wide relative flex min-h-screen items-center py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="mt-5 flex max-w-4xl flex-wrap gap-x-3 gap-y-2">
              {heroWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: -70, rotateX: -70 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-4xl font-bold leading-[1] text-black sm:text-5xl md:text-6xl xl:text-7xl"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-8 text-black/70 md:text-lg"
            >
              Future Kids School combines trusted care, joyful classrooms, and a
              modern early-learning experience for parents who want safety,
              structure, and growth in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d91f26] px-6 py-3.5 font-bold text-white transition hover:bg-black"
              >
                Book Admission
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/85 px-6 py-3.5 font-bold text-black transition hover:border-[#d91f26] hover:text-[#d91f26]"
              >
                Explore School
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              {["Play-based curriculum", "Safe campus support", "Experienced teachers"].map((item) => (
                <div key={item} className="stat-chip flex items-center gap-2 px-4 py-3 text-sm font-semibold text-black">
                  <CheckCircleRoundedIcon className="text-[#d91f26]" fontSize="small" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-shell py-6 md:py-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="section-card px-5 py-6 text-center">
              <p className="font-display text-3xl font-bold text-[#d91f26] md:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-black/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ScrollSpreadText
        text="future kids school"
        className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
        charClassName="text-[#d91f26]"
        heightClassName="min-h-[220px] py-8 md:min-h-[300px] md:py-12"
      />

      <section className="page-shell-wide py-2 md:py-6">
        <StickyCardSections cards={stickySections} />
      </section>

      <ScrollSpreadIcons
        title="See our school world unfold"
        icons={iconRow}
        mode="rotate"
        heightClassName="min-h-[340px] py-8 md:min-h-[460px] md:py-12"
      />

      <section className="full-bleed-section bg-black py-12 md:py-16">
        <div className="page-shell">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="accent-pill bg-white/10 text-white">
                <span className="red-dot bg-white" />
                Admissions Open
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                Book an admission visit for your child.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Speak with our team, visit the campus, and explore how Future Kids
                School can support your child&apos;s early learning journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d91f26] px-6 py-3.5 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
