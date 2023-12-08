import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

type Props = FlexProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const DefaultContainer: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex flexDirection={"column"} height={"auto"} width={"100vw"} {...rest}>
      {children}
    </Flex>
  );
};

export default DefaultContainer;
