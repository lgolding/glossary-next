import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Glossary Application</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {children}
    </Fragment>
  );
};

export default Layout;
