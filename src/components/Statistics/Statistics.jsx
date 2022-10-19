import { Statistics } from '../Statistics/Statistics.styled';
import { NotificationMessage } from '../Notification/Notification';

export const StatisticsBox = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Statistics>
      {/* <h2>Statistics</h2> */}
      {total > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <NotificationMessage message="There is no feedback" />
      )}
    </Statistics>
  );
};
