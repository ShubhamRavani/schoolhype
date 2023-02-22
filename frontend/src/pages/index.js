import Head from "next/head";
import { Inter } from "@next/font/google";
import Testimonials from "@/components/Testimonials/Testimonials";
import Homepage from "@/components/Homepage/Homepage";
import Features from "@/components/Features/Features";
import Contact from "@/components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <title>SchoolHype Schools Marketing LLP</title>
        <meta name="description" content="SchoolHype Schools Marketing LLP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <Homepage />

      <Features />

      <div
        style={{
          margin: "100px 0px",
        }}
      >
        <Testimonials />
      </div>

      <div
        style={{
          margin: "100px 0px",
        }}
      >
        <Contact />
      </div>
    </div>
  );
}
