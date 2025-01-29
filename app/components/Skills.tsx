"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "c++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "vscode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"},
    { name: "spyder", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spyder/spyder-plain.svg"},
    { name: "firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"},
    { name: "flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"},
    { name: "django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
    { name: "aws", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"}
];

const Skills: React.FC = () => {
    return (
      <section id="skills" className="py-16 bg-navy text-lightest-slate">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">skills</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                color: "#64ffda",
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 1,
                rotate: -15,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              />
              <motion.p
                className="text-white text-sm font-medium"
                whileHover={{
                  color: "#64ffda",
                  transition: { duration: 0.3 },
                }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    );
  };
  
  export default Skills;
  
  
