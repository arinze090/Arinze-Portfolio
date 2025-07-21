import React from "react";
import SocialLinks from "../components/common/SocialLinks";

const AboutSection = () => {
  const leadership = [
    "System Architecture",
    "Scalable Infrastructure",
    "CI/CD Strategy",
    "Performance Optimization",
    "Security Best Practices",
    "API Governance",
    "Agile Delivery",
    "Code Quality Standards",
    "Engineering Documentation",
  ];

  return (
    <>
      <section className="flex justify-center items-center py-16 px-6 bg-black mt-8">
        <div className="bg-[#0c0c0c] shadow-lg border border-gray-800 rounded-xl p-10 max-w-6xl w-full space-y-8">
          {/* Heading */}
          <div>
            <h2 className="text-gray-400 text-lg tracking-widest uppercase">
              About Me
            </h2>
          </div>

          {/* Paragraph Content */}
          <div>
            <p className="text-white text-2xl leading-snug font-serif">
              Hey there! I'm Arinze — a Software Engineer focused on building
              fast, intuitive, and scalable web and mobile applications that
              solve real-world problems. With 3+ years of experience, I bring a
              strong blend of engineering depth and product thinking to every
              team I join.
              <br />
              <br />
              My journey started with a deep curiosity for how digital products
              work and a passion for turning ideas into clean, functional
              experiences. Since then, I've built full-stack platforms for
              logistics, marketplaces, and content-driven apps—empowering
              thousands of users with performant, secure, and delightful
              interfaces.
              <br />
              <br />
              I’ve shipped production-ready apps using tools like React,
              Next.js, Vue, React Native, and Node.js, with integrations ranging
              from Firebase to PostgreSQL, Stripe, and custom APIs. I've
              architected mobile features that scale, improved onboarding UX by
              50%, and contributed to systems that power real business results.
              <br />
              <br />
              Whether it's setting up JWT-auth flows, building reusable
              component systems, or collaborating with cross-functional teams—I
              code with clarity and deliver with purpose. I believe good
              engineering is not just about shipping code, but solving the right
              problems in the right way.
              <br />
              <br />
              When we work together, you get more than just a developer—you get
              a product thinker, a technical partner, and someone who cares
              deeply about impact, performance, and user experience.
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <a
              href="/Arinze-Nchor-Nwankwo-CV.pdf"
              download="Arinze-Nchor-Nwankwo-CV"
              aria-label="Download Arinze Nchor-Nwankwo's CV"
              className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      {/* Leadership Section - darker shade */}
      <section className="proficiency-section py-16 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="proficiency-card bg-[#0F0F0F] rounded-2xl p-8 lg:p-12 border border-gray-800 shadow-2xl">
              <div className="proficiency-heading mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Leadership & Expertise
                </h2>
              </div>
              <div className="proficiency-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leadership.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/30 rounded-lg px-6 py-4 border border-gray-600 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                    >
                      <span className="text-gray-300 text-lg font-medium">
                        {skill}
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
    </>
  );
};

export default AboutSection;
