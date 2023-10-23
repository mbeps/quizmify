import OpenEnded from "@/components/OpenEnded";
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
 * Page where the user takes the open ended quiz.
 * User needs to fill in the gaps in the sentence.
 * @param param0 (Props): Game ID (string)
 * @returns (JSX.Element): Page where the user takes the open ended quiz (open ended quiz component)
 */
const OpenEndedPage = async ({ params: { gameId } }: Props) => {
  const session = await getAuthSession();

  // redirect to home page if user is not logged in
  if (!session?.user) {
    return redirect("/");
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true,
          question: true,
          answer: true,
        },
      },
    },
  });

  // redirect to the quiz page if the game is not found or if the game is not an open ended quiz
  if (!game || game.gameType === "mcq") {
    return redirect("/quiz");
  }
  return <OpenEnded game={game} />;
};

export default OpenEndedPage;
