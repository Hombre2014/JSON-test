const Button = ({ buttonText, item, setItem }) => {
  return (
    <button
      type="button"
      className={item === buttonText ? 'active' : ''}
      onClick={() => setItem(buttonText)}
    >
      {buttonText}
    </button>
  )
}

export default Button;
