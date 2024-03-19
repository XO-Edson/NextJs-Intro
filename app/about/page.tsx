import React from "react";
import Link from "next/link";
import { error } from "console";

export default function About() {
  //throw new Error("Not today");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to HomePage</Link>
    </>
  );
}
