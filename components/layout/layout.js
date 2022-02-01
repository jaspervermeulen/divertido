function Layout({ children }) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="px-4 sm:px-8 xl:px-0">{children}</div>
    </div>
  );
}

export default Layout;
