import { useFeedback } from "../FeedbackContext/FeedbackContext.js";
import { ButtonGroup, Button } from "./FeedbackOptions.styled.js";

export const FeedbackOptions = () => {
  const { handleLeaveFeedback } = useFeedback();
  const options = ["good", "neutral", "bad"];

  return (
    <ButtonGroup>
      {options.map((option) => (
        <Button
          key={option}
          option={option}
          onClick={() => handleLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};