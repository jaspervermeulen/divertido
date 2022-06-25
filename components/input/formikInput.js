function formikInput({ as, name, id, type, label, htmlFor, className }) {
  return (
    <div className={`form-row ${className} font-sans`}>
      <label className="font-sans text-lg font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        as={as}
        type={type}
        name={name}
        id={id}
        className={`
         ${
           as === 'textarea' ? 'h-48' : 'h-11'
         } w-full rounded-md border-2 border-blue px-3 font-sans
      `}
      />
    </div>
  );
}
export default formikInput;

/* {options?.map((option, idx) => (
          <option
            key={idx}
            id={idx}
            value={option.value}
            defaultValue={option.default}
            disabled={option.default}
          >
            {option.text}
          </option>
        ))} */
