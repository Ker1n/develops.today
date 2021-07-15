import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Container } from "@material-ui/core";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "simple blog"}</title>
        <meta name="description" content={`simple blog ${description}`} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Blog, Posts"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div style={{ margin: "90px 0" }}>{children}</div>
    </>
  );
};

export default MainLayout;
