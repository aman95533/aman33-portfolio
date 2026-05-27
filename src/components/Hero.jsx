import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <p className="text-blue-500 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Aman Srivastava
        </h1>

        <p className="text-gray-800 text-lg md:text-xl mb-8">
          Full Stack Developer | React Developer | Problem Solver
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/"
            className="px-6 py-3 bg-cyan-500 rounded-xl hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 text-3xl text-gray-400">
          <a href="https://github.com/aman95533">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;