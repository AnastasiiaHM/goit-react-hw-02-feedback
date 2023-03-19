import css from './Total.module.css';

export const Total = ({ total, positiv, negativ }) => {
  return (
    <>
      <p className={css.statistic__total}>Total: {total}</p>
      <p className={css.statistic__total}>Positive feedback: {positiv}%</p>
      <p className={css.statistic__total}>Negative feedback: {negativ}%</p>
    </>
  );
};
