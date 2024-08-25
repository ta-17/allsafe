// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Button } from "@/components/ui/button";

// Asset imports
// import Logo from "@/public/logo.svg";
import { Container, Section } from "../craft";
import { TypographyH1 } from "@/typography/h1";
import { TypographyH3 } from "@/typography/h3";
import { TypographyLead } from "@/typography/lead";
import { TypographyH2 } from "@/typography/h2";

const Hero = () => {
  return (
    <Section className="md:mb-60">
      <Container className="flex flex-col items-center text-center">
        {/* <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        /> */}
        <TypographyH2 className="mb-6 dark:invert md:mb-8">
          <Balancer>
            AllSafe
          </Balancer>
        </TypographyH2>
        <TypographyH1 className="">
          <Balancer>
            Social Media Safety Hub
          </Balancer>
        </TypographyH1>
        <TypographyLead className="mt-4 text-muted-foreground">
          <Balancer>
            A platform dedicated to providing you with information and services to keep you protected from scams and other online threats.
          </Balancer>
        </TypographyLead>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              Get Started
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn More -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
