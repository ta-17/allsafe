"use client";

import Image from "next/image";
import { TypographyH1 } from "@/typography/h1";
import { TypographyLead } from "@/typography/lead";
import { Button } from "@/components/ui/button";
import Feature from "@/components/hero/feature";
import Hero from "@/components/hero/hero-two";
import FeatureLeft from "@/components/features/feature-three";
import FeatureRight from "@/components/features/feature-four";
import Header from "@/components/hero/header-two";
import NavBar from "@/components/NavBar";

export default function DataSource() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
    </main>
  );
}
