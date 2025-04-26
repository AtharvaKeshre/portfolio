"use client"

import { useState, useEffect } from "react"

interface TypeAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function TypeAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentText = texts[currentIndex]

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        timeout = setTimeout(() => {}, delayBetween)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (displayText === currentText) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetween)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetween])

  return (
    <div className="inline-flex items-center">
      <span>{displayText}</span>
      <span className="ml-1 h-6 w-[2px] bg-primary animate-blink"></span>
    </div>
  )
}
