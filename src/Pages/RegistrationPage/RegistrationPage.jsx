import React, { useState } from "react";
import Navbar from "../../Components/Common/Navbar";
import Registration from "../../Components/Auth/Registration";

const RegistrationPage = () => {
  const [navActive, setNavActive] = useState(true);
  const [submitted1, setSubmitted1] = useState(false);
  return (
    <div>
      <Navbar
        navActive={navActive}
        setNavActive={setNavActive}
        submitted1={submitted1}
      />
      <Registration setSubmitted1={setSubmitted1} />
    </div>
  );
};

export default RegistrationPage;
