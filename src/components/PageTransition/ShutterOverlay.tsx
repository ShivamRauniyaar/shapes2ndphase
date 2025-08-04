'use client'

import { useEffect, useState } from 'react'

type ShutterOverlayProps = {
  isTransitioning: boolean
  onTransitionEnd: () => void
}

export default function ShutterOverlay({ isTransitioning, onTransitionEnd }: ShutterOverlayProps) {
  const [isLeaving, setIsLeaving] = useState(true)

  useEffect(() => {
    if (isTransitioning) {
      setIsLeaving(true)
      const timer = setTimeout(() => setIsLeaving(false), 300) // Half of the transition time
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-transform duration-1000 ease-in-out ${
        isTransitioning
          ? isLeaving
            ? 'translate-y-0'
            : 'translate-y-full'
          : '-translate-y-full'
      }`}
      onTransitionEnd={onTransitionEnd}
    />
  )
}
