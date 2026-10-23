import { useEffect, useState, type CSSProperties } from "react";

// top→bottom: Thoughts, Objects, Accessibility, Demographic, Gesture
// delays + blur are managed in CSS (nth-child) to allow different expand vs collapse stagger
const expandedBands = [
  "inset(0 0 79.5% 0)",
  "inset(19.5% 0 59.5% 0)",
  "inset(39.5% 0 39.5% 0)",
  "inset(59.5% 0 19.5% 0)",
  "inset(79.5% 0 0 0)",
];

export default function App() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setExpanded(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main
      className={`scene${expanded ? " scene--expanded" : ""}`}
      aria-label="Animated typographic composition"
    >
      <img
        className="scene__background"
        src="/assets/1dd2c.png"
        alt=""
        aria-hidden="true"
      />
      <div className="scene__shade" aria-hidden="true" />

      <img
        className="scene__frame scene__frame--focus"
        src="/assets/focus-foreground.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="expanded-bands" aria-hidden="true">
        {expandedBands.map((clip) => (
          <img
            className="scene__frame expanded-band"
            src="/assets/grid-foreground.svg"
            alt=""
            style={{ "--band-clip": clip } as CSSProperties}
            key={clip}
          />
        ))}
      </div>

      <button
        className="transition-control"
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-label={expanded ? "Collapse columns" : "Expand columns"}
      >
        <span>{expanded ? "Collapse" : "Expand"}</span>
        <span className="transition-control__line" aria-hidden="true" />
      </button>
    </main>
  );
}
