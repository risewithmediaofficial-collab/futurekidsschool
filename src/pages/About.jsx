import { motion } from "framer-motion";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SectionTitle from "../components/SectionTitle";
import StickyCardSections from "../components/StickyCardSections";
import { ScrollSpreadText } from "../components/ScrollSpreadText";
import { aboutCards, faqs, features, values } from "../data/schoolData";

const aboutImage =
  "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1600&q=80";

const teamImage =
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80";

function About() {
  const aboutStickyCards = [
    {
      id: "values",
      eyebrow: "Our Values",
      title: "The values that shape every school day.",
      description:
        "These ideas guide how we teach, support children, and build trust with parents from the very first interaction.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Warm, child-first culture",
      content: (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#d91f26]">
                {item.title}
              </p>
              <p className="mt-2 font-display text-sm font-bold leading-tight text-black sm:text-lg">
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
      title: "The systems and spaces behind a better learning experience.",
      description:
        "Future Kids School combines modern classroom expectations with a child-friendly environment built around comfort and confidence.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
      imageCaption: "Modern classrooms and care",
      content: (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.1rem] border border-black/8 bg-white p-3 sm:p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
                  <Icon fontSize="small" />
                </div>
                <p className="mt-3 font-display text-sm font-bold leading-tight text-black sm:text-base">
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
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/55" />
        <div className="page-shell-wide relative">
          <span className="accent-pill bg-white/10 text-white">
            <span className="red-dot bg-white" />
            About Future Kids School
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-balance text-4xl font-bold leading-[1] text-white md:text-6xl">
            A child-first school experience with modern structure and heart.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Future Kids School is built to give young learners a strong foundation
            through warmth, routine, creativity, and age-appropriate guidance.
          </p>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              badge="Our Story"
              title="A safe start for every child."
              description="We built the school experience around emotional comfort, joyful learning, and clear parent communication."
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
            <img src={aboutImage} alt="Children learning with teacher support" />
          </div>
        </div>
      </section>

      <ScrollSpreadText
        text="safe joyful creative"
        className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
        charClassName="text-black"
        heightClassName="min-h-[240px] py-10 md:min-h-[320px] md:py-12"
      />

      <section className="page-shell py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="section-card p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d91f26] text-white">
              <FavoriteRoundedIcon />
            </div>
            <p className="mt-5 font-display text-2xl font-bold text-black md:text-3xl">Our Mission</p>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              To provide a safe, joyful, and engaging learning environment where
              children develop communication, creativity, social confidence, and
              strong early school habits.
            </p>
          </div>

          <div className="section-card p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
              <VisibilityRoundedIcon />
            </div>
            <p className="mt-5 font-display text-2xl font-bold text-black md:text-3xl">Our Vision</p>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              To become a trusted early-learning school that helps every child
              begin their education with confidence, curiosity, and care.
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
              description="Our placeholder team approach centers on emotional safety, guided learning, and healthy parent communication."
              align="left"
            />
            <p className="text-sm leading-7 text-black/65 md:text-base md:leading-8">
              We believe the best early-learning environments are built by adults
              who understand both the academic and emotional needs of young children.
            </p>
          </div>
          <div className="image-frame aspect-[4/3] rounded-[1.5rem]">
            <img src={teamImage} alt="Teacher with students in a classroom" />
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="FAQs"
          title="Common questions parents may ask."
          description="These placeholder answers can be expanded later with real admission and policy details."
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
