import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date to readable format
 */
export function formatDate(date: string | Date, format: string = 'short'): string {
  const d = new Date(date)
  const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
    short: { year: 'numeric' as const, month: 'short' as const, day: 'numeric' as const },
    long: { year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const },
    full: { weekday: 'long' as const, year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const },
  }
  const options: Intl.DateTimeFormatOptions = optionsMap[format] || { year: 'numeric' as const, month: 'short' as const }

  return d.toLocaleDateString('en-US', options)
}

/**
 * Calculate reading time for blog posts
 */
export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Generate slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Animate number counter
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 2000
): void {
  const increment = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target.toString()
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current).toString()
    }
  }, 16)
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Get time ago from date
 */
export function getTimeAgo(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const secondsPast = (now.getTime() - d.getTime()) / 1000

  if (secondsPast < 60) return 'just now'
  if (secondsPast < 3600) return `${Math.floor(secondsPast / 60)}m ago`
  if (secondsPast < 86400) return `${Math.floor(secondsPast / 3600)}h ago`
  if (secondsPast < 604800) return `${Math.floor(secondsPast / 86400)}d ago`

  return formatDate(date, 'short')
}
