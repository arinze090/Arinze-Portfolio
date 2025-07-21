import {
  Eye,
  Smartphone,
  HeartHandshake,
  ShoppingBag,
  UserCog,
  Plane,
  Gift,
  RefreshCcw,
  BarChart2,
  Leaf,
  Truck,
  Recycle,
  Users,
  BookOpen,
  Edit,
  Wallet,
  Store,
  Megaphone,
  Video,
  Sparkles,
} from "lucide-react";
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";

const iconMap = {
  HeartHandshake,
  ShoppingBag,
  UserCog,
  Plane,
  Gift,
  RefreshCcw,
  Smartphone,
  BarChart2,
  Leaf,
  Truck,
  Recycle,
  BookOpen,
  Users,
  Edit,
  Wallet,
  Store,
  Megaphone,
  Video,
  Sparkles,
};

export default function ProjectsCard({ props }) {
  return (
    <div className="group mb-4 bg-[#0f0f0f] text-white rounded-3xl border border-indigo-500/20 p-6 md:p-10 max-w-7xl mx-auto shadow-md hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {props.category}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">
          {props.projectName}
        </h2>
        <p className="text-gray-400 mt-2 text-base">{props?.description}</p>
      </div>

      {/* The Challenge */}
      {props?.challenge && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-2">
            The Challenge
          </h3>
          <p className="text-gray-400">{props?.challenge}</p>
        </div>
      )}

      {/* The Solution */}
      {props?.solutions?.length && (
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
            The Solution
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {props?.solutions?.map((cur, i) => {
              const Icon = iconMap[cur?.icon];

              return (
                <SolutionItem
                  key={i}
                  icon={<Icon className={cur?.color} />}
                  title={cur?.title}
                  description={cur?.description}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Key Features */}
      <div className="mb-10 hidden md:block">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
          Key Features
        </h3>
        <div className="flex flex-wrap gap-3">
          {props.keyFeatures.map((cur, i) => {
            const LucideIcon = iconMap[cur.icon];
            return (
              <FeatureTag
                key={i}
                icon={<LucideIcon size={16} />}
                label={cur.label}
              />
            );
          })}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-10 hidden md:block">
        <h3 className="text-lg font-semibold text-white border-l-4 border-purple-600 pl-4 mb-4">
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {props.technologyStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href={props.projectLinks[0].websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-200"
        >
          <Eye size={16} />
          View Live Demo
        </a>
        {props.projectLinks[0].iosApp && (
          <a
            href="https://apps.apple.com/yourapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-200"
          >
            <FaApple className="w-5 h-5 text-white hover:text-black" /> Mobile
            App
          </a>
        )}
        {props.projectLinks[0].androidApp && (
          <a
            href="https://play.google.com/store/apps/details?id=yourapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-200"
          >
            <SiGoogleplay className="w-6 h-6 text-green-600 hover:text-green-700" />
            Mobile App
          </a>
        )}
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
