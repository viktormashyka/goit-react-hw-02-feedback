import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsBox } from '../Statistics/Statistics';
import { SectionBox } from 'components/Section/Section';
import { FeedbackOptionsBox } from '../FeedbackOptions/FeedbackOptions';

const options = Object.freeze({ good: 'Good', neutral: 'Neutral', bad: 'Bad' });

export class Feedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // selectedBtn: null,
    // activeOptionInx: 0,
    // total: 0,
    // positivePercentage: 0,
  };

  // optionsObject = Object.keys(this.state);

  // selectedBtnMethod = option => async () => {
  //   await this.setState({ selectedBtn: option });
  //   await this.onLeaveFeedback();
  // };

  onLeaveFeedback = option => async () => {
    await this.setState({ selectedBtn: option });
    console.log('this.state.selectedBtn, ', this.state.selectedBtn);
    if (this.state.selectedBtn === options.good) {
      await this.countGoodFeedback();
    } else if (this.state.selectedBtn === options.neutral) {
      await this.countNeutralFeedback();
    } else if (this.state.selectedBtn === options.bad) {
      await this.countBadFeedback();
    } else {
      console.log('this.state.selectedBtn, ', this.state.selectedBtn);
    }
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
    const { good, neutral, bad, total, positivePercentage, selectedBtn } =
      this.state;
    const { onLeaveFeedback } = this;
    return (
      <div>
        <SectionBox title="Please leave feedback">
          <FeedbackOptionsBox
            options={options}
            onLeaveFeedback={onLeaveFeedback}
            selected={selectedBtn}
          />
        </SectionBox>

        {/* <div onClick={this.onLeaveFeedback}>
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
        </div> */}

        <SectionBox title="Statistics">
          <StatisticsBox
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </SectionBox>
      </div>
    );
  }
}

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
