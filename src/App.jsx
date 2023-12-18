import "./App.css";
import Header from "../src/components/Header";
import MainContent from "../src/components/MainContent";
import { useState } from "react";

function App() {
  const [subscribeType, setSubscribeType] = useState("Monthly");
  const [isCheck, setIsCheck] = useState(false);
  const [price, setPrice] = useState(160);
  const handlePrice = (e) => {
    let value = e.target.value;
    setPrice(value);
  };
  const checkSubscibe = () => {
    if (isCheck === true) {
      setIsCheck(false);
      setSubscribeType("Monthly");
    } else {
      setIsCheck(true);
      setSubscribeType("Yearly");
    }
  };
  const calculatePageView = () => {
    return price * 0.625;
  };
  return (
    <div className="relative overflow-x-hidden">
      <svg
        className="absolute -z-50"
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="449"
      >
        <path
          fill="#F1F5FE"
          fillRule="evenodd"
          d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
        />
      </svg>
      <Header />
      <MainContent
        checkSubscibe={checkSubscibe}
        isCheck={isCheck}
        handlePrice={handlePrice}
        displayPrice={price}
        pageView={calculatePageView()}
      />
    </div>
  );
}

export default App;
