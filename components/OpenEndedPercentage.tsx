import React from "react";
import { Card } from "@/components/ui/card";
import { Percent, Target } from "lucide-react";

type Props = {
  percentage: number;
};

/**
 * Displays the percentage of correct answers for open ended questions.
 * @param percentage (number): percentage of correct answers (number of correct answers / number of questions)
 * @returns (JSX.Element): Open Ended Percentage Card (shows the percentage of correct answers
 */
const OpenEndedPercentage = ({ percentage }: Props) => {
  return (
    <Card className="flex flex-row items-center p-2">
      <Target size={30} />
      <span className="ml-3 text-2xl opacity-75">{percentage}</span>
      <Percent className="" size={25} />
    </Card>
  );
};

export default OpenEndedPercentage;
