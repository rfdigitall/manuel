'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ScrollSectionProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScrollSection({ children, delay = 0, className }: ScrollSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 96, scale: 0.94, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -60px 0px' }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
