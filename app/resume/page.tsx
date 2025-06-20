"use client"

import { useState } from "react"
import { ArrowLeft, Download, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true)

  // Replace with your actual resume PDF URL
  const resumeUrl = "/Atharva_Keshre_Resume.pdf"

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to home</span>
              </Link>
            </Button>
            <h1 className="text-lg sm:text-xl font-bold">Resume</h1>
          </div>
          <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm" asChild>
            <a href={resumeUrl} download="Atharva_Keshre_Resume.pdf">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-4 sm:py-6 px-4">
        <div className="relative bg-muted rounded-lg overflow-hidden w-full h-[calc(100vh-8rem)]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            src="/Atharva_Keshre_Resume.pdf"
            className="w-full h-full"
            frameBorder="0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </main>
    </div>
  )
}
