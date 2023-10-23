import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

type Props = {
  correct_answers: number;
  wrong_answers: number;
};

/**
 * Card showing the number of correct and wrong answers for multiple choice questions.
 * @param correct_answers (number): number of correct answers
 * @param wrong_answers (number): number of wrong answers (number of correct answers / number of questions
 * @returns (JSX.Element): MCQ Counter Card (shows the number of correct and wrong answers)
 */
const MCQCounter = ({ correct_answers, wrong_answers }: Props) => {
  return (
    <Card className="flex flex-row items-center justify-center p-2">
      <CheckCircle2 color="green" size={30} />
      <span className="mx-3 text-2xl text-[green]">{correct_answers}</span>

      <Separator orientation="vertical" />

      <span className="mx-3 text-2xl text-[red]">{wrong_answers}</span>
      <XCircle color="red" size={30} />
    </Card>
  );
};

export default MCQCounter;
