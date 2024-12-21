import React from "react";

const LoadingButton = ({
  type = "button",
  isLoading,
  children,
  className,
  handleClick,
}) => {
  return (
    <>
      <button
        type={type}
        disabled={isLoading}
        onClick={handleClick}
        className="customGreenGradient customGreenGradientShadow py-[15px] rounded-full px-5 text-sm font-semibold"
      >
        {children}
      </button>
    </>
  );
};

export default LoadingButton;
