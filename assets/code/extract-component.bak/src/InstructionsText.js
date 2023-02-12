import React from "react";

const InstructionsText = React.memo(() => {
  return (
    <ul className="fadein">
      <ul>
        <li className="circle-li">
          Extract a <code>Dropdown</code> component that replaces the label and
          select elements
        </li>
        <li className="circle-li">
          Implement the <code>Dropdown</code> component so that it can be used
          with a list of objects of any type
        </li>
        <li className="circle-li">
          Show the selected user's name instead of their Id
        </li>
      </ul>
    </ul>
  );
});

export default InstructionsText;
