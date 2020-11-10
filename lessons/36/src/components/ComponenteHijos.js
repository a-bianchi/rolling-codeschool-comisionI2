import React from "react";

const ComponenteHijos = (props) => {
  console.log(props.children);
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};

export default ComponenteHijos;
