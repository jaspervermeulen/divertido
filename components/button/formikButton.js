function formikButton({ dirty, isValid, label, className }) {
  return (
    <button
      type="submit"
      className={`${
        !(dirty && isValid) ? 'opacity-60' : ''
      } ${className} h-12 w-full rounded-md bg-blue font-fries text-white hover:opacity-60`}
      disabled={!(dirty && isValid)}
    >
      {label}
    </button>
  );
}

export default formikButton;
