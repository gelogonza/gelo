const About: React.FC = () => {
    const cards = [
      {
        title: "Frontend Developer",
        description: "Crafting beautiful and responsive user interfaces.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 12H8" />
          </svg>
        ),
      },
      {
        title: "Backend Engineer",
        description: "Building robust and scalable server-side applications.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14" y1="8" x2="14" y2="16" />
            <line x1="10" y1="8" x2="10" y2="16" />
          </svg>
        ),
      },
      {
        title: "Full Stack Developer",
        description: "Bridging the gap between frontend and backend technologies.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        ),
      },
      {
        title: "Problem Solver",
        description: "Tackling complex challenges with innovative solutions.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 2h4v4h-4zM10 18h4v4h-4zM2 10h4v4H2zM18 10h4v4h-4z" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        ),
      },
    ];
  
    return (
      <section id="about" className="py-16 bg-light-navy text-lightest-slate">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Left Side: Description */}
          <div>
            <p className="text-slate text-lg leading-relaxed mb-4">
            I am currently a student at Indiana University Bloomington pursuing my bachelor’s in Computer Science. 
            I’m passionate about full-stack development, fintech, and I love learning new technologies to see 
            how they can be used to solve real-world problems.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-4">
            I’ve been building my skills in Python, Java, C++, Javascript, HTML/CSS, and I enjoy working on 
            projects that challenge me to think critically and creatively. I’m always excited to learn something new and improve.
            </p>
            <p className="text-slate text-lg leading-relaxed">
            I’m also a big believer in the power of connecting with others—whether it’s collaborating with like-minded peers, 
            or just exchanging ideas with people who are equally passionate about tech. 
            I’m always looking for opportunities to meet new people, share experiences, 
            and explore how we can make an impact through software development.
            </p>
          </div>
  
          {/* Right Side: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-navy text-lightest-slate p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                {card.icon}
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-slate">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  