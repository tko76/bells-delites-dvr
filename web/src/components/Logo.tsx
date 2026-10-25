import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 512 512" className={cn(className)} xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="100" fill="#e91e8c" />
      <text
        x="256"
        y="370"
        fontFamily="Georgia, serif"
        fontSize="380"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        B
      </text>
    </svg>
  );
}
