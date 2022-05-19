import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  delete: "button--delete",
  submit: "button--submit",
};

function Button({ type, valid }) {
  return (
    <button
      type={type}
      className={`button ${BUTTON_TYPE_CLASSES[type]} ${!valid && "btn--disabled"}`}
    >
      SUBMIT
    </button>
  );
}

export default Button;
