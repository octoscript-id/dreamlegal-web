import { Service } from "@/types/Service";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export const getVariant = (index: number) => {
  switch (index%3) {
    case 0:
      return "green"
    case 1:
      return "yellow"
    case 2:
      return "purple"
    default:
      return "default";
  }
}

export const checkIsLast = (service: Service, index: number) => {
  return service.options.length % 2 != 0 && index == (service.options.length-1)
}