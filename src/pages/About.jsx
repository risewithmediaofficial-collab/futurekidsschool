import { motion } from "framer-motion";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import { ScrollSpreadText } from "../components/ScrollSpreadText";
import { aboutCards, faqs, features, values } from "../data/schoolData";

const aboutImage =
  "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1600&q=80";

const teamImage =
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80";

function About() {
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
            <p className="mt-3 text-base leading-8 text-black/65">
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
            <p className="mt-3 text-base leading-8 text-black/65">
              To become a trusted early-learning school that helps every child
              begin their education with confidence, curiosity, and care.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="Our Values"
          title="What shapes our daily culture."
          description="These values guide how we teach, support children, and build trust with families."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="section-card p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#d91f26]">
                {item.title}
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-black md:text-3xl">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-black/65">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell py-10 md:py-14">
        <SectionTitle
          badge="School Features"
          title="The systems and spaces behind a better learning experience."
          description="Future Kids School combines modern classroom expectations with a child-friendly environment."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <FeatureCard key={item.title} {...item} delay={index * 0.08} />
          ))}
        </div>
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
            <p className="text-base leading-8 text-black/65">
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
