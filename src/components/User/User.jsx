import css from './User.module.css';
import userpic from '../../img/Hansel.png';
export const User = ({ isClicked, onBtnClick }) => {
  const followers = isClicked ? 100501 : 100500;
  const correctFollowers =
    String(followers).slice(0, 3) + ',' + String(followers).slice(3);
  return (
    <div className={css.User}>
      <span className={css.Line}></span>
      <div className={css.UserPic}>
        <img src={userpic} alt="user pic" />
      </div>
      <p className={css.Tweets}>777 tweets</p>
      <p>{correctFollowers} followers</p>
      <button
        style={{ backgroundColor: isClicked ? '#5CD3A8' : '#EBD8FF' }}
        className={css.Button}
        type="button"
        aria-label="following button"
        onClick={() => onBtnClick()}
      >
        {isClicked ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
