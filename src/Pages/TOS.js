import React from "react";
import Terms from "../Media/Terms.pdf";
function TOS() {
  return (
    <div>
      <iframe src={Terms} className="h-screen w-screen" />
    </div>
  );
}

export default TOS;
