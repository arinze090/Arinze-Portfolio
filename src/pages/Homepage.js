import { achievements, projectsData, techStack } from "../data/dummyData";
import ProjectsCard from "../components/cards/ProjectCard";
import { Link } from "react-router-dom";
import SocialLinks from "../components/common/SocialLinks";
import ArinzeLogo from "../assets/images/arinze.png";

const HomePage = () => {
  const hireMe = () => {
    window.open("https://www.linkedin.com/in/arinze-nchor-nwankwo/", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D] text-white">
        {/* Dark gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0A0A0A] to-black"></div>

        {/* Pattern overlay (slightly darker tone) */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23666666%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="content space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-300">
                  Available for hire
                </span>
              </div>

              <p className="subheading text-blue-400 font-semibold text-lg sm:text-xl tracking-wide uppercase">
                Lead Software Engineer
              </p>

              <h1 className="main-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Arinze
                </span>
                <br />
                <span className="text-white">Nchor-Nwankwo</span>
              </h1>

              <p className="summary text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Lead Software Engineer with{" "}
                <span className="text-blue-400 font-semibold">5+ years</span>{" "}
                architecting high-performance web and mobile applications.
                Expert in JavaScript ecosystems & team leadership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={hireMe}
                  className="cta-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="image-container flex justify-center items-center order-1 lg:order-2">
              <div className="orbit relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>

                {/* Profile */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl animate-pulse"></div>
                  </div>
                </div>

                {/* Orbiting circles */}
                <div className="circle-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={ArinzeLogo}
                    alt="Profile"
                    className="profile-image w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="orbiting-circle absolute w-4 h-4 bg-blue-500 rounded-full shadow-lg"
                    style={{ animation: "orbit 20s linear infinite" }}
                  ></div>
                  <div
                    className="absolute w-3 h-3 bg-purple-500 rounded-full shadow-lg"
                    style={{
                      animation: "orbit 25s linear infinite reverse",
                      animationDelay: "-5s",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - lighter shade */}
      <section className="about-section py-16 lg:py-24 bg-[#0D0D0D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="about-card bg-[#0D0D0D] rounded-2xl p-8 lg:p-12 border border-gray-700 shadow-2xl">
              <div className="about-heading mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Background
                </h2>
              </div>
              <div className="about-content">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Lead Software Engineer with a track record of designing and
                  deploying scalable web platforms that power real business
                  impact.
                  <br />
                  <br />
                  With 5+ years of experience driving full-stack development,
                  I’ve led cross-functional teams to deliver performant,
                  user-centric applications—cutting time-to-market by 60% and
                  increasing engagement by 65% across diverse industries.
                  <br />
                  <br />
                  With a foundation in Civil Engineering, I bring a rare blend of analytical rigor,
                  human-centered design, and clear communication to tech
                  leadership. I thrive at the intersection of strategy and
                  execution, transforming complex challenges into simple,
                  impactful digital solutions. My diverse background enables me
                  to lead with empathy, think critically, and build products
                  that resonate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section py-16 lg:py-24 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Project Case Studies
          </h2>
          <p className="mt-2 text-gray-500">
            Deep dives into solutions that drive real business impact
          </p>
        </div>

        {projectsData?.slice(0, 3)?.map((cur, i) => (
          <ProjectsCard key={i} props={cur} />
        ))}

        <div className="mt-6 text-center">
          <Link
            to="/projects"
            className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            View More Projects
          </Link>
        </div>
      </section>

      {/* Achievements Section - darker shade */}
      <section className="achievements-section py-16 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="achievements-card bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="achievements-heading mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Key Achievements
                </h2>
              </div>
              <div className="achievements-content">
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-emerald-400 rounded-full mt-3"></div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section - lighter shade */}
      <section className="stack-section py-16 lg:py-24 bg-[#0D0D0D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="stack-card bg-[#0D0D0D] rounded-2xl p-8 lg:p-12 border border-gray-700 shadow-2xl">
              <div className="stack-heading mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Technology Stack
                </h2>
              </div>
              <div className="stack-content">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/30 rounded-lg px-4 py-3 border border-gray-600 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
                    >
                      <span className="text-gray-300 text-sm font-medium">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL ICONS */}
      <SocialLinks />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
