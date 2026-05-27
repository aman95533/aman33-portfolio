function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Interested in collaborating or hiring? Let's connect.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="px-8 py-4 bg-cyan-500 rounded-xl inline-block hover:scale-105 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;