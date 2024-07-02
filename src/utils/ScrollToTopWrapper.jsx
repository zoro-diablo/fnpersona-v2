import useScrollToTop from "./useScrollToTop";

const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return children;
};

export default ScrollToTopWrapper;
