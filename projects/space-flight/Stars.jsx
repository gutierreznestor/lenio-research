import * as React from "react";

export const Stars = ({ scale }) => {
  const scaleN = React.useMemo(() => {
    return Math.log(Math.log(scale(5193000001))) * 1.0313 + 0.2369 || 3.43;
  }, [scale]);
  return (
    <svg width={2000} height={760} y={-150} style={{ overflow: "hidden", opacity:0.5 }}>
      <g
        transform={`translate(0, 400) scale(${scaleN}) translate(0, -400)`}
        style={{ transition: "all 0.4s ease-out" }}>
        <image href={"./stars-bg.svg"} width="1212" height="900" />
        <image href={"./stars.svg"} width="1212" height="900" />
        <image href={"./constelations.svg"} width="1212" height="900" />
      </g>
    </svg>
  );
};

Stars.propTypes = {};