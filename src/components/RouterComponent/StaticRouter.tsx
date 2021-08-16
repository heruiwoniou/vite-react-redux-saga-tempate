import React from "react";

const StaticRouter: React.FC = ({ path, name, component: Component, children }: any) => {
  return <Component>{children}</Component>;
};

export default StaticRouter;
