import { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import Image from "next/image";

type Props = { finished: boolean };

/**
 * Texts to display while loading.
 * A random text is chosen every 2 seconds.
 */
const loadingTexts = [
  "Generating questions...",
  "Unleashing the power of curiosity...",
  "Diving deep into the ocean of questions..",
  "Harnessing the collective knowledge of the cosmos...",
  "Igniting the flame of wonder and exploration...",
];

/**
 * Loading screen while the questions are being generated.
 * @param finished (boolean): Whether the game has ended.
 * @returns (JSX.Element): The loading screen.
 */
const LoadingQuestions = ({ finished }: Props) => {
  const [progress, setProgress] = useState(10);
  const [loadingText, setLoadingText] = useState(loadingTexts[0]);

  /**
   * Choose a random loading text every 2 seconds.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Update the progress bar every 100ms.
   * If the game has ended, the progress bar is not updated.
   * The progress bar is updated by calling `setProgress`.
   * The progress bar is capped at 100.
   * The progress bar is incremented by a random value between 0 and 2.
   * The progress bar is incremented by 0.5 if the random value is less than 0.1.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (finished) return 100;
        if (prev === 100) {
          return 0;
        }
        if (Math.random() < 0.1) {
          return prev + 2;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [finished]);

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
      <Image src={"/loading.gif"} width={400} height={400} alt="loading" />
      <Progress value={progress} className="w-full mt-4" />
      <h1 className="mt-2 text-xl">{loadingText}</h1>
    </div>
  );
};

export default LoadingQuestions;
