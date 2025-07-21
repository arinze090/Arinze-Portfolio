import React from "react";
import { renderSocialIcons } from "./SocialSection";

function SocialLinks() {
  return (
    <>
      {/* SOCIAL ICONS */}
      {/* Desktop: fixed right */}
      <div className="hidden lg:flex fixed top-1/2 right-4 transform -translate-y-1/2 z-50 flex-col space-y-4">
        {renderSocialIcons("vertical")}
      </div>
      {/* Mobile: full-width bottom section */}
      <div className="lg:hidden w-full flex justify-center gap-6 py-4 bg-white/5 backdrop-blur-sm z-50 fixed bottom-0 left-0">
        {renderSocialIcons("horizontal")}
      </div>
    </>
  );
}

export default SocialLinks;
