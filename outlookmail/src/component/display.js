import React from "react";

function Maildisplay() {
  return (
    <>
      <div className="maildisplay flex3">
        <div>
          <button className="focused">Focused</button>
          <button className="other focused">Other</button>
        </div>
        <div>
          <button className="filter focused">Filter</button>
          <i className="fas fa-chevron-down down"></i>
        </div>
      </div>
    </>
  );
}

export default Maildisplay;
