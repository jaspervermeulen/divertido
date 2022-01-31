import { ErrorMessage, Field } from 'formik';

function formikInput({
  errors,
  touched,
  as,
  name,
  id,
  type,
  label,
  htmlFor,
  className,
}) {
  return (
    <div className={`form-row ${className}`}>
      <label className="font-sans text-lg font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <Field
        as={as}
        type={type}
        name={name}
        id={id}
        className={`
        ${errors.name && touched.name ? 'input-error' : null} ${
          as === 'textarea' ? 'h-48' : 'h-11'
        } w-full rounded-md border-2 border-blue px-3 font-sans
      `}
      />
      <ErrorMessage name={name} component="span" className="text-red" />
    </div>
  );
}
export default formikInput;
