import React from "react";

import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import QuizCreation from "@/components/forms/QuizCreation";

export const metadata = {
  title: "Quiz | Quizmify",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

/**
 * Page where the user enters the quiz topic and creates the quiz.
 * @param searchParams (Props): Search parameters (topic)
 * @returns (JSX.Element): Quiz page (quiz creation form)
 */
const Quiz = async ({ searchParams }: Props) => {
  const session = await getAuthSession();

  // redirect to home page if user is not logged in
  if (!session?.user) {
    redirect("/");
  }
  return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default Quiz;
