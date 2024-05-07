import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Registration = ({ setSubmitted1 }) => {
  const [inputData, setInputData] = useState({
    candidatename: "",
    email: "",
  }); //updating the data get using input fields
  const [buttonActive, setButtonActive] = useState(false); //setting disabled button as absent and enable submit button
  const [emailError, setEmailError] = useState(""); //setting error status
  const [submitted, setSubmitted] = useState(false); //if submmited without error display congratulations
  const [countdown, setCountdown] = useState(5); // Countdown timer
  const navigate = useNavigate(); //navigating to another page

  //handling onchange events
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handling submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    //checking for input field not empty to enable submit button
    if (inputData.candidatename !== "" && inputData.email !== "") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }

    let hasError = false;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    // Checking email
    if (!emailPattern.test(inputData.email)) {
      setEmailError("Enter a valid email address");
      hasError = true;
    }

    // Submit the form if no errors
    if (!hasError) {
      console.log(inputData);
      setEmailError("");
      setInputData({
        candidatename: "",
        email: "",
        phonenumber: "",
      });
      setSubmitted(true); //this set the congratualtions true
      setSubmitted1(true); //this sets the navbar x mark icon display- hidden
    }
  };

  //for tracing the input field
  useEffect(() => {
    if (inputData.candidatename !== "" && inputData.email !== "") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [inputData.candidatename, inputData.email]);

  //for tracing the countdown for automatic redirection to homepage
  useEffect(() => {
    if (submitted) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/");
        clearInterval(timer);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [submitted, navigate]);

  return (
    <div
      className={`flex justify-center ${
        submitted === true ? "items-start" : "items-center"
      }`}
      style={{ minHeight: "82vh" }}
    >
      {submitted === true ? (
        //congratualtions
        <div
          className="mt-10 flex flex-col items-center justify-between"
          style={{ minHeight: "70vh" }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.5" cy="40.5" r="28" fill="white" />
                <path
                  d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
                  fill="#28B246"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#2DA950] font-coverbyyourgrace text-4xl mb-4">
                Success Submitted
              </p>
              <p className="text-black font-manrope font-semibold text-5xl text-center mb-3">
                Congratulations
              </p>
              <p className="text-2xl text-[#727272] font-manrope text-center w-[620px]">
                Your request has been successfully submitted to us. We will
                validate your information and reach out to your shortly with
                updates
              </p>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-lg font-manrope">
              Redirecting you to Homepage in{" "}
              <span className="font-semibold">{countdown} Seconds</span>
            </p>
          </div>
        </div>
      ) : (
        //form display
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#2DA950] text-4xl font-coverbyyourgrace">
              Registration Form
            </p>
            <p
              className="text-5xl text-center font-manrope font-semibold w-[500px]"
              style={{ lineHeight: "57px" }}
            >
              Start your success Journey here!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 items-center"
          >
            <input
              type="text"
              name="candidatename"
              value={inputData.candidatename}
              placeholder="Enter your name"
              className="bg-[#EFEFEF] px-7 py-4 rounded-full w-[350px] outline-none"
              onChange={handleChange}
            />
            <div>
              <input
                type="text"
                name="email"
                value={inputData.email}
                placeholder="Enter your email"
                className={` ${
                  emailError !== "" ? "bg-[#F5F8FF]" : "bg-[#EFEFEF]"
                } px-7 py-4 rounded-full w-[350px] outline-none`}
                style={{
                  borderWidth: emailError !== "" ? "0.1px" : "0px",
                  borderColor: "#537FF1",
                }}
                onChange={(e) => handleChange(e)}
              />

              <div className="mt-2 text-sm h-3 font-medium text-[#FF0808]">
                {emailError !== "" && (
                  <p className="flex items-center gap-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8.89941"
                        y="6.00024"
                        width="3.2"
                        height="8"
                        fill="white"
                      />
                      <path
                        d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                        fill="#FF0808"
                      />
                    </svg>
                    <span>{emailError}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {buttonActive ? (
                <button
                  type="submit"
                  className="bg-black text-white px-7 py-4 rounded-full w-[350px]"
                >
                  Submit
                </button>
              ) : (
                <button
                  disabled="disabled"
                  className="bg-[#C9C9C9] text-white px-7 py-4 rounded-full w-[350px]"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
