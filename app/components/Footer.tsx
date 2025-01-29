import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-slate py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm">
          © 2025 Angelo Gonzalez
        </p>


        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/gelogonza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/angelo-gonza/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
