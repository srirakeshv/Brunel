import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Banner from "../../Components/Home/Banner";
import Accordin from "../../Components/Home/Accordin";
import TermsAndCopywrite from "../../Components/Common/TermsAndCopywrite";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Accordin />
      <TermsAndCopywrite />
    </div>
  );
};

export default Homepage;
