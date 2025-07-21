import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white text-center py-4 w-full">
      <p>
        &copy; {new Date().getFullYear()} Arinze Nchor-Nwankwo. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
