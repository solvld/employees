import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function translateRole(role: string): string | null {
  switch (role) {
    case 'waiter':
      return 'Oфициант';
    case 'driver':
      return 'Водитель';
    case 'cook':
      return 'Повар';
    default:
      return null;
  }
}
