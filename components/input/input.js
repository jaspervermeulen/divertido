function Input({
  labelText,
  type,
  fieldName,
  fieldId,
  defaultText,
  options = [],
  className,
}) {
  if (type === 'select') {
    return (
      <label>
        <p className="font-sans text-lg font-medium">{labelText}</p>
        <select
          name={fieldName}
          id={fieldId}
          className="h-11 w-full cursor-pointer appearance-none rounded-md border-2 border-blue bg-white px-3 font-sans"
        >
          <option value="" selected disabled hidden>
            {defaultText}
          </option>
          {options.map((option, id) => (
            <option id={id} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
  if (type === 'textarea') {
    return (
      <label>
        <p className={`font-sans text-lg font-medium ${className}`}>
          {labelText}
        </p>
        <textarea
          type={type}
          className="h-48 w-full rounded-md border-2 border-blue px-3 font-sans"
        />
      </label>
    );
  }
  return (
    <label>
      <p className={`font-sans text-lg font-medium ${className}`}>
        {labelText}
      </p>
      <input
        type={type}
        className="h-11 w-full rounded-md border-2 border-blue px-3 font-sans"
      />
    </label>
  );
}

export default Input;
