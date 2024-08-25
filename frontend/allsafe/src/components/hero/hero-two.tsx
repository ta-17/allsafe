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

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        {/* <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        /> */}
        <TypographyH1>
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Balancer>
        </TypographyH1>
        <TypographyLead className="mt-4 text-muted-foreground">
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
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
