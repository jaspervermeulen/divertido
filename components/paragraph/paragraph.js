function Paragraph({ children, size, color, type }) {
  if (size === 'xl') {
    return <p className={`text-4xl text-${color} font-${type}`}>{children}</p>;
  }
  if (size === 'lg') {
    return <p className={`text-2xl text-${color} font-${type}`}>{children}</p>;
  }
  if (size === 'md') {
    return <p className={`text-xl text-${color} font-${type}`}>{children}</p>;
  }
  if (size === 'sm') {
    return <p className={`text-lg text-${color} font-${type}`}>{children}</p>;
  }
}

export default Paragraph;
