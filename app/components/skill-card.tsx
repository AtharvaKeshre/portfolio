"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  delay?: number
}

export function SkillCard({ title, level, delay = 0 }: SkillCardProps) {
  const getLevelColor = () => {
    switch (level) {
      case "Beginner":
        return "bg-red-300"
      case "Intermediate":
        return "bg-red-500"
      case "Advanced":
        return "bg-red-700"
      default:
        return "bg-gray-500"
    }
  }

  const getLevelWidth = () => {
    switch (level) {
      case "Beginner":
        return "w-1/3"
      case "Intermediate":
        return "w-2/3"
      case "Advanced":
        return "w-full"
      default:
        return "w-0"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <Card>
        <CardContent className="p-4">
          <div className="text-center">
            <h3 className="font-medium mb-2">{title}</h3>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: getLevelWidth() }}
                transition={{ duration: 1, delay: delay + 0.3 }}
                viewport={{ once: true }}
                className={`h-full ${getLevelColor()}`}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{level}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
