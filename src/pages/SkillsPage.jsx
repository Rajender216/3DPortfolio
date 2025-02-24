import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
  { name: "Nextjs", icon: <RiNextjsFill />, color: "text-blue-400" },
  { name: "MongoDB", icon: <FaDatabase />, color: "text-pink-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
];

 const SkillCard = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-48 w-72 cursor-pointer perspective-1000"
    >
      <div className="relative preserve-3d group-hover:rotate-x-20 group-hover:-translate-y-2 transition-all duration-500 h-full w-full">
        <div className="absolute backface-hidden bg-gradient-to-br from-black via-gray-900 to-black p-6 rounded-xl shadow-2xl border border-gray-800 h-full w-full">
          <div className={`text-4xl mb-4 ${skill.color}`}>{skill.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsPage() {
  return (
    <div
      id="skills"
      className="min-h-screen bg-black relative overflow-hidden border-b-4 border-teal-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute right-0 top-1/3 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-400 text-xl">
            Expertise that drives innovation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Additional Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            "JavaScript",
            "TypeScript",
            "GraphQL",
            "Kubernetes",
            "Git",
            "REST APIs",
          ].map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors border border-gray-800"
            >
              <span className="text-white text-lg font-medium">{skill}</span>
            </div>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
}
