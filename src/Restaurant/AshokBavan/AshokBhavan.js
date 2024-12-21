import React from "react";
import BreakFastVeg from "./Foods/BreakFastVeg";
import LunchVeg from "./Foods/LunchVeg";

const AshokBhavan = () => {
  return (
    <div className="pt-2 pb-5 d-flex flex-column align-items-center">
      {/* <p className="sub-title fw-bold mb-2">H I G H&nbsp;&nbsp;&nbsp;S T A N D A R D&nbsp;&nbsp;&nbsp;V E G E T A R I A N I S M</p> */}
      <p className='fw-bold fs-3 mb-3 sub-title text-decoration-underline'>TIFFIN</p>
      <BreakFastVeg />
      <hr className='mt-5 finish-line'/>
      <p className='text-center fw-bold fs-3 mt-5 mb-3 sub-title text-decoration-underline'>LUNCH</p>
      <LunchVeg/>
    </div>
  );
};

export default AshokBhavan;
