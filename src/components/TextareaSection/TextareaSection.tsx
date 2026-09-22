import type { TextArea } from "../CarouselSection/CarouselSection.types";

export type TextAreaSectionProps = {
  config: TextArea;
  onChange: (config: TextArea) => void;
};

const TextareaSection = ({ config }: TextAreaSectionProps) => {
  const { title, description, titleColor, descriptionColor } = config;
  const currentTitleColor = titleColor || "#ffffff";
  const currentDescColor = descriptionColor || "#4b5563";

  return (
    <div
      className="flex flex-col gap-[0.5rem] w-full max-w-xs mx-auto"
      data-testid="textarea-container"
    >
      {title && (
        <h3
          style={{ color: currentTitleColor }}
          className="text-xl font-bold transition-colors"
          data-testid="textarea-title"
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          style={{ color: currentDescColor }}
          className="whitespace-pre-wrap transition-colors"
          data-testid="textarea-description"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default TextareaSection;
