import * as React from "react";
import "../components/sky.css";

const Sky = () => (
  <div id='sky'>
    {/* Far layer - background stars */}
    <span>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
    {/* Mid layer - medium stars */}
    <span>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
    {/* Near layer - foreground stars */}
    <span>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
      <s></s>
    </span>
  </div>
);

export default Sky;
