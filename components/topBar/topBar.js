import Paragraph from '../paragraph/paragraph';

function TopBar({ children }) {
  return (
    <div className="mt-12">
      <Paragraph funky={false} size="large">
        {children}
      </Paragraph>
    </div>
  );
}

export default TopBar;
