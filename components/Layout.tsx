import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default Layout;
