import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function StickyCardSections({
  cards,
  className = "",
  containerClassName = "",
  imageClassName = "",
}) {
  const containerRef = useRef(null);
  const stackRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const panels = cardRefs.current.filter(Boolean);
      const stack = stackRef.current;

      if (!stack || panels.length === 0) {
        return undefined;
      }

      const isMobile = window.innerWidth < 768;

      gsap.set(panels[0], { yPercent: 0, scale: 1, rotation: 0, opacity: 1 });

      for (let i = 1; i < panels.length; i += 1) {
        gsap.set(panels[i], { yPercent: 105, scale: 1, rotation: 0, opacity: 1 });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stack,
          start: isMobile ? "top top+=64" : "top top+=72",
          end: `+=${window.innerHeight * Math.max(panels.length - 1, 1) * (isMobile ? 0.9 : 0.86)}`,
          pin: true,
          scrub: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < panels.length - 1; i += 1) {
        timeline.to(
          panels[i],
          {
            scale: isMobile ? 0.97 : 0.92,
            rotation: isMobile ? 0 : 1.5,
            yPercent: isMobile ? -1.5 : -3,
            duration: 1,
            ease: "power1.inOut",
          },
          i
        );

        timeline.to(
          panels[i + 1],
          {
            yPercent: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          i
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { scope: containerRef, dependencies: [cards.length] }
  );

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div
        ref={stackRef}
        className={`relative flex w-full items-center justify-center overflow-hidden ${containerClassName}`}
        style={{ height: "auto", minHeight: "min(88vh, 820px)" }}
      >
        <div className="relative h-full w-full" style={{ minHeight: "min(88vh, 820px)" }}>
          {cards.map((card, index) => (
            <article
              key={card.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="absolute inset-0 flex items-start justify-center"
              style={{ willChange: "transform" }}
            >
              <div className="section-surface w-full overflow-hidden grid-rows-[120px_1fr] sm:grid-rows-[150px_1fr] md:grid-cols-[1.08fr_0.92fr] md:grid-rows-1"
                style={{
                  display: "grid",
                  height: "min(88vh, 820px)",
                  minHeight: 0,
                }}
              >
                {/* Mobile top image */}
                <div className="relative overflow-hidden bg-[#211c4f] md:hidden h-[120px] sm:h-[150px]">
                  <img
                    src={card.image}
                    alt={card.alt || card.title || ""}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover ${imageClassName}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211c4f]/40 via-transparent to-transparent" />
                </div>

                {/* Content panel */}
                <div className="relative z-10 flex min-w-0 flex-col overflow-y-auto p-3.5 sm:p-5 md:p-8 lg:p-10"
                  style={{ scrollbarWidth: "none" }}
                >
                  {card.eyebrow ? (
                    <span className="accent-pill self-start">
                      <span className="red-dot" />
                      {card.eyebrow}
                    </span>
                  ) : null}

                  <h2 className="mt-3 font-display text-xl font-bold leading-[1.06] text-[#211c4f] sm:text-2xl md:mt-4 md:text-3xl lg:text-[2.6rem]">
                    {card.title}
                  </h2>

                  <p className="mt-2 hidden text-sm leading-7 text-[#2e2a4d]/74 md:block md:text-[0.9rem] md:leading-7">
                    {card.description}
                  </p>

                  <div className="mt-3 md:mt-4">{card.content}</div>
                </div>

                {/* Desktop right image */}
                <div className="relative hidden h-full overflow-hidden bg-[#211c4f] md:block">
                  <img
                    src={card.image}
                    alt={card.alt || card.title || ""}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full scale-[1.04] object-cover transition-transform duration-700 ${imageClassName}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211c4f]/38 via-[#211c4f]/8 to-transparent" />
                  <div className="theme-orb theme-orb--yellow right-6 top-6 h-10 w-10 opacity-80" />
                  <div className="theme-orb theme-orb--teal bottom-16 left-6 h-8 w-8 opacity-70" />
                  {card.imageCaption ? (
                    <div className="absolute bottom-5 left-5 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-[#211c4f] shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
                      {card.imageCaption}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StickyCardSections;
