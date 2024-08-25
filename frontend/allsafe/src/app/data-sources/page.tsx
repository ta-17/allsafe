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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function DataSource() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </main>
  );
}
