import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistic';
import { Notification } from './Notifications/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((this.state.good / total) * 100);
  }

  handleLeaveFeedback = param => {
    this.setState(prevState => {
      return { ...prevState, [param]: prevState[param] + 1 };
    });
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}
export { App };
// 