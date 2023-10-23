import { prisma } from "@/lib/db";
import { checkAnswerSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import stringSimilarity from "string-similarity";

/**
 * Responsible for handling a POST request to check the user's answer for a question in a quiz game.
 * The endpoint receives a JSON object in the request body that contains the `questionId` and `userInput` properties.
 * It then validates the request body using the `checkAnswerSchema` schema.
 * After validating the request body, the endpoint retrieves the question from the database using the `questionId`.
 * If the question is not found, it returns a 404 error response.
 * If the question is found, the endpoint updates the `userAnswer` property of the question with the `userInput`.
 * If the question is of type `mcq`, the endpoint checks if the `userInput` matches the correct answer and updates the `isCorrect` property of the question accordingly.
 * It then returns a JSON response with the `isCorrect` property.
 * If the question is of type `open_ended`, the endpoint calculates the percentage similarity between the `userInput` and the correct answer using the `stringSimilarity` library.
 * It then updates the `percentageCorrect` property of the question with the percentage similarity and returns a JSON response with the `percentageSimilar` property.
 * If there is an error during the request body validation, the endpoint returns a 400 error response with the validation issues.
 * @param req (Request): The incoming request object for checking answers
 * @param res (Response): The outgoing response for checking answers (JSON)
 * @returns (NextResponse): The response for checking answers (JSON)
 */
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { questionId, userInput } = checkAnswerSchema.parse(body);
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });
    if (!question) {
      return NextResponse.json(
        {
          message: "Question not found",
        },
        {
          status: 404,
        }
      );
    }
    await prisma.question.update({
      where: { id: questionId },
      data: { userAnswer: userInput },
    });
    if (question.questionType === "mcq") {
      const isCorrect =
        question.answer.toLowerCase().trim() === userInput.toLowerCase().trim();
      await prisma.question.update({
        where: { id: questionId },
        data: { isCorrect },
      });
      return NextResponse.json({
        isCorrect,
      });
    } else if (question.questionType === "open_ended") {
      let percentageSimilar = stringSimilarity.compareTwoStrings(
        question.answer.toLowerCase().trim(),
        userInput.toLowerCase().trim()
      );
      percentageSimilar = Math.round(percentageSimilar * 100);
      await prisma.question.update({
        where: { id: questionId },
        data: { percentageCorrect: percentageSimilar },
      });
      return NextResponse.json({
        percentageSimilar,
      });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error.issues,
        },
        {
          status: 400,
        }
      );
    }
  }
}
