import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

type Props = { accuracy: number };

/**
 * Card showing the accuracy of the user.
 * @param param0 ({ accuracy }: Props): accuracy is the accuracy of the user (number of correct answers / number of questions)
 * @returns (JSX.Element): Accuracy Card (shows the accuracy of the user)
 */
const AccuracyCard = ({ accuracy }: Props) => {
  accuracy = Math.round(accuracy * 100) / 100;
  return (
    <Card className="md:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Average Accuracy</CardTitle>
        <Target />
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium">{accuracy.toString() + "%"}</div>
      </CardContent>
    </Card>
  );
};

export default AccuracyCard;
