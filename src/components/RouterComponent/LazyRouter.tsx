import React, { Suspense } from "react";

const LazyRouter: React.FC = ({ path, name, component, children }: any) => {
  const LazyComponent = React.lazy(() => import(component));

  return (
    <Suspense fallback={"Loading"}>
      <LazyComponent>{children}</LazyComponent>
    </Suspense>
  );
};

export default LazyRouter;
