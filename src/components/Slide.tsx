import React from "react";

interface Props {
  picture?: string;
}

export default function Slide({ picture }: Props) {
  const style = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${picture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return <div style={style} />;
}
