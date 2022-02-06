function formikButton({ label, className }) {
  return (
    <button
      type="submit"
      className={`${className} h-12 w-full rounded-md bg-blue font-fries text-white hover:opacity-60`}
    >
      {label}
    </button>
  );
}

export default formikButton;
