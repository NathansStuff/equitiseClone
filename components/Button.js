const Button = ({ text }) => {
  return (
    <button type='button' class='button'>
      <span class='button__text'>{text}</span>
    </button>
  );
};

export default Button;
