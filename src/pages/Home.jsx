import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import StickyCardSections from "../components/StickyCardSections";
import { ScrollSpreadIcons, ScrollSpreadText } from "../components/ScrollSpreadText";
import heroSchoolImage from "../assets/geralt-education-3704026_1920.jpg";
import titleBandImage from "../assets/roszie-school-7355056_1920.jpg";
import admissionVisitImage from "../assets/roszie-school-7355057_1920.jpg";
import {
  activities,
  facilities,
  features,
  highlights,
  programs,
  schedule,
  stats,
} from "../data/schoolData";

const heroImage = heroSchoolImage;

const heroWords = ["Future", "Kids", "Kindergarten", "School"];
const heroTagline = "Where Little Minds Blossom into Bright Futures!";
const heroHighlights = ["Activity-based learning", "Safe campus environment", "Admissions Open 2026–27"];
const statColors = ["#ef5b3f", "#27b3a8", "#ffb628", "#211c4f"];

function Home() {
  const stickySections = [
    {
      id: "why-choose",
      eyebrow: "Why Choose Future Kids?",
      title: "Fun, safe, and skill-focused learning for every young child.",
      description:
        "From interactive classrooms to a creative play area, everything at Future Kids Kindergarten School is designed to help children grow with confidence, curiosity, and joy.",
      image:
        "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Safe, guided classroom learning",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-[0.8rem] sm:rounded-[1.1rem] bg-[#ef5b3f] text-white shadow-[0_10px_20px_rgba(239,91,63,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "programs",
      eyebrow: "Our Programs",
      title: "Three learning stages built for strong early foundations.",
      description:
        "Pre-KG, Jr. KG, and Sr. KG — each level supports age-appropriate development in communication, confidence, creativity, and classroom readiness.",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Pre-KG to UKG journey",
      content: (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {programs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-[0.8rem] sm:rounded-[1rem] bg-[#211c4f] text-white shadow-[0_10px_20px_rgba(33,28,79,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                {item.ageGroup && (
                  <p className="mt-1 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#ef5b3f]">
                    {item.ageGroup}
                  </p>
                )}
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "support",
      eyebrow: "Skill Development",
      title: "Building communication, creativity, and confidence every day.",
      description:
        "Our dedicated teachers and activity-based approach help every child improve communication, creativity, and confidence through joyful, structured daily routines.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Personal support and guided growth",
      content: (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-[0.8rem] sm:rounded-[1.1rem] bg-[#27b3a8] text-white shadow-[0_10px_20px_rgba(39,179,168,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "facilities",
      eyebrow: "Facilities",
      title: "Creative play area, safe classrooms, and caring teachers.",
      description:
        "Parents can expect bright interactive classrooms, an active creative play area, and dedicated teacher support built around early childhood comfort and growth.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Campus designed for children",
      content: (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-[0.8rem] sm:rounded-[1rem] bg-[#ffb628] text-white shadow-[0_10px_20px_rgba(255,182,40,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-[12px] sm:text-base font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.description}
                </p>
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
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Creative and active school life",
      content: (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-[0.8rem] sm:rounded-[1rem] bg-[#ef5b3f] text-white shadow-[0_10px_20px_rgba(239,91,63,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.description}
                </p>
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
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Consistent daily rhythm",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {schedule.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[1.2rem] sm:rounded-[1.6rem] border border-[#211c4f]/8 bg-white p-2 sm:p-4 shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-[0.8rem] sm:rounded-[1rem] bg-[#211c4f] text-white shadow-[0_10px_20px_rgba(33,28,79,0.24)]">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ef5b3f]">
                  {item.time}
                </p>
                <p className="mt-1 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-[#211c4f]">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-[#2e2a4d]/70 md:block">
                  {item.detail}
                </p>
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
      className="bg-transparent"
    >
      <section className="full-bleed-section relative min-h-[calc(100vh-96px)] overflow-hidden wavy-divider">
        <div className="theme-orb theme-orb--yellow left-[5%] top-24 h-20 w-20 opacity-80 md:h-28 md:w-28" />
        <div className="theme-orb theme-orb--teal right-[8%] top-40 h-14 w-14 opacity-70 md:h-20 md:w-20" />
        <div className="theme-orb theme-orb--coral bottom-24 right-[18%] h-10 w-10 opacity-80 md:h-14 md:w-14" />
        <img
          src={heroImage}
          alt="Kids in a bright classroom"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-center md:w-[54%]"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf2] via-[#fffaf2]/92 to-[#fffaf2]/20" />
        <div className="absolute inset-y-0 right-0 hidden w-[54%] bg-gradient-to-l from-[#211c4f]/24 via-transparent to-transparent md:block" />
        <div className="absolute inset-0 pattern-dots opacity-25" />

        <div className="page-shell-wide relative grid min-h-[calc(100vh-96px)] items-center gap-8 py-12 md:grid-cols-[0.98fr_1.02fr] md:py-14 lg:gap-10">
          <div className="max-w-3xl self-center">
            <div className="flex max-w-4xl flex-wrap gap-x-3 gap-y-2">
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
                  className="font-display text-4xl font-bold leading-[0.98] text-[#211c4f] sm:text-5xl md:text-[4.1rem] xl:text-[4.6rem]"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#ef5b3f]"
            >
              A Unit of Future School (CBSE) – Solur
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="mt-2 text-base font-semibold italic text-[#211c4f]/70"
            >
              {heroTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#ef5b3f]/10 px-4 py-2 text-sm font-bold text-[#ef5b3f]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ef5b3f]" />
              Admissions Open for 2026 – 27
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-4 max-w-2xl text-base leading-7 text-[#2e2a4d]/75 md:text-[1.02rem]"
            >
              Give your child a safe, creative, and fun-filled learning environment where they can grow with confidence, curiosity, and happiness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ef5b3f] px-6 py-3.5 font-bold text-white shadow-[0_16px_30px_rgba(239,91,63,0.28)] transition hover:bg-[#211c4f]"
              >
                Apply for Admission
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#211c4f]/10 bg-white/92 px-6 py-3.5 font-bold text-[#211c4f] shadow-[0_14px_28px_rgba(33,28,79,0.08)] transition hover:border-[#27b3a8] hover:text-[#27b3a8]"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95, ease: "easeOut" }}
              className="mt-7 grid gap-3 sm:grid-cols-3"
            >
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="stat-chip flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#211c4f]"
                >
                  <CheckCircleRoundedIcon className="text-[#27b3a8]" fontSize="small" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative hidden min-h-[500px] self-center md:block lg:min-h-[540px]">
            <motion.div
              initial={{ opacity: 0, x: -220, y: -120, rotate: -22, scale: 0.82 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -7, scale: 1 }}
              transition={{ duration: 1.05, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="playful-frame playful-frame--blob absolute left-10 top-8 z-10 w-[31%] bg-[#fff6e2] p-2.5"
              style={{ transformOrigin: "bottom right" }}
            >
              <img
                src={titleBandImage}
                alt="School illustration"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-[36%_64%_58%_42%/45%_38%_62%_55%] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 260, y: 130, rotate: 18, scale: 0.86 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 3, scale: 1 }}
              transition={{ duration: 1.15, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="playful-frame playful-frame--card absolute right-0 top-12 w-[54%] bg-white p-3"
              style={{ transformOrigin: "top left" }}
            >
              <img
                src={admissionVisitImage}
                alt="Children on campus"
                loading="lazy"
                decoding="async"
                className="h-[220px] w-full rounded-[1.6rem_1.6rem_2.1rem_1.4rem] object-cover lg:h-[245px]"
              />
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#27b3a8]">Creative Play</p>
                  <p className="mt-1 font-display text-xl leading-tight text-[#211c4f] lg:text-2xl">Warm spaces for bright beginnings</p>
                </div>
                <div className="shrink-0 rounded-full bg-[#211c4f] px-4 py-2.5 text-sm font-bold text-white">Safe</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-shell py-8 md:py-12">
        <div className="section-surface px-5 py-8 md:px-8 md:py-10">
          <div className="relative z-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-6 text-center shadow-[0_18px_35px_rgba(33,28,79,0.08)]"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-white shadow-[0_16px_30px_rgba(33,28,79,0.16)]"
                  style={{ background: statColors[index % statColors.length] }}
                >
                  <p className="font-display text-2xl font-bold md:text-3xl">{item.value}</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#2e2a4d]/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollSpreadText
        text="future kids kindergarten school ambur"
        className="font-display whitespace-nowrap text-[clamp(1.35rem,7.2vw,3rem)] font-bold uppercase tracking-tight"
        charClassName="text-[#ef5b3f]"
        heightClassName="min-h-[180px] py-6 md:min-h-[300px] md:py-12"
        backgroundImage={titleBandImage}
        backgroundAlt="Future Kids Kindergarten School Ambur"
        overlayClassName="bg-[#fffaf2]/48"
        backgroundBlurClassName="blur-[1.5px]"
      />

      <section className="page-shell-wide py-2 md:py-6">
        <StickyCardSections cards={stickySections} />
      </section>

      <ScrollSpreadIcons
        title="See our school world unfold"
        icons={iconRow}
        mode="rotate"
        className="mx-3 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(239,245,255,0.75))] shadow-[0_28px_70px_rgba(33,28,79,0.08)] md:mx-6"
        heightClassName="min-h-[340px] py-8 md:min-h-[460px] md:py-12"
      />

      <section className="full-bleed-section py-12 md:py-16">
        <div className="page-shell">
          <div className="dark-play-surface grid items-center gap-6 rounded-[2.8rem] px-6 py-8 shadow-[0_28px_70px_rgba(20,14,55,0.22)] md:px-10 md:py-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="accent-pill bg-white/10 text-white">
                <span className="red-dot bg-white" />
                Admissions Open for 2026 – 27
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
                Enroll your child today and give them the perfect start to their learning journey.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Early Bird Discount Available — Speak with our team, visit the campus, and explore how Future Kids Kindergarten School can give your child the best beginning.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ef5b3f] px-6 py-3.5 font-bold text-white shadow-[0_16px_28px_rgba(239,91,63,0.28)] transition hover:bg-white hover:text-[#211c4f]"
              >
                Enquire Now
              </Link>
            </div>
            <div className="playful-frame playful-frame--card relative z-10 min-h-[260px] bg-white p-3">
              <img
                src={admissionVisitImage}
                alt="Children outside the school campus"
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-[1.8rem_1.8rem_2.4rem_1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
