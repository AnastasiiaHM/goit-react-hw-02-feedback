import css from './Buttons.module.css';

export const Buttons = ({ nameBtn, handleClick }) => {
  return (
    <button
      type="button"
      className={css.statistic__btn}
      onClick={() => handleClick()}
    >
      {nameBtn}
    </button>
  );
};
