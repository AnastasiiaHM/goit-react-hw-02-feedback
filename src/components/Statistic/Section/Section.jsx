import css from '../Statistic.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.statistic__title}>{title}</h2>
      {children}
    </section>
  );
};
