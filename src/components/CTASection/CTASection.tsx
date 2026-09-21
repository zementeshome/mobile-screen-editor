import { Button } from "../../shadcn-ui-components/button";
import type { CTA } from "../CarouselSection/CarouselSection.types";
import { urlChecker } from "../../lib/utils";

interface CTASectionProps {
  config: CTA;
  onChange: (config: CTA) => void;
}

const CTASection = ({ config }: CTASectionProps) => {
  const { label, href, buttonBackgroundColor, buttonTextColor } = config;

  return (
    <div className="flex flex-col" data-testid="cta-section">
      <Button
        asChild
        className="m-auto bg-white text-black hover:bg-grey border border-black w-fit mb-2"
        size="sm"
        style={{
          color: buttonTextColor,
          backgroundColor: buttonBackgroundColor,
        }}
        data-testid="cta-user"
        onClick={(e) => !urlChecker(href) && e.preventDefault()}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label || "Button preview"}
        </a>
      </Button>
    </div>
  );
};

export default CTASection;
