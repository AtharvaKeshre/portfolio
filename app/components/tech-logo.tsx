"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TechLogoProps {
  name: string
  logo: string
  delay?: number
}

export function TechLogo({ name, logo}: TechLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay:0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="relative w-16 h-16 mb-2">
            <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} fill className="object-contain" />
          </div>
          <p className="text-sm font-medium text-center">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
