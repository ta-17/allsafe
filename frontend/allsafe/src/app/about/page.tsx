"use client";

import Image from "next/image";
import NavBar from "../../components/NavBar";
import Biography from "../../components/assets/Biography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <Biography
        heading="Roy"
        subheading="My Custom Subheading"
        description="Hello world."
      />
      <Biography
        heading="Lyn"
        subheading="My Custom Subheading"
        description="Hello world."
      />
      <Biography
        heading="Paris"
        subheading="My Custom Subheading"
        description="Hello world."
      />
      <Biography
        heading="Ibrahim"
        subheading="My Custom Subheading"
        description="Hello world."
      />
      <Biography
        heading="Jo"
        subheading="My Custom Subheading"
        description="Hello world."
      />
    </main>
  );
}
