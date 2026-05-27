import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 border-b border-gray-80">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="text-xl font-bold text-cyan-400">Aman</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#111827] border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-300">
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;