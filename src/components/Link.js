const Link = ({ href, className, children }) => {
  const handleOnClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();

    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} className={className} onClick={handleOnClick}>
      {children}
    </a>
  );
};

export default Link;
