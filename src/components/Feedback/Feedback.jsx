import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Feedback extends Component {
  // static defaultProps = {
  //   step: 1,
  // };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  // countGoodFeedback = evt => {
  //   this.setState((states, props) => ({ good: this.state.good + 1 }));
  // };

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
    // const { step } = this.props;
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
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

        <div>
          <h2>Statistics</h2>
          {total > 0 && (
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {total}</li>
              <li>Positive feedback: {positivePercentage}%</li>
            </ul>
          )}
        </div>
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
  }).isRequired,
};
