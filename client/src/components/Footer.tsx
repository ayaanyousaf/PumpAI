import React from "react";

function Footer() {
  return (
    <div className="flex justify-center text-center items-center bg-primary h-10">
      <p className="text-sm font-[Poppins]">
        {" "}
        © {new Date().getFullYear()} PumpAI. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
