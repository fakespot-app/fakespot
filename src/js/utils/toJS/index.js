import React from "react";
import { Iterable } from "immutable";

const toJS = WrappedComponent => (wrappedComponentProps) => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(
    wrappedComponentProps,
  ).reduce((newProps, wrappedComponentProp) => {
    const retProps = newProps;
    retProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE],
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE];
    return retProps;
  }, {});

  return <WrappedComponent {...propsJS} />;
};

export default toJS;