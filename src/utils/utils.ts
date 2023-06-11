import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getCategoryLink = (category: string) => {
  switch (category) {
    case 'فيسبوك':
      return '/facebook';
    case 'انستجرام':
      return '/instagram';
    case 'يوتيوب':
      return '/youtube';
    case 'لينكدان':
      return '/linkedin';
  }
}