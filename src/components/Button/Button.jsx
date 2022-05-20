import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  button: "button--delete",
  submit: "button--submit",
};

function Button({ type, valid, title, onDelete }) {
  return (
    <button
      type={type}
      className={`button ${BUTTON_TYPE_CLASSES[type]} ${!valid && "btn--disabled"}`}
      onClick={onDelete}
    >
      {title}
    </button>
  );
}

export default Button;
