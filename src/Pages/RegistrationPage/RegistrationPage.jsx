import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Common/Navbar";
import Registration from "../../Components/Auth/Registration";

const RegistrationPage = () => {
  const [navActive, setNavActive] = useState(true);
  /* setting the remaning bordered rounded, navmenus as 
  absent when in registartion page and activates the x mark icon*/

  const [submitted1, setSubmitted1] = useState(false);
  /*setting submitted to true in registration for removing the x mark icon 
  in the navigationbar when the form is submitted correctly*/

  useEffect(() => {
    document.title = "Brunel | Registration";
  }, []); //tracing the page title to update it

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
