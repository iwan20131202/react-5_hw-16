import { useFeedback } from "../FeedbackContext/FeedbackContext.js";
import { Statistics } from "../Statistics/Statistics.jsx";
import { Notification } from "../Notification/Notification.jsx";

export const StatisticsView = () => {
  const { total } = useFeedback();

  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return <Statistics />;
};