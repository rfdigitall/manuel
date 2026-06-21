'use client'

import { motion } from 'motion/react'
import { PhoneCall } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PulseCallButtonProps = {
  href: string
  children: ReactNode
  className?: string
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

export function PulseCallButton({
  href,
  children,
  className,
  showIcon = true,
  size = 'lg',
}: PulseCallButtonProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2.5 overflow-visible rounded-full font-bold uppercase tracking-wide text-primary-foreground',
        sizes[size],
        className,
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-primary/50 opacity-75"
      />
      <span
        aria-hidden
        className="absolute -inset-1 rounded-full bg-primary/20 blur-md transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2.5">
        {showIcon && (
          <PhoneCall className="h-5 w-5 transition-transform group-hover:rotate-12" />
        )}
        {children}
      </span>
    </motion.a>
  )
}
