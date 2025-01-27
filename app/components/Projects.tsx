const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills and projects.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "https://your-portfolio-demo-link.com",
    codeLink: "https://github.com/your-profile/portfolio",
  },
  {
    title: "Multi-function Discord Bot",
    description:
      "A full-featured Discord bot with music streaming and server management capabilities.",
    tags: ["Node.js", "Discord.js", "Play-dl"],
    demoLink: "https://discord-bot-demo-link.com",
    codeLink: "https://github.com/your-profile/discord-bot",
  },
  {
    title: "Password Manager",
    description:
      "A secure password manager with encryption and two-factor authentication.",
    tags: ["Python", "Django", "SQLite"],
    demoLink: "https://password-manager-demo-link.com",
    codeLink: "https://github.com/your-profile/password-manager",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-navy text-lightest-slate">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-lightest-slate rounded-lg p-6 hover:shadow-lg hover:border-green transition"
          >
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-slate mt-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-light-navy text-lightest-slate px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green text-navy rounded shadow hover:bg-light-slate transition"
              >
                View
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green text-navy rounded shadow hover:bg-light-slate transition"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
