import { motion } from "framer-motion";

function SectionTitle({ badge, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto mb-8 flex max-w-3xl flex-col gap-3 ${alignment} md:mb-10`}
    >
      {badge ? (
        <span className="accent-pill">
          <span className="red-dot" />
          {badge}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-[1.05] text-black md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8 lg:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default SectionTitle;
