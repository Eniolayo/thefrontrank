// import React from "react";

// export default function Text(): JSX.Element {
//   return (
//     <p className="text-secondary-100 max-w-2xl">
//       Progressively incentivize cooperative systems through technically sound
//       functionalities. The credibly productivate seamless data.
//     </p>
//   );
// }

import React, { ReactNode, CSSProperties, ElementType } from "react";

type TextProps = {
  variant: "primary" | "secondary" | "accent";
  children: ReactNode;
  style?: CSSProperties;
  as?: Exclude<ElementType, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
};

const Text: React.FC<TextProps> = ({
  variant,
  children,
  style,
  as: Element = "p",
}) => {
  let textStyle: CSSProperties = {};

  switch (variant) {
    case "primary":
      textStyle = {
        color: "blue",
        fontSize: "16px",
        fontWeight: "bold",
        ...style,
      };
      break;
    case "secondary":
      textStyle = {
        color: "gray",
        fontSize: "14px",
        ...style,
      };
      break;
    case "accent":
      textStyle = {
        color: "green",
        fontSize: "18px",
        ...style,
      };
      break;
    default:
      textStyle = style || {};
      break;
  }

  return <Element style={textStyle}>{children}</Element>;
};

export default Text;
