import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-green-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-xl text-center border border-gray-700 hover:border-cyan-400 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;