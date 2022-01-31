function Button({ buttonText }) {
  return (
    <button
      type="button"
      className="mt-12 h-12 w-full rounded-md bg-blue font-fries text-white hover:opacity-60"
    >
      {buttonText}
    </button>
  );
}

export default Button;
