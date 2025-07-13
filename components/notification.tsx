"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NotificationProps {
  title: string
  description: string
  onClose: () => void
}

export function Notification({ title, description, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animate in
    const timer1 = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    // Auto dismiss after 5 seconds
    const timer2 = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Wait for animation to complete
    }, 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onClose])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 max-w-md rounded-lg bg-white p-4 shadow-lg border border-corporate-100 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-corporate-800">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-full"
          onClick={() => {
            setIsVisible(false)
            setTimeout(onClose, 300) // Wait for animation to complete
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}
