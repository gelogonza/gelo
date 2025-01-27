"use client";

import Image from "next/image";
import { Linkedin, Github, FileText } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-navy text-lightest-slate"
    >
      {/* Profile Picture */}
      <div className="rounded-full overflow-hidden w-52 h-52 border-4 border-green mb-6">
        <Image
          src="/Angeloimg.jpg" // Replace with your profile image path
          alt="Angelo Gonzalez"
          width={208}
          height={208}
          objectFit="cover"
        />
      </div>

      {/* Name with Typewriter Effect */}
      <h1 className="text-6xl font-bold text-white">
        <Typewriter
          words={["Angelo Gonzalez"]}
          loop={false} // Type once and stop
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* Roles */}
      <p className="mt-4 text-2xl text-slate">
        Software Engineer 
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/angelo-gonza"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green text-navy rounded shadow hover:bg-light-slate transition text-sm"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/gelogonza"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green text-navy rounded shadow hover:bg-light-slate transition text-sm"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-green text-navy rounded shadow hover:bg-light-slate transition text-sm"
        >
          <FileText className="w-4 h-4" />
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
