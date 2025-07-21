import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export const renderSocialIcons = (orientation = "vertical") => {
  const baseStyle =
    "w-12 h-12 rounded-full flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-300";
  const iconWrapper =
    orientation === "vertical"
      ? "flex flex-col space-y-4"
      : "flex flex-row space-x-4";

  return (
    <div className={iconWrapper}>
      <a
        href="https://www.linkedin.com/in/arinze-nchor-nwankwo/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30`}
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/arinze090"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} hover:text-white hover:bg-white/10 hover:border-white/30`}
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="mailto:narinzeanthony@gmail.com"
        className={`${baseStyle} hover:text-white hover:bg-white/10 hover:border-white/30`}
      >
        <Mail className="w-5 h-5" />
      </a>
      <a
        href="https://x.com/arinze__n"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/30`}
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/_arinze_n/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30`}
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  );
};
