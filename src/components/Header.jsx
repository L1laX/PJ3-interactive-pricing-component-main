import bgHeader from "../assets/images/pattern-circles.svg";

const Header = () => {
  return (
    <>
    <div className="bg-imgae gap-3  bg-contain bg-center bg-no-repeat flex h-40 flex-col items-center justify-center">
      <img src={bgHeader} alt="" />
    <div
      className=" z-50 mx-6 my-10 flex h-40 flex-col items-center justify-center  gap-3  bg-contain bg-center bg-no-repeat p-6 absolute "
    >
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
