import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/branding/favicon.svg"
      alt="Bells Delites"
      className={cn("rounded", className)}
    />
  );
}
