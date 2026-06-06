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

      gsap.set(panels[0], {
        yPercent: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
      });

      for (let i = 1; i < panels.length; i += 1) {
        gsap.set(panels[i], {
          yPercent: 108,
          scale: 1,
          rotation: 0,
          opacity: 1,
        });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stack,
          start: isMobile ? "top top+=64" : "top top+=72",
          end: `+=${window.innerHeight * Math.max(panels.length - 1, 1) * (isMobile ? 0.88 : 0.84)}`,
          pin: true,
          scrub: 0.55,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < panels.length - 1; i += 1) {
        timeline.to(
          panels[i],
          {
            scale: isMobile ? 0.96 : 0.9,
            rotation: isMobile ? 0 : 2,
            yPercent: isMobile ? -2 : -4,
            duration: 1,
            ease: "none",
          },
          i
        );

        timeline.to(
          panels[i + 1],
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
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
        className={`relative flex h-[82vh] 'min-h-[680px] w-full items-center justify-center overflow-hidden md:h-[82vh] 'md:min-h-[720px] ${containerClassName}`}
      >
        <div className="relative h-full w-full">
          {cards.map((card, index) => (
            <article
              key={card.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="section-card grid h-[78vh] 'min-h-[620px] w-full overflow-hidden 'rounded-[1.5rem] grid-rows-[220px_1fr] md:h-full md:min-h-0 md:grid-cols-[1.08fr_0.92fr] md:grid-rows-1">
                <div className="relative overflow-hidden bg-black md:hidden">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    className={`h-full w-full object-cover ${imageClassName}`}
                  />
                  <div className="absolute inset-0 'bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                <div className="min-w-0 overflow-hidden p-4 sm:p-5 md:p-8 lg:p-10">
                  {card.eyebrow ? (
                    <span className="accent-pill">
                      <span className="red-dot" />
                      {card.eyebrow}
                    </span>
                  ) : null}

                  <h2 className="mt-4 font-display text-2xl font-bold leading-[1.05] text-black sm:text-3xl md:mt-5 md:text-4xl lg:text-5xl">
                    {card.title}
                  </h2>

                  <p className="mt-3 hidden text-sm leading-6 text-black/65 md:block md:text-base md:leading-8">
                    {card.description}
                  </p>

                  <div className="mt-4 md:mt-6">{card.content}</div>
                </div>

                <div className="relative hidden h-full overflow-hidden bg-black md:block">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    className={`h-full w-full object-cover ${imageClassName}`}
                  />
                  <div className="absolute inset-0 'bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  {card.imageCaption ? (
                    <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
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
