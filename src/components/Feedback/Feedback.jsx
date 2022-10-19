import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { NotificationMessage } from '../Notification/Notification';
import { StatisticsBox } from '../Statistics/Statistics';
// import { Section } from 'components/Section/Section.styled';
import { SectionBox } from 'components/Section/Section';

export class Feedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positivePercentage: 0,
  };

  countGoodFeedback = async evt => {
    await this.setState({ good: this.state.good + 1 });
    await this.countTotalFeedback();
    await this.countPositiveFeedbackPercentage();
  };

  countNeutralFeedback = async evt => {
    await this.setState({ neutral: this.state.neutral + 1 });
    await this.countTotalFeedback();
    await this.countPositiveFeedbackPercentage();
  };

  countBadFeedback = async evt => {
    await this.setState({ bad: this.state.bad + 1 });
    await this.countTotalFeedback();
    await this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = state => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };

  countPositiveFeedbackPercentage = state => {
    this.setState({
      positivePercentage: Math.floor(
        (this.state.good / this.state.total) * 100
      ),
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        {/* <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/> */}
        <div>
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
        </div>
        <SectionBox title="Statistics">
          <StatisticsBox
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </SectionBox>

        {/* <div>
          <h2>Statistics</h2>
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
        </div> */}
      </div>
    );
  }
}

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
