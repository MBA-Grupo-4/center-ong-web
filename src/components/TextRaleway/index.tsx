import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

type Props = TextProps & {
  children: string;
  fontWeight?: string;
};

const TextRaleway: React.FC<Props> = ({ children, fontWeight, ...rest }) => {
  return (
    <Text fontFamily={"Raleway"} {...rest} fontWeight={fontWeight || "regular"}>
      {children}
    </Text>
  );
};

export default TextRaleway;
