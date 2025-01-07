import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-whitepy-4 border-t-1 border-neutral-700">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 py-12">
          <Logo />

          <p className="text-xs text-neutral-400 font-semibold">
            &copy; {new Date().getFullYear()}. Made by{" "}
            <a href="https://www.adudev.co.uk" target="_blank">
              adudev.co.uk
            </a>
          </p>

          <div className="flex gap-4 text-neutral-400">
            <a href="#" target="_blank">
              <BsLinkedin size="24" />
            </a>

            <a href="#" target="_blank">
              <BsInstagram size="24" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
