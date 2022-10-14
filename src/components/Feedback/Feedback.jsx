import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = evt => {
    console.log('countTotalFeedback');
  };
  countPositiveFeedbackPercentage() {
    console.log('countPositiveFeedbackPercentage');
  }

  render() {
    const { step } = this.props;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.countTotalFeedback}>
            Good {step}
          </button>
          <button type="button" onClick={event => console.log(event)}>
            Neutral
          </button>
          <button type="button" onClick={event => console.log(event)}>
            Bad
          </button>
        </div>

        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good</li>
            <li>Neutral</li>
            <li>Bad</li>
            <li>Total</li>
            <li>Positive feedback</li>
          </ul>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {};
