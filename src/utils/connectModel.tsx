import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export default (Component: React.FC, getModel: any) => {
  const ConnectComponent: React.FC<RouterPageProps> = () => {
    return (
      <DynamicModuleLoader modules={[getModel()]}>
        <Component />
      </DynamicModuleLoader>
    );
  };

  return ConnectComponent;
};
