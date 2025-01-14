"use client";

import React, { useState } from "react";

import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { MobileLinks } from "./Links";

export const AnimatedMobileNavigation = () => {
  //const [mobileNav, toggleMobileNav] = useCycle(false, true);

  // using useState
  const [mobileNav, setMobileNav] = useState(false);

  // toggle mobile nav with hamburger
  const toggleMobileNav = () => {
    setMobileNav((mobileNav) => !mobileNav);
  };

  // close mobile nav on logo click
  const toggleLogoNav = () => {
    setMobileNav(false);
  };

  return (
    <div className="md:hidden block">
      <nav className="mx-auto px-4 fixed top-0 left-0 right-0 flex justify-between items-center h-16 bg-white md:hidden z-50">
        <Logo toggleLogoNav={toggleLogoNav} />

        {/* Animate the open and close button */}
        <motion.button
          initial="closed"
          animate={mobileNav ? "open" : "close"}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-1"
        >
          <motion.span
            variants={{
              closed: { rotate: 0 },
              open: { rotate: 45, y: 5 },
            }}
            className="w-6 h-px bg-black block"
          ></motion.span>

          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-6 h-px bg-black block"
          ></motion.span>

          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 },
            }}
            className="w-6 h-px bg-black block"
          ></motion.span>
        </motion.button>
      </nav>

      {/* Animate opening and closing of mobile navbar */}
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                  },
                },
                closed: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    staggerChildren: 0.25,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className=" md:hidden w-full fixed top-16 left-0 right-0 bottom-0 space-y-10 p-6 bg-[#F6FCCF] flex flex-col justify-center  text-white z-50"
            >
              {/* Animate the link child elements */}
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              >
                <Container>
                  <div className="flex mt-8">
                    <MobileLinks toggleMobileNav={toggleMobileNav} />
                  </div>
                </Container>

                {/* <ul className="space-y-5">
                  <li>
                    <Link
                      href="/"
                      className="text-3xl font-bold"
                      onClick={() => toggleMobileNav()}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-3xl font-bold"
                      onClick={() => toggleMobileNav()}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-3xl font-bold"
                      onClick={() => toggleMobileNav()}
                    >
                      Link 3
                    </Link>
                  </li>
                </ul> */}
              </motion.div>

              {/* Animate hr */}
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
                className="w-full bg-gray-500 h-px"
              ></motion.div>

              {/* Animate social media child elements */}
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
              >
                <ul className="flex items-center justify-center gap-5 ">
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-500"></div>
                  </li>
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-500"></div>
                  </li>
                  <li>
                    <div className="w-10 h-10 rounded-lg bg-gray-500"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};
