import React, { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../lazyload/pages/LazyLoad1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../lazyload/pages/LazyLoad2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../lazyload/pages/LazyLoad3")
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];
