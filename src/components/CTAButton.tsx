import { LOWES_URL } from "@/lib/site";
import { ExternalLink } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "highlight";
  size?: "md" | "lg";
  className?: string;
};

export function LowesCTA({
  children = "Buy at Lowe's",
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const base =
    "font-ui inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm";
  const sizes = {
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    highlight:
      "bg-highlight text-highlight-foreground hover:bg-highlight/90 shadow-md",
  };
  return (
    <a
      href={LOWES_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-analytics-event="lowes_product_click"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "lowes_product_click", {
            event_category: "outbound",
            event_label: "lowes_item_3976",
          });
        }
      }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <ExternalLink className="h-4 w-4" aria-hidden />
    </a>
  );
}
