import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, time } from "framer-motion";
import furneHousePage from "../../assets/FurneHouse/furneHousePage.png";
import uifryPage from "../../assets/Uifry/uifryPage.png";
import uniquePage from "../../assets/Unique/uniquePage.png";
import brewPage from "../../assets/BrewHaven/brew-haven.png";
import tSoftPage from "../../assets/TaninSoft/tSoft.png";
import taninovaPage from "../../assets/Taninova/taninovaPage.png";
import advanceCustomHtml from "../../assets/Plugins/advance-custom-html.png";
import documentEmbedder from "../../assets/Plugins/document-embedder.png";
import timelineBlock from "../../assets/Plugins/timeline-block.png";
import streamcast from "../../assets/Plugins/streamcast.png";
import voiceFeedback from "../../assets/Plugins/voice-feedback.png";

const Projects = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPlugin, setSelectedPlugin] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Furne House - An eCommerce Website",
      category: "web",
      img: furneHousePage,
      path: "/projects/furne-house",
    },
    {
      id: 2,
      title: "Brew Haven - Premium Coffee Shop",
      category: "web",
      img: brewPage,
      path: "/projects/brew-haven",
    },
    {
      id: 3,
      title: "Taninova - Latest Innovation",
      category: "web",
      img: taninovaPage,
      path: "/projects/taninova",
    },
    {
      id: 4,
      title: "Unique - An Awesome Landing Page",
      category: "web",
      img: uniquePage,
      path: "/projects/unique",
    },
    {
      id: 5,
      title: "TaninSoft - A Digital Agency",
      category: "web",
      img: tSoftPage,
      path: "/projects/tanin-soft",
    },
    {
      id: 6,
      title: "Uifry - A Landing Page Plugin",
      category: "web",
      img: uifryPage,
      path: "/projects/uifry",
    },
    {
      id: 7,
      title: "Advance Custom HTML",
      category: "plugin",
      img: advanceCustomHtml,
      description:
        "A lightweight WordPress Block plugin that allows users to embed and display code snippets beautifully inside posts and pages. It supports multiple programming languages, syntax highlighting, and a clean, developer-friendly design — making technical content easy to read and visually appealing.",
      wpLink: "https://wordpress.org/plugins/advance-custom-html/",
      activeInstall: "10k+",
    },
    {
      id: 8,
      title: "Document Embedder",
      category: "plugin",
      img: documentEmbedder,
      description:
        "Embed PDF, Word, Excel, PowerPoint, and other documents directly in WordPress posts or pages—no downloads required. Includes a powerful Document Library module with search, filter, sorting, and customizable layouts. Supports local uploads, Google Drive, Dropbox, shortcodes, and Gutenberg blocks, making it perfect for reports, guides, or presentations.",
      wpLink: "https://wordpress.org/plugins/document-emberdder/",
      activeInstall: "10k+",
    },
    {
      id: 9,
      title: "Timeline Block",
      category: "plugin",
      img: timelineBlock,
      description:
        "Create interactive timelines in WordPress with 6 unique themes and both vertical or horizontal layouts. Easily style timelines in the block editor—customize colors, fonts, and icons to match your brand. Ideal for roadmaps, milestones, or storytelling.",
      wpLink: "https://wordpress.org/plugins/timeline-block-block/",
      activeInstall: "3k+",
    },
    {
      id: 10,
      title: "Streamcast",
      category: "plugin",
      img: streamcast,
      description:
        "A lightweight and customizable radio player for WordPress. Play IceCast, Shoutcast, Radionomy, Radiojar, or RadioCo live streams with ease using a simple shortcode. Fully responsive and user-friendly design.",
      wpLink: "https://wordpress.org/plugins/streamcast/",
      activeInstall: "1k+",
    },
    {
      id: 11,
      title: "Voice Feedback",
      category: "plugin",
      img: voiceFeedback,
      description:
        "Enable visitors to record and submit voice feedback directly on your site via floating drawer, block, or shortcode. All recordings are stored in the admin panel for review and management. Perfect for education sites, portfolios, product pages, and blogs.",
      wpLink: "https://wordpress.org/plugins/voice-feedback/",
      activeInstall: "10+",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeTab);

  const handleProjectClick = (project) => {
    if (project.category === "plugin") {
      setSelectedPlugin(project);
    } else {
      navigate(project.path);
    }
  };

  return (
    <div className="mt-32 mb-20 mx-auto text-[#333]">
      <div className="text-center">
        <h2 className="font-extrabold uppercase text-4xl">Projects</h2>
        <p>Home / Projects</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-14">
        {["all", "web", "plugin"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1 transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#333] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid with Animation */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="hover:text-[#f26b38] cursor-pointer relative"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="h-[210px] bg-top bg-no-repeat bg-cover hover:bg-bottom transition-all duration-[1.5s] ease-linear"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <h3 className="text-center mt-3 font-extrabold">
                {project.title}
              </h3>
              <div className="absolute top-2 right-2 text-sm bg-[#48423f] px-2 py-1 text-white">
                <span>{project.category.toUpperCase()}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal for Plugins */}
      <AnimatePresence>
        {selectedPlugin && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-3xl w-full relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlugin(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
              >
                ✖
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Left: Image */}
                <div className="flex items-center justify-center bg-gray-100 rounded-xl p-4">
                  <img
                    src={selectedPlugin.img}
                    alt={selectedPlugin.title}
                    className="max-h-48 object-contain"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedPlugin.title}
                  </h2>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {selectedPlugin.description}
                  </p>

                  {selectedPlugin.activeInstall && (
                    <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Active Installations: {selectedPlugin.activeInstall}
                    </span>
                  )}

                  <div className="mt-5 flex flex-col gap-3">
                    {/* WordPress.org plugin link */}
                    <a
                      href={selectedPlugin.wpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center bg-[#0073aa] text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-[#005f8d] transition-all"
                    >
                      View on WordPress.org
                    </a>

                    {/* Developer Profile Link */}
                    <a
                      href="https://profiles.wordpress.org/taninrahman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all"
                    >
                      View My WordPress Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
