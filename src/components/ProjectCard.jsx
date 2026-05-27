function ProjectCard({ project }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4">
        {project.title}
      </h3>

      <p className="text-gray-40 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-cyan-50/20 text-cyan-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          className="px-4 py-2 bg-cyan-500 rounded-lg"
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="px-4 py-2 border border-cyan-400 rounded-lg"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;