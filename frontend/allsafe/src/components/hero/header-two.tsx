// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Container, Section } from "@/components/craft";
import { Button } from "../ui/button";
import { TypographyH1 } from "@/typography/h1";
import { TypographyLead } from "@/typography/lead";

const Header = () => {
  return (
    <Section>
      <Container className="flex flex-col text-center">
        <TypographyH1 className="!mb-0">Scared of being scammed or target online?</TypographyH1>
        <TypographyLead className="text-muted-foreground">
          <Balancer>
            Our collection of resources, articles, and scam detector tools can help.
          </Balancer>
        </TypographyLead>
        <div className="mx-auto !mt-8 flex items-center gap-2">
        </div>
      </Container>
    </Section>
  );
};

export default Header;
