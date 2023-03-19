import css from './App.module.css';
import { Statistic } from './Statistic/Statistic';

export const App = () => {
  return (
    <div className={css.bodyApp}>
      React homework template
      <Statistic />
    </div>
  );
};
