import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-imgae flex  h-40 flex-col items-center justify-center gap-3 bg-contain bg-center bg-no-repeat">
        <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
          <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
            <circle cx="63" cy="82" r="62.5" />
            <circle cx="105" cy="41" r="40.5" />
          </g>
        </svg>

        <div className=" absolute z-50 mx-6 my-10 flex h-40 flex-col items-center  justify-center  gap-3 bg-contain bg-center bg-no-repeat p-6 ">
          <h1 className="text-center text-xl font-bold">
            Simple, traffic-based pricing
          </h1>
          <p className="mx-11 text-center text-sm">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
