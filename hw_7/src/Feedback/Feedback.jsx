import { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>

        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>

        <h2>Statistics</h2>

        {total === 0 ? (
          <p>No feedback given</p>
        ) : (
          <>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {countPositiveFeedbackPercentage}%</p>
          </>
        )}
      </>
    );
  }
}

export default Feedback;   