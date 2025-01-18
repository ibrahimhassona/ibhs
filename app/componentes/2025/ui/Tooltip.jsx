import React from "react";

const Tooltip = ({ content, style  }) => {
  return (
    <span
      className={`absolute bg-black text-white cust-trans text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 text-nowrap w-auto ${style}`}
    >
      {content}
    </span>
  );
};

export default Tooltip;
