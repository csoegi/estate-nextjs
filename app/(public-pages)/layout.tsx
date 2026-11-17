import React from "react";
import { Navbar } from "@/components/navbar";
import LenisScroll from "@/components/lenis-scroll";

export const metadata = {
  title: "RE House - Citraland Raffles Surabaya",
  description: "Discover the architecture, spaces, and details of RE House at Citraland Raffles Surabaya.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisScroll />
      <Navbar />
      {children}
    </>
  );
}
