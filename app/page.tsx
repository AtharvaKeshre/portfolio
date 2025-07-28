"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, FileText, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TypeAnimation } from "./components/type-animation"
import { ProjectCard } from "./components/project-card"
import { TechLogo } from "./components/tech-logo"
import { ContactForm } from "./components/contact-form"
import { FabricAnimation } from "./components/fabric-animation"
import { WorkExperience } from "@/components/ui/workexperience"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about","experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Technology logos data
  const technologies = [
    { name: "React", logo: "/tech/react-logo.png" },
    { name: "Next.js", logo: "/tech/nextjs-logo.png" },
    { name: "TypeScript", logo: "/tech/typescript-logo.png" },
    { name: "JavaScript", logo: "/tech/javascript-logo.png" },
    { name: "Node.js", logo: "/tech/nodejs-logo.png" },
    { name: "Express", logo: "/tech/express-logo.png" },
    { name: "HTML5", logo: "/tech/html5-logo.png" },
    { name: "CSS3", logo: "/tech/css3-logo.png" },
    { name: "Tailwind CSS", logo: "/tech/tailwind-logo.png" },
    { name: "Java", logo: "/tech/java-logo.png" },
    { name: "Sprinboot", logo: "/tech/springboot-logo.png" },
    { name: "Python", logo: "/tech/python-logo.png" },
    { name: "Flask", logo: "/tech/flask-logo.png" },
    { name: "SQL Server", logo: "/tech/sqlserver-logo.png" },
    { name: "MongoDB", logo: "/tech/mongodb-logo.png" },
    { name: "PostgreSQL", logo: "/tech/postgresql-logo.png" },
    { name: "Git", logo: "/tech/git-logo.png" },
    { name: "Docker", logo: "/tech/docker-logo.png" }
       
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="#home" className="text-xl font-bold">
              Atharva Keshre
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 h-full">
            {["home", "about", "experience", "skills",  "projects", "contact"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: ["home", "about", "experience", "skills", "projects", "contact"].indexOf(item) * 0.1,
                }}
                className="h-full flex items-center"
              >
                <Link
                  href={`#${item}`}
                  className={`capitalize relative h-full flex items-center px-2 group ${
                    activeSection === item ? "text-primary font-medium" : "text-muted-foreground"
                  } hover:text-primary`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-full flex items-center"
            >
              <Link
                href="/resume"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-2 relative group h-full"
              >
                <FileText className="h-4 w-4" />
                Resume
                <span className="absolute bottom-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border"
          >
            <nav className="container px-4 py-4 space-y-4">
              {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  onClick={closeMobileMenu}
                  className={`block capitalize py-2 ${
                    activeSection === item ? "text-primary font-medium" : "text-muted-foreground"
                  } hover:text-primary transition-colors`}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={closeMobileMenu}
                className="block text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 py-2"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-black">
          
          {/* 3D Fabric Animation Background */}
          <FabricAnimation />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none"
                  >
                    Hi, I&apos;m Atharva Keshre
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl text-muted-foreground"
                  >
                    <TypeAnimation texts={["Software Engineer", "Full Stack Developer", "Problem Solver"]} />
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="max-w-[600px] text-muted-foreground text-base md:text-xl mx-auto lg:mx-0"
                >
                  I build exceptional and accessible digital experiences for the web.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col gap-2 sm:flex-row justify-center lg:justify-start"
                >
                  <Button asChild>
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume">View Resume</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex gap-4 justify-center lg:justify-start mt-4"
                >
                  <Link href="https://github.com/AtharvaKeshre" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="hover:text-black">
                      <Github className="h-5 w-5 text-white hover:text-black" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href=" https://www.linkedin.com/in/atharva-keshre/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5 text-white" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:atharvakeshre@gmail.com">
                    <Button className="hover:text-black" variant="ghost" size="icon">
                      <Mail className="h-5 w-5 text-white" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center order-first lg:order-last"
              >
                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-background/80 backdrop-blur-sm">
                  <Image src="/images/Linked_Picture_1-removebg-preview.png" alt="Atharva Keshre" fill className="object-cover" priority />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
              <Link href="#about">
                <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm">
                  <ChevronDown className="h-6 w-6" />
                  <span className="sr-only">Scroll down</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  About Me
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Get to know me
                </h2>
                <p className="max-w-[350px] sm:max-w-[500px] text-muted-foreground text-sm md:text-xl">
                  Here's a brief introduction about my background and what I do.
                </p>
              </div>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 order-2 lg:order-1"
              >
                <h3 className="text-xl md:text-2xl font-bold">My Background</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                    I'm Atharva Keshre, a passionate individual currently immersed in the dynamic world of information systems as a Master of Science student at Northeastern University in Boston. With a fervor for technology and innovation, my journey has been enriched by a three-year tenure as a software engineer at Zensar Technologies in Hyderabad, India.
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                During this time, I've honed my skills, tackled intricate challenges, and contributed to the realm of software engineering. Join me as I showcase my experiences, projects, and the evolving tapestry of my professional and academic endeavors in the fascinating landscape of information systems.
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  When I&apos;m not coding, you can find me traveling, playing flute, or experimenting with new
                  technologies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden flex flex-col items-center lg:items-end order-1 lg:order-2"
              >
                <div className="space-y-2 text-center lg:text-right w-full">
                  <div className="relative w-full h-[200px] sm:h-[250px] lg:mr-12">
                    <Image
                      src="/lefttarrow.jpg" 
                      alt="About illustration"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section id="experience">
          <WorkExperience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Skills
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">My Technical Skills</h2>
              </div>
              <p className="max-w-[700px] text-muted-foreground text-sm md:text-xl">
                Here are the technologies and tools I work with on a regular basis.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Projects
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">My Recent Work</h2>
              </div>
              <p className="max-w-[700px] text-muted-foreground text-sm md:text-xl">
                Here are some of the projects I&apos;ve worked on recently.
              </p>
            </motion.div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Snapp"
                description={
                  "Developed a SaaS application for YouTube creators, enabling real-time audience interaction with personalized ads to generate leads".length > 80
                    ? "Developed a SaaS application for YouTube creators, enabling real-time audience interaction with personalized ads to generate leads".slice(0, 80) + "..."
                    : "Developed a SaaS application for YouTube creators, enabling real-time audience interaction with personalized ads to generate leads"}
                image="/images/click.png"
                tags={["Next.js", "TypeScript", "Rust", "Tailwind CSS"]}
                link="https://clickk-sync.vercel.app/dashboard"
                delay={0.1}
              />
              <ProjectCard
                title="Job-Juxta-AI"
                description={
                  "Built an AI powered resume optimization platform, helping users tailor resumes to specific job roles.Integrated Gemini AI (2.5 Flash) to analyze resumes and provide actionable insights, while leveraging Cursor for AI-assisted coding to streamline development and enhance code quality".length > 80
                    ? "Built an AI powered resume optimization platform, helping users tailor resumes to specific job roles.Integrated Gemini AI (2.5 Flash) to analyze resumes and provide actionable insights, while leveraging Cursor for AI-assisted coding to streamline development and enhance code quality".slice(0, 80) + "..."
                    : "Built an AI powered resume optimization platform, helping users tailor resumes to specific job roles.Integrated Gemini AI (2.5 Flash) to analyze resumes and provide actionable insights, while leveraging Cursor for AI-assisted coding to streamline development and enhance code quality"}
                image="/images/jobjuxta.png"
                tags={["Python", "FastAPI","Next.JS", "Gen AI"]}
                link="https://job-juxta-ai.vercel.app/login"
                delay={0.1}
              />
              <ProjectCard
                title="FleetRental App"
                description={
                  "This system is designed to streamline and enhance the management and rental processes for individuals and businesses involved in the car leasing industry. From comprehensive car information to efficient reservation and payment processing, our system aims to provide a seamless experience for both customers and administrators.".length > 80
                    ? "This system is designed to streamline and enhance the management and rental processes for individuals and businesses involved in the car leasing industry. From comprehensive car information to efficient reservation and payment processing, our system aims to provide a seamless experience for both customers and administrators.".slice(0, 80) + "..."
                    : "This system is designed to streamline and enhance the management and rental processes for individuals and businesses involved in the car leasing industry. From comprehensive car information to efficient reservation and payment processing, our system aims to provide a seamless experience for both customers and administrators."
                }                
                image="/images/fleetrental.png"
                tags={["React", "Node.js", "Sql Server", "Express"]}
                link="https://github.com/AtharvaKeshre/DMDD"
                delay={0.3}
              />
              <ProjectCard
                title="Journal App"
                description={"Built a Journal application with Spring Boot, React, MongoDB, Redis, and Maven enabling users to securely create, edit, and organize entries, with robust authentication and role-based access via Spring Security and OAuth2.".length > 80
                    ? "Built a Journal application with Spring Boot, React, MongoDB, Redis, and Maven enabling users to securely create, edit, and organize entries, with robust authentication and role-based access via Spring Security and OAuth2.".slice(0, 80) + "..."
                    : "Built a Journal application with Spring Boot, React, MongoDB, Redis, and Maven enabling users to securely create, edit, and organize entries, with robust authentication and role-based access via Spring Security and OAuth2."}
                image="/images/journal.png"
                tags={["Java", "SpringBoot", "Next.js", "MongoDB", "Redis"]}
                link="https://github.com/AtharvaKeshre/JournalApp"
                delay={0.5}
              />
              <ProjectCard
                title="Peer Evaluation System"
                description={"Developed a full-stack Peer Evaluation Tool using React, Node.js (Express), and MS SQL Server, enabling students to evaluate group member's monthly participation. Hosted on Vercel, Render, and Azure for frontend, backend, and database services".length > 80
                    ? "Developed a full-stack Peer Evaluation Tool using React, Node.js (Express), and MS SQL Server, enabling students to evaluate group member's monthly participation. Hosted on Vercel, Render, and Azure for frontend, backend, and database services".slice(0, 80) + "..."
                    : "Developed a full-stack Peer Evaluation Tool using React, Node.js (Express), and MS SQL Server, enabling students to evaluate group member's monthly participation. Hosted on Vercel, Render, and Azure for frontend, backend, and database services"}
                image="/images/peer-evaluation.png"
                tags={["React", "Node.js", "MS SQL Server", "Azure"]}
                link="https://github.com/AtharvaKeshre/Marks-Distribution"
                delay={0.7}
              />
              <ProjectCard
                title="HTR-Tool"
                description={"This project is a Handwritten Text Recognition (HTR) tool developed using Python and the Flask web framework. The tool leverages Tesseract OCR for optical character recognition, enabling the conversion of handwritten and printed text from images into a digital format. The primary focus is on extracting characters such as alphabets, digits, and symbols from input images, whether they are handwritten documents or printed text.".length > 80
                    ? "This project is a Handwritten Text Recognition (HTR) tool developed using Python and the Flask web framework. The tool leverages Tesseract OCR for optical character recognition, enabling the conversion of handwritten and printed text from images into a digital format. The primary focus is on extracting characters such as alphabets, digits, and symbols from input images, whether they are handwritten documents or printed text.".slice(0, 80) + "..."
                    : "This project is a Handwritten Text Recognition (HTR) tool developed using Python and the Flask web framework. The tool leverages Tesseract OCR for optical character recognition, enabling the conversion of handwritten and printed text from images into a digital format. The primary focus is on extracting characters such as alphabets, digits, and symbols from input images, whether they are handwritten documents or printed text."}
                image="/images/htr-tool.png"
                tags={["Python", "Flask", "Tesseract", "OpenCV"]}
                link="https://github.com/AtharvaKeshre/HTR-tool"
                delay={0.9}
              />
              <ProjectCard
                title="UNIOne"
                description={"This project is a transformative initiative aimed at revolutionizing education. In a world where the quality of education is paramount and access to it is a fundamental right, our project emerges as a pioneering solution. In this report, we present the culmination of our collective efforts to create a decentralized, Coursera-like system..".length > 80
                    ? "This project is a transformative initiative aimed at revolutionizing education. In a world where the quality of education is paramount and access to it is a fundamental right, our project emerges as a pioneering solution. In this report, we present the culmination of our collective efforts to create a decentralized, Coursera-like system.".slice(0, 80) + "..."
                    : "This project is a transformative initiative aimed at revolutionizing education. In a world where the quality of education is paramount and access to it is a fundamental right, our project emerges as a pioneering solution. In this report, we present the culmination of our collective efforts to create a decentralized, Coursera-like system."}
                image="/images/unione.png"
                tags={["Java", "Java Swing", "MySQL"]}
                link="https://github.com/AtharvaKeshre/UNIOne"
                delay={1.1}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Contact
                </Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">Get In Touch</h2>
              </div>
              <p className="max-w-[700px] text-muted-foreground text-sm md:text-xl">
                Feel free to reach out if you&apos;re looking to collaborate or have any questions.
              </p>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6 order-2 lg:order-1"
              >
                <h3 className="text-xl md:text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base break-all">atharvakeshre@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base break-all">linkedin.com/in/atharva-keshre/</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm md:text-base break-all">github.com/AtharvaKeshre</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg md:text-xl font-semibold">Let&apos;s connect</h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    I&apos;m currently open to freelance opportunities and interesting projects. If you have a project
                    that you want to get started or think you need my help with something, then get in touch.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="order-1 lg:order-2"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex items-center gap-4">
            <Link href="https://github.com/AtharvaKeshre" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/atharva-keshre/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:atharvakeshre@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Atharva Keshre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
