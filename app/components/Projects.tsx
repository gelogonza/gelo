const projects = [
  {
    title: "personal portfolio",
    description:
      "a responsive personal portfolio website showcasing my skills and projects.",
    tags: ["react", "next.js", "tailwind css"],
    demoLink: "https://gelo-two.vercel.app/",
    codeLink: "https://github.com/gelogonza/gelo",
  },
  {
    title: "powertrak",
    description:
      `The Workout Tracker Web App is a web application designed to help users track their workouts 
      and nutrition. It provides a user-friendly interface for logging exercises, monitoring progress, and managing dietary intake.`,
    tags: ["React", "Firebase", "AWS", "AWS Lambda", "DynamoDB"],
    demoLink: "https://discord-bot-demo-link.com",
    codeLink: "https://github.com/gelogonza/PowerTrak",
  },
  {
    title: " link website",
    description:
      "a website that leads to my other projects and social media accounts.",
    tags: ["HTML", "CSS"],
    demoLink: "https://gelo-link.netlify.app/",
    codeLink: "https://github.com/gelogonza/AngeloLink",

  },
  {
    title: "syro",
    description: `designed and developed a Music app using Spotify API that allows users to make playlists,
      view data, control playback on their devices, download music, play music that is downloaded locally,
      and view other peoples pages with more details and insights`,
    tags: ["Python", "Django","Spotify API"],
    demoLink: "https://gelo-link.netlify.app/",
    codeLink: "https://github.com/gelogonza/Syro",
    
  },
  {
    title: "reservation system",
    description:
      `console-based application designed to streamline the operations of a restaurant. The program allows users to manage reservations, 
      food orders, table assignments, bill payments, and closing operations in an efficient and user-friendly manner.`,
    tags: ["C++"],
    demoLink: "https://github.com/gelogonza/simplersvp",
    codeLink: "https://github.com/gelogonza/simplersvp"
    },
    {
      title: "cli fitness tracker",
      description:
        `console-based application designed to help users log physical activities, set fitness goals, 
        and track their progress. It provides a simple interface to input data, monitor goals, and generate progress reports.`,
      tags: ["C++"],
      demoLink: "https://github.com/gelogonza/FitnessTracker",
      codeLink: "https://github.com/gelogonza/FitnessTracker"
      },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-navy text-lightest-slate">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">projects</h2>
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
