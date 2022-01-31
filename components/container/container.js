function Container({ children }) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Container;
