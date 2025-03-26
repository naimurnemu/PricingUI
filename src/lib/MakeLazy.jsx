import { lazy, Suspense } from "react";

const MakeLazy = (imported, loader = <></>) => {
  const LazyComp = lazy(imported);
  return (props) => (
    <Suspense fallback={loader}>
      <LazyComp {...props} />
    </Suspense>
  );
};

export default MakeLazy;
