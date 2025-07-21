import {
  Zap,
  Eye,
  Github,
  MessageSquare,
  WandSparkles,
  LayoutGrid,
  Smartphone,
  Brain,
} from "lucide-react";

export default function MemorialCard() {
  return (
    <div className="group bg-[#0f0f0f] text-white rounded-3xl border border-indigo-500/20 p-6 md:p-10 max-w-7xl mx-auto shadow-md hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Social Platform
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          Memorial Web App
        </h2>
        <p className="text-gray-400 mt-2 text-base">
          Social tribute platform with real-time interactions and media sharing
        </p>
      </div>

      {/* The Challenge */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-2">
          The Challenge
        </h3>
        <p className="text-gray-400">
          Create a meaningful platform for sharing tributes with sophisticated
          media handling, real-time interactions, and intuitive content
          organization.
        </p>
      </div>

      {/* The Solution */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
          The Solution
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <SolutionItem
            icon={<LayoutGrid className="text-pink-500" />}
            title="Interactive UI"
            description="React and Swiper.js for smooth media interactions"
          />
          <SolutionItem
            icon={<Github className="text-purple-400" />}
            title="Backend Infrastructure"
            description="Supabase for robust media storage and content querying"
          />
          <SolutionItem
            icon={<WandSparkles className="text-indigo-400" />}
            title="Content Management"
            description="Pagination and sorting (newest, most liked, oldest)"
          />
          <SolutionItem
            icon={<Zap className="text-yellow-400" />}
            title="Real-time Features"
            description="Live image/video uploads and instant interactions"
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-10 hidden md:block">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
          Key Features
        </h3>
        <div className="flex flex-wrap gap-3">
          <FeatureTag
            icon={<Zap size={16} />}
            label="Real-time media uploads"
          />
          <FeatureTag
            icon={<MessageSquare size={16} />}
            label="Interactive tribute sharing"
          />
          <FeatureTag
            icon={<Brain size={16} />}
            label="Advanced content sorting"
          />
          <FeatureTag
            icon={<Smartphone size={16} />}
            label="Responsive design"
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-10 hidden md:block">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Swiper.js", "Supabase", "Tailwind CSS"].map(
            (tech, i) => (
              <span
                key={i}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition duration-200 hover:bg-gray-700 hover:text-white"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-200"
        >
          <Eye size={16} />
          View Live Demo
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-200"
        >
          <Github size={16} />
          Source Code
        </a>
      </div>
    </div>
  );
}

function SolutionItem({ icon, title, description }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-4 text-sm transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg">
      <div className="flex items-start gap-3">
        <div className="text-xl">{icon}</div>
        <div>
          <div className="font-semibold text-white">{title}</div>
          <p className="text-gray-400 text-xs mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureTag({ icon, label }) {
  return (
    <div className="bg-gray-800 text-gray-300 px-4 py-1 rounded-full text-sm flex items-center gap-2 transition duration-200 hover:bg-gray-700 hover:text-white">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
