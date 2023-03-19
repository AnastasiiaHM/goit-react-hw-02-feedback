import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Total } from './Total/Total';
import css from '../Statistic/Statistic.module.css';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedback = () => {
    if (this.state.good) {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
    } else {
      return '0';
    }
  };

  countNegativeFeedback = () => {
    if (this.state.bad) {
      return ((this.state.bad / this.countTotalFeedback()) * 100).toFixed(2);
    } else {
      return '0';
    }
  };

  render() {
    return (
      <div className={css.statistic__wraper}>
        <h2 className={css.statistic__title}>Please leave feedback</h2>
        <span className={css.statistic_number}>{this.state.good}</span>
        <span className={css.statistic_number}>{this.state.neutral}</span>
        <span className={css.statistic_number}>{this.state.bad}</span>
        <div className={css.btnWraper}>
          <Buttons nameBtn="Good" handleClick={this.handleClickBtnGood} />
          <Buttons nameBtn="Neutral" handleClick={this.handleClickBtnNeutral} />
          <Buttons nameBtn="Bad" handleClick={this.handleClickBtnBad} />
        </div>
        <h3 className={css.statistic__totalTitle}>Statistick</h3>
        <div className={css.statistic__totalWraper}>
          {this.countTotalFeedback() !== 0 ? (
            <Total
              total={this.countTotalFeedback()}
              positiv={this.countPositiveFeedback()}
              negativ={this.countNegativeFeedback()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </div>
      </div>
    );
  }
}
