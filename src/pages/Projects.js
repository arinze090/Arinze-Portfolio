import ProjectsCard from "../components/cards/ProjectCard";
import { projectsData } from "../data/dummyData";
import SocialLinks from "../components/common/SocialLinks";

const ProjectCaseStudies = () => {
  return (
    <>
      <section className="projects-section py-16 lg:py-24 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Project Case Studies
          </h2>
          <p className="mt-2 text-gray-500">
            Deep dives into solutions that drive real business impact
          </p>
        </div>

        {projectsData?.map((cur, i) => (
          <ProjectsCard key={i} props={cur} />
        ))}
      </section>

      {/* SOCIAL ICONS */}
      <SocialLinks />
    </>
  );
};

export default ProjectCaseStudies;
