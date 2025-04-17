"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span
              className={`text-2xl font-bold font-display ${isScrolled ? "text-neutral-dark" : "text-white"}`}
            >
              preseed<span className="text-primary-purple">.pro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className={`${isScrolled ? "text-neutral-dark" : "text-white"} hover:text-primary-purple underline-anim font-medium transition-colors`}
            >
              How It Works
            </a>
            <a
              href="#for-founders"
              className={`${isScrolled ? "text-neutral-dark" : "text-white"} hover:text-primary-purple underline-anim font-medium transition-colors`}
            >
              For Founders
            </a>
            <a
              href="#for-users"
              className={`${isScrolled ? "text-neutral-dark" : "text-white"} hover:text-primary-purple underline-anim font-medium transition-colors`}
            >
              For Users
            </a>
            <Button
              asChild
              className="gradient-purple hover:opacity-90 btn-hover text-white font-medium"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnFyfBZBb3OLN8Eo6etvXRV9OblKQ0-x8UNC8iLShT-p4sxg/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>{" "}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${isScrolled ? "text-neutral-dark" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-neutral-dark" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-neutral-dark hover:text-primary-purple font-medium px-4 py-2 rounded-md hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#for-founders"
                className="text-neutral-dark hover:text-primary-purple font-medium px-4 py-2 rounded-md hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Founders
              </a>
              <a
                href="#for-users"
                className="text-neutral-dark hover:text-primary-purple font-medium px-4 py-2 rounded-md hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Users
              </a>
            </div>
            <Button
              asChild
              className="gradient-purple hover:opacity-90 text-white font-medium w-full"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnFyfBZBb3OLN8Eo6etvXRV9OblKQ0-x8UNC8iLShT-p4sxg/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
