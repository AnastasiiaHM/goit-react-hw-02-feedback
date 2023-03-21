import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Total } from './Total/Total';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from '../Statistic/Statistic.module.css';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = nameBtn => {
    this.setState(prevState => {
      return {
        [nameBtn]: prevState[nameBtn] + 1,
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
    const nameBtns = Object.keys(this.state);
    const valuesBtn = Object.values(this.state);

    return (
      <div className={css.statistic__wraper}>
        <Section title="Please leave feedback">
          {valuesBtn.map((value, index) => (
            <span className={css.statistic_number} key={index}>
              {value}
            </span>
          ))}
          <div className={css.btnWraper}>
            {nameBtns.map(btn => (
              <Buttons
                nameBtn={btn}
                handleClick={this.handleClickBtn}
                key={btn}
              />
            ))}
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
              <Notification message="There is no feedback" />
            )}
          </div>
        </Section>
      </div>
    );
  }
}
