import React, { useState } from "react";
import sophosLogo from "../../assets/logos/sophoschat-logo.png";

export default function FloatingPillNavbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Chatbot", href: "/chatbot" },
    { label: "Coming soon", href: "/marketplace" },
    { label: "Coming soon", href: "/product" },
    { label: "Coming soon", href: "/community" },
  ];



  const isAuth = Boolean(localStorage.getItem("auth"));
  console.log(isAuth)

  return (
    <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-white/70 backdrop-blur-md border-b border-black/10">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            aria-label="Go to home"
          >
            <img src={sophosLogo} className="h-7 w-7" alt="Sophos Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black/90">
              Sophos
            </span>
          </a>

          {/* Right actions (desktop) */}
          <div className="flex items-center md:order-2 space-x-2 rtl:space-x-reverse">
              {isAuth ? (
                // Logged in (disabled / informative)
                <button
                  type="button"
                  disabled
                  className="
                    inline-flex items-center gap-2
                    text-black/80 bg-white/70
                    border border-black/10
                    font-medium leading-5
                    rounded-lg text-sm
                    px-3 py-2
                    cursor-not-allowed opacity-80
                  "
                  aria-label="You are logged in"
                  title="You are logged in"
                >
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  Logged in
                </button>
              ) : (
                <>
                  {/* Login */}
                  <a
                    href="/login"
                    className="
                      text-black/80 bg-white/60
                      border border-black/10
                      hover:bg-white/80
                      focus:ring-4 focus:ring-black/10
                      font-medium leading-5
                      rounded-lg text-sm
                      px-3 py-2
                      focus:outline-none transition
                    "
                    aria-label="Login"
                    title="Login"
                  >
                    Login
                  </a>

                  {/* Sign Up */}
                  <a
                    href="/register"
                    className="
                      text-white bg-black
                      hover:bg-black/80
                      border border-transparent
                      focus:ring-4 focus:ring-black/20
                      shadow-sm
                      font-medium leading-5
                      rounded-lg text-sm
                      px-3 py-2
                      focus:outline-none transition
                    "
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign Up
                  </a>
                </>
              )}


              
            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black/70 rounded-lg md:hidden hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/10"
              aria-controls="main-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            id="main-menu"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-black/80 rounded hover:bg-black/5 md:hover:bg-transparent md:hover:text-black md:p-0"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind the fixed navbar */}
      <div className="h-[72px]" />
    </header>
  );
}
