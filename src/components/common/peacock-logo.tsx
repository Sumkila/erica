import { cn } from "@/lib/utils";

const PeacockLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 25V75H30" stroke="currentColor" />
        <path d="M30 50H60" stroke="currentColor" />
        <path d="M70 25C85 40 85 60 70 75" stroke="hsl(var(--accent))" />
        <path d="M70 25C78 35 78 45 70 50" stroke="hsl(var(--primary))" strokeWidth="4" />
        <path d="M70 75C78 65 78 55 70 50" stroke="hsl(var(--primary))" strokeWidth="4" />
      </g>
    </svg>
  );
};

export default PeacockLogo;
