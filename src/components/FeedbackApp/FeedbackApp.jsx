import { FeedbackProvider } from "../FeedbackContext/FeedbackContext.js";
import { Section } from "../Section/Section.jsx";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions.jsx";
import { StatisticsView } from "./StatisticsView.jsx";

export function FeedbackApp() {
  return (
    <FeedbackProvider>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          <StatisticsView />
        </Section>
      </div>
    </FeedbackProvider>
  );
}