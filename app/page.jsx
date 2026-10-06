"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "98.7%", label: "SYSTEM PRECISION" },
  { value: "742", unit: "KM", label: "RANGE" },
  { value: "2.1", unit: "SEC", label: "0—100" },
  { value: "247", unit: "KM/H", label: "TOP VELOCITY" },
];

function AhadCarVehicle() {
  return (
    <div className="vehicle-wrap" aria-label="Ahad Car Company futuristic vehicle">
      <div className="vehicle-glow" />
      <svg className="vehicle" viewBox="0 0 760 330" role="img">
        <defs>
          <linearGradient id="body" x1="0" x2="1">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="48%" stopColor="#273449" />
            <stop offset="100%" stopColor="#080b12" />
          </linearGradient>
          <linearGradient id="glass" x1="0" x2="1">
            <stop offset="0%" stopColor="#0b1523" />
            <stop offset="55%" stopColor="#8de7ff" />
            <stop offset="100%" stopColor="#14243a" />
          </linearGradient>
          <linearGradient id="accent" x1="0" x2="1">
            <stop offset="0%" stopColor="#5ee7ff" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <ellipse cx="385" cy="282" rx="285" ry="25" fill="#65e7ff" opacity=".16" filter="url(#blur)" />

        <path
          d="M86 237 C112 207 157 191 226 179 L291 112 C313 89 351 77 405 78 L507 82 C556 84 598 101 632 131 L687 179 C715 184 733 202 739 224 L744 245 L694 252 L670 230 L148 230 L124 252 L72 248 Z"
          fill="url(#body)"
          stroke="#60758d"
          strokeWidth="3"
        />

        <path
          d="M302 111 L354 91 L450 92 L500 99 L554 128 L587 171 L267 171 Z"
          fill="url(#glass)"
          stroke="#8cecff"
          strokeOpacity=".55"
          strokeWidth="2"
        />

        <path d="M356 94 L350 169" stroke="#8cecff" strokeOpacity=".38" strokeWidth="3" />
        <path d="M451 95 L457 170" stroke="#8cecff" strokeOpacity=".25" strokeWidth="3" />

        <path d="M120 207 C202 189 573 186 684 207" fill="none" stroke="url(#accent)" strokeWidth="5" opacity=".9" />
        <path d="M181 230 H628" stroke="#d7f8ff" strokeOpacity=".22" strokeWidth="2" />

        <path d="M665 191 L724 202 L733 221 L681 219 Z" fill="#a8f5ff" opacity=".85" />
        <path d="M80 215 L125 204 L142 221 L88 226 Z" fill="#a78bfa" opacity=".8" />

        <circle cx="193" cy="246" r="47" fill="#070a10" stroke="#455a72" strokeWidth="8" />
        <circle cx="193" cy="246" r="24" fill="#1b2635" stroke="#8beaff" strokeWidth="3" />
        <circle cx="193" cy="246" r="7" fill="#8beaff" />

        <circle cx="614" cy="246" r="47" fill="#070a10" stroke="#455a72" strokeWidth="8" />
        <circle cx="614" cy="246" r="24" fill="#1b2635" stroke="#8beaff" strokeWidth="3" />
        <circle cx="614" cy="246" r="7" fill="#8beaff" />

        <path d="M103 234 H40" stroke="#62e7ff" strokeWidth="3" opacity=".7" />
        <path d="M83 243 H15" stroke="#62e7ff" strokeWidth="2" opacity=".35" />
      </svg>
    </div>
  );
}

export default function Home() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".topline", { y: -18, opacity: 0, duration: 0.7 })
        .from(".brand-letter", {
          y: 70,
          opacity: 0,
          rotateX: -80,
          duration: 0.8,
          stagger: 0.07,
        }, "-=0.35")
        .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.7 }, "-=0.35")
        .from(".metric", {
          y: 35,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
        }, "-=0.25");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            gsap.set(".progress-track i", { scaleY: self.progress });
          },
        },
      });

      tl.addLabel("awakening")
        .to(".hero-kicker", { opacity: 0, y: -35, duration: 0.7 })
        .to(".vehicle-wrap", {
          x: -70,
          y: 25,
          scale: 1.02,
          rotate: -1,
          duration: 1.1,
        }, "<")
        .to(".brand-title", {
          y: -28,
          scale: 0.58,
          opacity: 0.32,
          transformOrigin: "left center",
          duration: 0.9,
        }, "<")
        .to(".phase-awakening", { opacity: 0, y: -25, duration: 0.7 }, "<")

        .addLabel("assembly")
        .to(".assembly-panel", { opacity: 1, duration: 0.35 })
        .to(".assembly-item", {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.2,
        })
        .to(".vehicle-wrap", {
          x: 90,
          y: -5,
          scale: 1.10,
          rotate: 2,
          duration: 1.2,
        }, "<")
        .to(".brand-title", {
          opacity: 0,
          scale: 0.48,
          x: -35,
          duration: 0.7,
        }, "<")

        .addLabel("intelligence")
        .to(".assembly-panel", { opacity: 0, y: -20, duration: 0.5 })
        .to(".hud", { opacity: 1, duration: 0.4 })
        .to(".hud-line", {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 0.7,
          stagger: 0.15,
        })
        .to(".metric", {
          y: -24,
          opacity: 0,
          duration: 0.65,
          stagger: 0.06,
        }, "<")
        .to(".vehicle-wrap", {
          x: 0,
          y: -25,
          scale: 1.18,
          duration: 1.2,
        }, "<")

        .addLabel("performance")
        .to(".performance", { opacity: 1, y: 0, duration: 0.7 })
        .to(".vehicle-wrap", {
          x: -125,
          y: -5,
          scale: 1.25,
          rotate: -3,
          duration: 1.3,
        }, "<")

        .addLabel("overclock")
        .to(".performance", { opacity: 0, y: -30, duration: 0.5 })
        .to(".overclock", { opacity: 1, duration: 0.5 })
        .to(".vehicle-wrap", {
          x: 190,
          y: 0,
          scale: 1.36,
          rotate: 4,
          duration: 1.5,
        }, "<")
        .to(".speed-line", {
          x: 120,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
        }, "<")

        .addLabel("final")
        .to(".overclock", { opacity: 0, duration: 0.5 })
        .to(".vehicle-wrap", { opacity: 0, scale: 1.62, duration: 0.8 })
        .to(".final", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="ahad-page">
      <section ref={sectionRef} className="ahad-hero">
        <div className="noise" />
        <div className="grid" />

        <header className="topline">
          <span>AHAD CAR COMPANY / 01</span>
          <span>SCROLL TO INITIALIZE</span>
          <span>SYS—ONLINE</span>
        </header>

        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" />
            AUTONOMOUS PERFORMANCE SYSTEM
          </div>

          <h1 className="brand-title" aria-label="AHAD CAR COMPANY">
  <span className="brand-word">
    {"AHAD".split("").map((letter, i) => (
      <span key={`ahad-${i}`} className="brand-letter">
        {letter}
      </span>
    ))}
  </span>

  <span className="brand-word">
    {"CAR".split("").map((letter, i) => (
      <span key={`car-${i}`} className="brand-letter">
        {letter}
      </span>
    ))}
  </span>

  <span className="brand-word">
    {"COMPANY".split("").map((letter, i) => (
      <span key={`company-${i}`} className="brand-letter">
        {letter}
      </span>
    ))}
  </span>
</h1>

          <p className="phase-awakening">THE MACHINE IS AWAKENING</p>
        </div>

        <div className="vehicle-stage">
          <AhadCarVehicle />
          <div className="speed-lines" aria-hidden="true">
            <span className="speed-line" />
            <span className="speed-line" />
            <span className="speed-line" />
            <span className="speed-line" />
          </div>
        </div>

        <div className="metric-row">
          {metrics.map((m) => (
            <article className="metric" key={m.label}>
              <div className="metric-value">
                {m.value}<small>{m.unit}</small>
              </div>
              <div className="metric-label">{m.label}</div>
            </article>
          ))}
        </div>

        <div className="assembly-panel">
          <p className="eyebrow">SYSTEM ASSEMBLY / 02</p>
          {["FRAME", "ENERGY", "INTELLIGENCE"].map((item, i) => (
            <div className="assembly-item" key={item}>
              <span>0{i + 1}</span>
              <strong>{item}</strong>
              <em>CONNECTED</em>
            </div>
          ))}
        </div>

        <div className="hud">
          <span className="hud-corner tl">ACC-CORE // 7F2A</span>
          <span className="hud-corner tr">SYNC 99.98%</span>
          <div className="hud-center">
            <div className="hud-ring" />
            <span>INTELLIGENCE ONLINE</span>
          </div>
          <div className="hud-line" />
          <div className="hud-line" />
        </div>

        <div className="performance">
          <p className="eyebrow">PERFORMANCE / 04</p>
          <strong>BUILT FOR<br /><span>THE NEXT SECOND.</span></strong>
        </div>

        <div className="overclock">
          <span>OVERCLOCK MODE</span>
          <strong>247</strong>
          <small>KM/H</small>
          <p>RESPONSE TIME: 0.04 SEC</p>
        </div>

        <div className="final">
          <span>AHAD CAR COMPANY / 05</span>
          <strong>THE FUTURE<br />IS RESPONSIVE.</strong>
          <small>SCROLL BACK TO REINITIALIZE</small>
        </div>

        <div className="scroll-progress">
          <span>00</span>
          <div className="progress-track"><i /></div>
          <span>100</span>
        </div>
      </section>

      <section className="after-hero">
        <span>AHAD CAR COMPANY</span>
        <h2>Designed around motion, intelligence and response.</h2>
      </section>
    </main>
  );
}
