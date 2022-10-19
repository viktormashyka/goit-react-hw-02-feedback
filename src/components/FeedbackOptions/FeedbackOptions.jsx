import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptionsBox = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptions>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={this.countGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={this.countNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={this.countBadFeedback}>
        Bad
      </button>
    </FeedbackOptions>
  );
};
