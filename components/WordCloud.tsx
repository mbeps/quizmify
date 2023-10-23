"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

/**
 * Shows the most popular topics in a word cloud.
 * Larger words are more popular topics.
 * User can click on a topic to start a quiz on that topic.
 * @param formattedTopics (Array): Array of topics (text and value)
 * @returns (JSX.Element): Word Cloud (shows the most popular topics
 */
const WordCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        data={formattedTopics}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
};

export default WordCloud;
