import { motion } from "framer-motion";

function FeatureCard({ title, description, icon: Icon, image, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
      className="section-card overflow-hidden rounded-[2rem]"
    >
      {image ? (
        <div className="image-frame aspect-[4/3] rounded-none border-x-0 border-t-0">
          <img src={image} alt={title} />
        </div>
      ) : null}
      <div className="p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-[#d91f26] text-white">
          <Icon fontSize="medium" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/65">{description}</p>
      </div>
    </motion.article>
  );
}

export default FeatureCard;
