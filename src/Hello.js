import React from "react";

const Hello = ({ color, name }) => {
  return <div style={{ color }}>HI {name}</div>;
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
