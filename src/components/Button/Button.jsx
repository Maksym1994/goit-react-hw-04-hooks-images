import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={s.ButtonClick}>
      <button onClick={onClick} type="button" className={s.Button}>
    Load more...
  </button>
  </div>
    
  );
};

export default Button;
