import React, { ReactNode, CSSProperties } from "react";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  style?: CSSProperties;
};

const Heading: React.FC<HeadingProps> = ({ level, children, style }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};

export default Heading;
