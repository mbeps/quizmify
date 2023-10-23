import { prisma } from "@/lib/db";
import { endGameSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";

/**
 * Finishes the game.
 * It then validates the request body using the endGameSchema schema.
 * After validating the request body, the endpoint retrieves the game from the database using the gameId.
 * If the game is not found, it returns a 404 error response.
 * If the game is found, the endpoint updates the timeEnded property of the game with the current date and time.
 * @param req (Request): The request object.
 * @param res (Response): The response object.
 * @returns (NextResponse): The response object.
 */
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { gameId } = endGameSchema.parse(body);

    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });
    if (!game) {
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        }
      );
    }
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        timeEnded: new Date(),
      },
    });
    return NextResponse.json({
      message: "Game ended",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
