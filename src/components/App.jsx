
import React, {useState} from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistic';
import { Notification } from './Notifications/Notification';

const App =()=> {

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // countTotalFeedback() {
  //   return this.state.good + this.state.neutral + this.state.bad;
  // }
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  //   countPositiveFeedbackPercentage() {
  //   const total = this.countTotalFeedback();
  //   if (total === 0) {
  //     return 0;
  //   }
  //   return Math.floor((this.state.good / total) * 100);
  // }
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor((good / total) * 100);
  };

  //  handleLeaveFeedback = param => {
  //   this.setState(prevState => {
  //     return { ...prevState, [param]: prevState[param] + 1 };
  //   });
  // };
  const handleLeaveFeedback = option => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
        default:
          break;
        
    }

  };

  // const total = this.countTotalFeedback();
  const total = countTotalFeedback();

  return (
  <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({good, neutral, bad})}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
  );
};


export { App };