import { Dispatch, Fragment, useMemo } from "react";
import keyword_extractor from "keyword-extractor";

type Props = {
  answer: string;
  setBlankAnswer: Dispatch<React.SetStateAction<string>>;
};

const blank = "_____";

/**
 * Placeholder for the answer.
 * The answer is split into parts by the blanks.
 * The blanks are replaced with input elements.
 * This is then displayed to the user and compared to the actual answer.
 * @param answer (string): The answer to the question.
 * @param setBlankAnswer (React.Dispatch<React.SetStateAction<string>>): The setter for the answer with blanks.
 * @returns (JSX.Element): The answer with blanks (input elements).
 */
const BlankAnswerInput = ({ answer, setBlankAnswer }: Props) => {
  /**
   * Extract the keywords from the answer.
   * @returns (string[]): The keywords.
   */
  const keywords = useMemo(() => {
    const words = keyword_extractor.extract(answer, {
      language: "english",
      remove_digits: true,
      return_changed_case: false,
      remove_duplicates: false,
    });
    // mix the keywords and pick 2
    const shuffled = words.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [answer]);

  /**
   * Replace the keywords with blanks.
   * @returns (string): The answer with blanks.
   */
  const answerWithBlanks = useMemo(() => {
    const answerWithBlanks = keywords.reduce((acc, curr) => {
      return acc.replaceAll(curr, blank);
    }, answer);
    setBlankAnswer(answerWithBlanks);
    return answerWithBlanks;
  }, [answer, keywords, setBlankAnswer]);

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {/* replace the blanks with input elements */}
        {answerWithBlanks.split(blank).map((part, index) => {
          return (
            <Fragment key={index}>
              {part}
              {index === answerWithBlanks.split(blank).length - 1 ? (
                ""
              ) : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                  type="text"
                />
              )}
            </Fragment>
          );
        })}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;
