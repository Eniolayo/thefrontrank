import React from "react";

export default function Container({
  children,
}: {
  children: JSX.Element;
}): React.JSX.Element {
  return <section className="w-[90%] mx-auto">{children}</section>;
}
