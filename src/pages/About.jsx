import { motion } from "framer-motion";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SectionTitle from "../components/SectionTitle";
import StickyCardSections from "../components/StickyCardSections";
import { ScrollSpreadText } from "../components/ScrollSpreadText";
import { aboutCards, faqs, features, values } from "../data/schoolData";

const aboutImage =
  "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1100&q=75";

const teamImage =
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=75";

function About() {
  const aboutStickyCards = [
    {
      id: "values",
      eyebrow: "Our Values",
      title: "The values that shape every school day at Future Kids.",
      description:
        "Nurture, explore, and belong — these ideas guide how we teach, support children, and build trust with parents from the very first interaction.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Warm, child-first culture",
      content: (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-2 sm:p-4">
              <p className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#d91f26]">
                {item.title}
              </p>
              <p className="mt-1 sm:mt-2 font-display text-[12px] sm:text-base md:text-lg font-bold leading-tight text-black">
                {item.title}
              </p>
              <p className="mt-2 hidden text-sm leading-6 text-black/65 md:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "features",
      eyebrow: "School Features",
      title: "Activity-based learning with a safe, child-friendly environment.",
      description:
        "Future Kids Kindergarten School combines fun, interactive classrooms with a creative play area and dedicated teachers to build a strong early childhood foundation.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=70",
      imageCaption: "Modern classrooms and care",
      content: (
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-2 sm:p-4">
                <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-[0.8rem] sm:rounded-2xl bg-[#d91f26] text-white">
                  <Icon className="scale-75 sm:scale-100" fontSize="small" />
                </div>
                <p className="mt-2 sm:mt-3 font-display text-xs sm:text-sm md:text-base font-bold leading-tight text-black">
                  {item.title}
                </p>
                <p className="mt-2 hidden text-sm leading-6 text-black/65 md:block">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white"
    >
      <section className="full-bleed-section relative overflow-hidden bg-black py-20 md:py-28">
        <img
          src={aboutImage}
          alt="Children learning together"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/55" />
        <div className="page-shell-wide relative">
          <span className="accent-pill bg-white/10 text-white">
            <span className="red-dot bg-white" />
            About Future Kids Kindergarten School
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-balance text-4xl font-bold leading-[1] text-white md:text-6xl">
            A warm, engaging school where young children blossom every day.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Future Kids Kindergarten School is a unit of Future School (CBSE), Solur — built to give young learners a strong foundation through warmth, routine, creativity, and age-appropriate guidance.
          </p>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              badge="Our Story"
              title="A joyful beginning for every child."
              description="At Future Kids Kindergarten School, we create a warm and engaging environment where young children enjoy learning every day."
              align="left"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutCards.map((item) => (
                <div key={item} className="section-card p-4 text-sm font-semibold text-black/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="image-frame aspect-[4/3] rounded-[1.5rem]">
            <img src={aboutImage} alt="Children learning with teacher support" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <ScrollSpreadText
        text="activity based joyful creative learning"
        className="font-display whitespace-nowrap text-[clamp(1.25rem,4.8vw,2rem)] font-bold uppercase tracking-tight md:text-5xl"
        charClassName="text-black"
        heightClassName="min-h-[150px] py-4 md:min-h-[320px] md:py-12"
      />

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="section-card p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
              <FavoriteRoundedIcon />
            </div>
            <p className="mt-5 font-display text-2xl font-bold text-black md:text-3xl">Our Mission</p>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              To provide a safe, joyful, and engaging learning environment where children develop communication, creativity, social confidence, and strong early school habits through activity-based education.
            </p>
          </div>

          <div className="section-card p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <VisibilityRoundedIcon />
            </div>
            <p className="mt-5 font-display text-2xl font-bold text-black md:text-3xl">Our Vision</p>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              To become the most trusted kindergarten school in Ambur that helps every child begin their education with confidence, curiosity, care, and a love for learning.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell-wide py-2 md:py-6">
        <StickyCardSections cards={aboutStickyCards} />
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-card p-6 md:p-8">
            <SectionTitle
              badge="Our Team"
              title="Teachers who lead with care, structure, and patience."
              description="Our dedicated and caring teachers guide children with patience, warmth, and a deep understanding of early childhood development."
              align="left"
            />
            <p className="text-sm leading-7 text-black/65 md:text-base md:leading-8">
              We believe the best early-learning environments are built by adults
              who genuinely care about both the academic and emotional needs of young children.
            </p>
          </div>
          <div className="image-frame aspect-[4/3] rounded-[1.5rem]">
            <img src={teamImage} alt="Teacher with students in a classroom" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="FAQs"
          title="Common questions about admissions and programs."
          description="Here are answers to frequently asked questions by parents about Future Kids Kindergarten School."
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

export default About;
