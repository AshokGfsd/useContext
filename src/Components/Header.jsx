import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount, clear,setClear,TotalCard } = useUserContext();

  const handleClear = () => {
    setClear(true)
  };
  return (
    <>
      {TotalCard&&!clear&&<header className="hide">
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">TOTAL QTY: {cardQuantity}</div>
          <div className="col">TOTAL Price : ${cardAmount.toFixed(2)}</div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to pay</button>&nbsp;
            <button className="btn btn-primary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </header>}
    </>
  );
}

export default Header;
