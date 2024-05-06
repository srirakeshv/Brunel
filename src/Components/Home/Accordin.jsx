import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Accordin = () => {
  const [active, setActive] = useState(null);
  const array = [
    {
      question: "Do you offer freelancers?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
  ];
  return (
    <div className="p-3">
      <div
        className="rounded-3xl p-3 flex justify-between"
        style={{ backgroundColor: "#E8EEE7" }}
      >
        <div>
          <p
            className="font-coverbyyourgrace text-3xl ml-32 mt-20"
            style={{ color: "#9E9D9D" }}
          >
            What’s on your mind
          </p>
          <p className="font-manrope font-semibold text-6xl ml-32">
            Ask Questions
          </p>
          <div className="mt-20">
            <svg
              width="491"
              height="475"
              viewBox="0 0 491 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
                fill="url(#paint0_linear_0_212)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_212"
                  x1="245.5"
                  y1="2.84126e-08"
                  x2="245"
                  y2="457.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="max-w-[550px] w-full mt-32 flex flex-col gap-9 mr-16">
          {array.map((ques, index) => (
            <div
              key={index}
              className="pb-7"
              style={{ borderBottomWidth: "0.1px", borderColor: "#D7D7D7" }}
            >
              <p className="text-black text-lg font-semibold flex justify-between items-center">
                <span className="max-w-[411px] w-full">{ques.question}</span>{" "}
                {active === index ? (
                  <Minus
                    className="cursor-pointer"
                    onClick={() => setActive(null)}
                  />
                ) : (
                  <Plus
                    className="cursor-pointer"
                    onClick={() => setActive(index)}
                  />
                )}
              </p>
              {active === index && <p className="mt-8">{ques.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordin;
