function FullContainer({ children }) {
  return (
    <div className="bg-blue">
      <div className="mx-auto max-w-screen-xl">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default FullContainer;
