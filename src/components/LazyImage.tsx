/** @jsx jsx */
import * as React from "react";
import { jsx, ThemeUIStyleObject } from "theme-ui";
import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  sx?: ThemeUIStyleObject;
  className?: string;
  loading?: "lazy" | "eager";
  onError?: () => void;
}

/**
 * LazyImage component - Optimized image with lazy loading and error handling
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  sx = {},
  className = "",
  loading = "lazy",
  onError,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  // Fallback for broken images
  if (imageError) {
    return (
      <div
        sx={{
          width: width || "100%",
          height: height || "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px dashed rgba(255, 255, 255, 0.2)",
          color: "textMuted",
          fontSize: "0.875rem",
          ...sx,
        }}
        className={className}
        role="img"
        aria-label={alt}
      >
        Image not available
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onError={handleError}
      onLoad={handleLoad}
      className={className}
      sx={{
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        ...sx,
      }}
      decoding="async"
    />
  );
};

export default LazyImage;

