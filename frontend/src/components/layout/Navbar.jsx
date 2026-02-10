import React, { useState } from "react";

//assets
import sophosLogo from "../../assets/logos/sophoschat-logo.png";

/**
 * Floating Glassmorphism Pill Navbar
 * - Drop-in component (React + Tailwind)
 * - Replace the logo text with your own logo/image
 * - Replace hrefs with your routes (or swap <a> for react-router-dom <Link>)
 */
export default function FloatingPillNavbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Product", href: "/product" },
    { label: "Research", href: "/research" },
    { label: "Community", href: "/community" },
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[min(920px,92vw)] -translate-x-1/2">
        <div className="rounded-full border border-white/60 bg-white/55 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Left: Logo */}
            <a
              href="/"
              className="flex items-center gap-2 rounded-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-black/20"
              aria-label="Go to home"
            >
              {/* Replace this with your <img /> if you want */}
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                
                <div className="flex flex-row justify-center items-end" >
                  <img src={sophosLogo} alt="SophosLogo" className="w-8 h-8" /> 

                  <span className="text-lg font-semibold">Sophos</span>

                  </div>
              </div>
            </a>

            {/* Center: Links (desktop) */}
            <nav className="hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[15px] text-black/65 hover:text-black/90 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Arrow button (desktop) + Menu (mobile) */}
            <div className="flex items-center gap-2">
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60 border border-white/60 backdrop-blur-md shadow-[0_10px_22px_rgba(0,0,0,0.10)] hover:bg-white/70 transition"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="text-xl leading-none">{open ? "✕" : "≡"}</span>
              </button>

              {/* Arrow CTA (desktop) */}
              <a
                href="/dashboard"
                className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/60 border border-white/60 backdrop-blur-md shadow-[0_10px_22px_rgba(0,0,0,0.10)] hover:bg-white/70 transition"
                aria-label="Go to dashboard"
                title="Go to dashboard"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur-xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
                <nav aria-label="Mobile">
                  <ul className="flex flex-col">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block rounded-xl px-3 py-2 text-[15px] text-black/70 hover:bg-black/5 hover:text-black/90 transition"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <li className="mt-2">
                      <a
                        href="/dashboard"
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-[15px] font-medium bg-black/5 hover:bg-black/10 transition"
                        onClick={() => setOpen(false)}
                      >
                        <span>Go to dashboard</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer so content doesn't hide behind the fixed navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
}
