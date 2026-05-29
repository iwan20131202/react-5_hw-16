import { useFeedback } from "../FeedbackContext/FeedbackContext.js";
import { StatsList, StatsItem } from "./Statistics.styled.js";

export const Statistics = () => {
  const { good, neutral, bad, total, positivePercentage } = useFeedback();

  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {total}</StatsItem>
      <StatsItem>Positive feedback: {positivePercentage}%</StatsItem>
    </StatsList>
  );
};