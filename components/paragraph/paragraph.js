/* eslint-disable no-nested-ternary */
function Paragraph({ children, funky = true, size, className }) {
  return (
    <p
      className={`${
        size === 'base'
          ? 'text-lg'
          : size === 'medium'
          ? 'text-2xl'
          : size === 'large'
          ? 'text-4xl'
          : 'text-md'
      } ${funky ? 'font-sans' : 'font-fries'} ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
