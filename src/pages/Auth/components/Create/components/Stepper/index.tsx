import React from "react";
import {
  Stepper as BaseStepper,
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";

type Props = {
  activeStep: number;
};

const Stepper: React.FC<Props> = ({ activeStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <BaseStepper index={activeStep - 1} alignSelf={"flex-start"} width={"50%"}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
      ))}
    </BaseStepper>
  );
};

export default Stepper;
