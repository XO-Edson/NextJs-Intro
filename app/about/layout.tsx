import React from "react";
import styles from "./Styles.module.css";

export const metadata = {
  title: "About Page",
  description: "Generated by Shai",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
