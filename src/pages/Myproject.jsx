import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiAppwrite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const projects = [
  {
    title: "E-Commerce Platform",
    tech: [<FaReact />, <FaNodeJs />, <DiMongodb />, <SiExpress />],
    image: "https://picsum.photos/200",
    live: "#",
    code: "#",
  },
  {
    title: "CloudVids - Storage Cloud",
    tech: [<FaPython />, <RiNextjsFill />, <SiAppwrite />],
    image: "https://picsum.photos/200",
    live: "#",
    code: "#",
  },
  {
    title: "Coming Soon...",
    tech: [],
    image: "https://picsum.photos/200",
    live: "#",
    code: "#",
  },
  {
    title: "Coming Soon...",
    tech: [],
    image: "https://picsum.photos/200",
    live: "#",
    code: "#",
  },
  // Add more projects
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group perspective-1000 h-[400px] w-full mb-4"
    >
      <div className="relative preserve-3d group-hover:rotate-x-60 group-hover:translate-y-6 transition-all duration-500 w-full h-full">
        <div className="absolute backface-hidden bg-gradient-to-br from-black via-gray-900 to-black rounded-xl p-6 border border-gray-800 shadow-2xl w-full h-full">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg mb-4 h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Project Info */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
        

            {/* Tech Stack */}
            <div className="flex gap-3 mb-6">
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center justify-center p-2 bg-gray-800 rounded-full text-white w-10 h-10"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex gap-4 ">
              <a
                href={project.live}
                className="flex items-center text-white hover:text-purple-400 transition-colors"
              >
                <FiExternalLink className="mr-2" /> Live Demo
              </a>
              <a
                href={project.code}
                className="flex items-center text-white hover:text-purple-400 transition-colors"
              >
                <FiGithub className="mr-2" /> Code
              </a>
            </div>
          </div>
        </div>

        {/* 3D Effect Layer */}
        <div className="absolute inset-0 border border-purple-500/30 rounded-xl shadow-2xl translate-z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </motion.div>
  );
};

export default function ProjectsShowcase() {
  return (
    <div
      id="projects"
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute right-0 top-1/3 w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10 animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center mb-20"
        >
          Projects Showcase
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
