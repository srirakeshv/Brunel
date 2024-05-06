import React from "react";
import "tailwindcss/tailwind.css";

const TermsAndCopywrite = () => {
  return (
    <div className="p-3">
      <div
        className="rounded-3xl p-9 py-12 flex justify-between"
        style={{ backgroundColor: "#E8EEE7" }}
      >
        <p className="font-manrope text-black text-base flex gap-4 items-center">
          &copy; Talup 2023. All rights reserved
        </p>
        <div className="flex gap-7 items-center">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCopywrite;
