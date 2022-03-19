const Button = ({ text }) => {
  return (
    <button type='button' className='button'>
      <span className='button__text'>{text}</span>
    </button>
  );
};

export default Button;
