"use client";

import { cn } from "@/lib/utils";

const WavyText = ({
  text,
  as: Component = "h1",
  className,
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
}) => {
  return (
    <Component className={cn("group flex", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-flag-wave [animation-play-state:paused] group-hover:[animation-play-state:running]"
          style={{
            animationDelay: `${i * 50}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  );
};

export default WavyText;
