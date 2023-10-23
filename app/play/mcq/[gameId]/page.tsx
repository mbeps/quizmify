import MCQ from "@/components/MCQ";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    gameId: string;
  };
};

/**
 * Page where the user takes the multiple choice quiz.
 */
const MCQPage = async ({ params: { gameId } }: Props) => {
  const session = await getAuthSession();

  // redirect to home page if user is not logged in
  if (!session?.user) {
    return redirect("/");
  }

  /**
   * Fetch the game from the database.
   */
  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          options: true,
        },
      },
    },
  });

  /**
   * Redirect to the quiz page if the game is not found or if the game is not a multiple choice quiz.
   */
  if (!game || game.gameType === "open_ended") {
    return redirect("/quiz");
  }
  return <MCQ game={game} />;
};

export default MCQPage;
