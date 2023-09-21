import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function classNames(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}
