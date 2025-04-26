"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function WorkExperience() {
  const experiences = [
    {
        company: "Northeastern University",
        role: "Graduate Research Assistant",
        duration: "Jan 2025 – May 2025",
        
        points: [
          "Developed a full-stack Peer Evaluation Tool using React, Node.js (Express), and MS SQL Server, enabling students to evaluate group members’ monthly participation. Hosted on Vercel, Render, and Azure for frontend, backend, and database services",
          "Guided students in mastering fundamental to advance MySQL, and ER diagrams concepts",
          "Mentored 50+ students in applying database design concepts, focusing on creating effective ER diagrams, normalization, indexing strategies, query performance optimization, and Power BI for data visualization and insights"
        ]
      },
    {
      company: "Zensar Technologies Pvt. Ltd",
      role: "Software Engineer",
      duration: "Jan 2022 – July 2023",
      points: [
        "Worked in a 7-person cross-functional team in developing a dynamic MERN stack application using the MVC architecture, achieving a 30% increase in development efficiency by creating reusable components and modular server-side functionalities",
        "Deployed serverless backends using AWS Lambda, integrated with React frontends, leading to a 20% reduction in server costs",
        "Transformed the app into a Progressive Web App (PWA), enabling offline access, leading to a 30% increase in user engagement"
      ]
    },
    {
      company: "Zensar Technologies Pvt. Ltd",
      role: "Jr. Software Engineer",
      duration: "July 2020 – Jan 2022",
      points: [
        "Developed a comprehensive React component library with streamlined templates, which increased development speed by 25% and significantly enhanced component reusability across multiple projects",
        "Utilized React’s efficient data flow architecture to design lightweight, high-performance web applications, which resulted in a 30% improvement in load times and ensured that the applications were highly scalable and responsive to user interactions",
        "Implemented and managed an extensive suite of 300+ unit tests for server-side applications using Jest and Cypress. Adhering rigorously to SonarQube’s stringent quality standards, resulting in robust and reliable software excelling in performance"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Experience
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mt-4">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-muted-foreground/20 transform -translate-x-1/2" />

          <div className="flex flex-col space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row md:items-start md:gap-12 relative"
              >
                {/* Left side */}
                <div className="md:w-1/2 text-right pr-8">
                  <div className="relative">
                    {/* Red dot */}
                    {/* <div className="absolute right-[-1.25rem] top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-background"></div> */}

                    <h3 className="text-lg font-bold">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.role} | {exp.duration}</p>
                  </div>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 pl-8">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 list-none">
                    {exp.points.map((point, idx) => (
                      <li className="list-none" key={idx}>{point} </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
