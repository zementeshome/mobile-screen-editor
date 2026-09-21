import React, { useState } from "react";
import type { ReactivCarouselProps, Display } from "./CarouselSection.types";
import SelectDropdown from "../Select/Select";
import { Input } from "../../shadcn-ui-components/input";
import clsx from "clsx";
import { Button } from "../../shadcn-ui-components/button";
import { AlertCircle } from "lucide-react";

const ReactivUpload = (props: ReactivCarouselProps) => {
  const { config, onChange } = props;
  const { images, display } = config;
  const [inputUrl, setInputUrl] = useState("");
  const [hasError, setHasError] = useState(false);

  // Image orientation change
  const handleDisplayChange = (newDisplay: Display) => {
    onChange({ ...config, display: newDisplay });
  };

  // Handle form submission locally, then pass data to the parent
  const handleAddImage = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    onChange({
      ...config,
      images: [
        ...images,
        { url: inputUrl, alt: `Uploaded image ${images.length + 1}` },
      ],
    });

    setInputUrl("");
  };

  return (
    <div data-testid="edit-section" className="flex flex-col-reverse">
      <SelectDropdown
        value={display}
        onChange={handleDisplayChange}
        data-testid="carousel-image-display-dropdown"
      />
      <form onSubmit={handleAddImage} className="flex gap-2 mb-3">
        <Input
          type="url"
          placeholder="URL here"
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
            setHasError(false);
          }}
          className={clsx("flex-1", {
            "border-2 border-red-800 p-4": hasError,
          })}
          required
          data-testid="carousel-image-url"
          id="input-value"
        />
        <Button
          type="submit"
          variant="outline"
          data-testid="carousel-image-add-button"
        >
          Add
        </Button>
      </form>
      {hasError && (
        <div className="flex items-center gap-1.5 text-xs text-destructive font-medium mb-3">
          <AlertCircle className="h-10 w-10 text-red-800" />
          <span className="text-left text-xs">
            Failed to load image. Loaded default backup image.
          </span>
        </div>
      )}
      <p
        className="text-center text-muted-foreground text-sm pb-3"
        data-testid="carousel-title"
      >
        Upload images for your carousel below.
      </p>
      <h4 className="mb-[0.5rem] font-semibold">Image Carousel</h4>
    </div>
  );
};

export default ReactivUpload;
