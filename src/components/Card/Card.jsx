import css from './Card.module.css';

import { Logo } from 'components/Logo/Logo';
import { User } from 'components/User/User';

export const Card = ({ onBtnClick, isClicked }) => {
  return (
    <div className={css.Card}>
      <Logo />
      <User isClicked={isClicked} onBtnClick={onBtnClick} />
    </div>
  );
};
