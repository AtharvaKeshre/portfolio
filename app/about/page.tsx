"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FabricAnimationWithControls } from "../components/fabric-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center px-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="ml-2 text-lg sm:text-xl font-bold">3D Fabric Animation</h1>
        </div>
      </header>

      <main className="container py-8 sm:py-12 px-4">
        <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
          <h2 className="text-xl sm:text-2xl lg:text-3xl">About the 3D Fabric Animation</h2>
          <p className="text-sm sm:text-base">
            The 3D fabric animation on the home page is created using React Three Fiber, a popular React renderer for
            Three.js. The animation simulates a cloth-like material that moves in a wave pattern.
          </p>

          <p className="text-sm sm:text-base">
            The animation is created by manipulating a plane geometry in 3D space. Each vertex of the plane is moved
            based on a sine wave function that changes over time, creating the rippling effect.
          </p>

          <h3 className="text-lg sm:text-xl lg:text-2xl">Interactive Demo</h3>
          <p className="text-sm sm:text-base">You can interact with the animation below by dragging to rotate the view:</p>

          <div className="my-6 sm:my-8 border rounded-lg overflow-hidden">
            <FabricAnimationWithControls />
          </div>

          <h3 className="text-lg sm:text-xl lg:text-2xl">Technical Details</h3>
          <p className="text-sm sm:text-base">The animation is implemented using the following technologies:</p>
          <ul className="text-sm sm:text-base">
            <li>React Three Fiber - A React renderer for Three.js</li>
            <li>Three.js - A JavaScript 3D library</li>
            <li>Custom vertex manipulation for the wave effect</li>
            <li>Responsive design that adapts to different screen sizes</li>
          </ul>

          <p className="text-sm sm:text-base">
            The red color of the fabric matches the portfolio&apos;s color scheme, creating a cohesive visual experience
            throughout the site.
          </p>
        </div>
      </main>
    </div>
  )
}
