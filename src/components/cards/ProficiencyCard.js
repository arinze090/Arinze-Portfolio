import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as HiIcons from "react-icons/hi";
import * as CgIcons from "react-icons/cg";

function ProficiencyCard({ header, skills = [] }) {
  return (
    <div className="max-w-7xl mx-auto mb-6 bg-[#0a0a0a] p-5">
      <h2 className="text-center text-3xl font-semibold mb-10 text-gradient bg-gradient-to-r from-fuchsia-500 to-violet-400 bg-clip-text text-transparent">
        {header}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills?.map((skill, idx) => {
          const IconComponent =
            FaIcons[skill.icon] ||
            SiIcons[skill.icon] ||
            TbIcons[skill.icon] ||
            HiIcons[skill.icon] ||
            Fa6Icons[skill.icon] ||
            CgIcons[skill.icon];

          return (
            <div
              key={idx}
              className="bg-[#161616] border border-neutral-800 rounded-xl p-6 hover:shadow-lg hover:border-violet-500 transition duration-300"
            >
              <div className="mb-4">
                {IconComponent && <IconComponent className={skill.className} />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProficiencyCard;
