import Paragraph from '../paragraph/paragraph';

function Heading({ children }) {
  return (
    <div className="mt-12 mb-6 font-fries text-4xl">
      <Paragraph size="xl">{children}</Paragraph>
    </div>
  );
}

export default Heading;
