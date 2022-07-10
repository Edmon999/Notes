import React from "react";

interface ILoadingProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading, children }) => {
  return isLoading ? <div>Loading...</div> : <div>{children}</div>;
};

export default Loading;
