// src/lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn helper: combines clsx + tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
