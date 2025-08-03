import { FC, ReactNode } from "react";

type ComponentWithProps<P = Record<string, unknown>> = [FC<P>, P?];

export const buildProvidersTree = (
  componentsWithProps: ComponentWithProps[]
) => {
  const initialComponent: FC<{ children: ReactNode }> = ({ children }) => (
    <>{children}</>
  );

  initialComponent.displayName = "InitialComponent";

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}], index) => {
      const WrappedComponent: FC<{ children: ReactNode }> = ({ children }) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );

      WrappedComponent.displayName = `ProviderWrapper${index}`;

      return WrappedComponent;
    },
    initialComponent
  );
};
