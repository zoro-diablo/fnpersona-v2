const Section = ({ className, customPaddings, children }) => {
  return (
    <div
      className={`
          relative 
          ${customPaddings || `px-[6%] py-[6%] `} 
          ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default Section;
