import checkicon from "../assets/images/icon-check.svg";
import ToggleBotton from "./ToggleBotton";
import Botton from "./Botton";
import thumb from "../assets/images/icon-slider.svg";

function MainContent({
  checkSubscibe,
  isCheck,
  handlePrice,
  displayPrice,
  pageView,
}) {
  return (
    <form className="mx-auto w-[80%] rounded-lg border bg-white xl:w-1/3">
      <section className="top-content flex flex-col items-center justify-center gap-4 border-b-2 py-5">
        <div className="display-total flex w-full items-center justify-around gap-7">
          <h1>{pageView}K PAGEVIEWS</h1>
          <div className="display-price hidden xl:block">
            <div className="price-text flex gap-1">
              <div className="Price text-xl"> ${displayPrice}</div>
              <div className="text-month">/Month</div>
            </div>
          </div>
        </div>
        <div className="input-range w-60 xl:w-80 ">
          <input
            type="range"
            min={0}
            max={300}
            className={`range range-sm range-primary [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:bg-center`}
            onChange={handlePrice}
          />
        </div>
        <div className="display-price block xl:hidden">
          <div className="price-text flex gap-1">
            <div className="Price text-xl"> ${displayPrice}</div>
            <div className="text-month">/Month</div>
          </div>
        </div>
        <div className="subscribe-type flex items-center justify-center gap-0 md:gap-8">
          <h1
            className={` text-sm font-extralight ${
              isCheck === false ? "text-[hsl(15,100%,70%)]" : ""
            }`}
          >
            Monthly Billing
          </h1>
          <ToggleBotton checkSubscibe={checkSubscibe} isCheck={isCheck} />
          <h1
            className={`${
              isCheck === true ? "text-[hsl(15,100%,70%)]" : ""
            } text-sm font-extralight`}
          >
            Yearly Billing{" "}
          </h1>
          <p className="ml-1 rounded-2xl bg-red-200 p-1 text-sm font-extralight text-red-700 xl:hidden">
            -25%
          </p>
          <p className="ml-1 hidden rounded-2xl bg-red-200 p-1 text-sm font-extralight text-red-700 xl:block">
            25% discount
          </p>
        </div>
      </section>
      <section className="bottom-content flex flex-col items-center justify-center gap-4 py-4 xl:flex-row xl:justify-around">
        <div className="text">
          <div className="fist-text flex items-center gap-2">
            <img className="h-3 w-3" src={checkicon} alt="check icon" />
            <p>Unlimited websites</p>
          </div>
          <div className="second-text flex items-center gap-2">
            <img className="h-3 w-3" src={checkicon} alt="check icon" />
            <p>100% data ownership</p>
          </div>
          <div className="third-text flex items-center gap-2">
            <img className="h-3 w-3" src={checkicon} alt="check icon" />
            <p>Email reports</p>
          </div>
        </div>

        <div className="submit-btn">
          <Botton btnName="Start my trial" />
        </div>
      </section>
    </form>
  );
}

export default MainContent;
