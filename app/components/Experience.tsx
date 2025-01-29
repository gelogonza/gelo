const experiences = [
    {
        role: "Intro to Informatics",
        company: "Indiana University Bloomington",
        duration: "January 2025 - Current",
        description:
          "Went over basic HTML and CSS. Went over front-end development and basics of informatics ",
        tags: ["HTML", "CSS", "Front-end development"],
    },
    {
        role: "Intro to Software Systems",
        company: "Indiana University Bloomington",
        duration: "January 2025 - Current",
        description:
          "Learned about Java programming skills, object-oriented programming, writing clean code, and explored advanced topics all while practicing through test-driven deployment.",
        tags: ["Java", "OOP", "JUnit", "IntelliJ", "Maven", "Data Structures", "Git", "Paired Programming"],
    },
    {
        role: "Discrete Structures",
        company: "Indiana University Bloomington",
        duration: "January 2025 - Current",
        description:
          "Explored the foundational concepts of computer science and mathematics that underpin logical reasoning, algorithms, and data structures.",
        tags: ["Proofs", "Logic", "Theory", "Relations"],
    },
    {
        role: "Intro to Computers and Programming",
        company: "Indiana University Bloomington",
        duration: "August 2024 - December 2024",
        description:
          "Went over Python syntax, data structures, recursion, and math.",
        tags: ["Python", "Recursion", "Sort", "File I/O"],
    },
    {
      role: "Computing Logic",
      company: "Ivy Tech Community College",
      duration: "January 2023 - May 2023",
      description:
        "Learned to code simple programs in Python and learned about the basics of computing logic.",
      tags: ["Python", "Logic Gates", "Karnaugh Maps", "Circuits"],
    },
    {
      role: "Computer Science 1",
      company: "Ivy Tech Community College",
      duration: "August 2023 - December 2023",
      description:
        "Learned the basics of C++ and how to code simple programs. I also learned about the basics of Object-Oriented Programming.",
      tags: ["C++", "Data Structures", "Debugging", "Microsoft Visual Studio"],
    },
    {
      role: "Computer Science 2",
      company: "Ivy Tech Community College",
      duration: "January 2024 - May 2024",
      description:
        "Expanded upon existing C++ knowledge and learned about object oriented programming using C++. In this class I learned about classes, objects, inheritance, polymorphism, operator overloading, exception handling, recursion, streams and file I/O.",
      tags: ["C++", "OOP", "Software Engineering", "Code Review"],
    },
    {
        role: "Software Development in Python",
        company: "Ivy Tech Community College",
        duration: "January 2024 - May 2024",
        description:
          "Learned fundamental and advanced concepts of Python. Focused on creating industry standard programs, and learned about data structures. Also, learned about object-oriented programming.",
        tags: ["Python", "SQL", "SpyderIDE", "Software Development", "Django", "Flask", "Jupyter Notebook", "Hosting"],
      },
  ];
  
  const Experience: React.FC = () => {
    return (
      <section id="experience" className="py-16 bg-navy text-lightest-slate">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">experience</h2>
        <div className="grid gap-8 max-w-7xl mx-auto px-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-lightest-slate rounded-lg p-6 hover:shadow-lg hover:border-green transition"
            >
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-slate mt-2">
                {exp.company} <span className="text-light-slate">| {exp.duration}</span>
              </p>
              <p className="mt-4 text-slate">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green text-navy px-2 py-1 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;
  