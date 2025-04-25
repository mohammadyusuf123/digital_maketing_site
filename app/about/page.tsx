"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin, TrendingUp, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in digital marketing, Sarah leads our team with vision and expertise.",
      image: "/people1.jpg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "SEO Specialist",
      bio: "Michael specializes in search engine optimization and helps clients improve their online visibility.",
      image: "/people2.jpg?height=400&width=400",
    },
    {
      name: "Jessica Rodriguez",
      role: "Social Media Manager",
      bio: "Jessica creates engaging social media strategies that connect brands with their target audiences.",
      image: "/people3.jpg?height=400&width=400",
    },
    {
      name: "David Wilson",
      role: "Content Strategist",
      bio: "David crafts compelling content that tells your brand's story and drives customer engagement.",
      image: "/people4.jpg?height=400&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <MobileNav />
            <Link href="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">DigiMarkPro</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-primary">
                About Us
              </Link>
              <Link
                href="/contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About DigiMarkPro</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're a team of digital marketing experts passionate about helping businesses grow online.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Founded in 2015, DigiMarkPro has been at the forefront of digital marketing innovation, helping
                    businesses of all sizes achieve their online goals. Our team combines creativity with data-driven
                    strategies to deliver exceptional results for our clients.
                  </p>
                  <p>
                    We believe in building long-term partnerships with our clients, understanding their unique
                    challenges, and developing customized solutions that drive real business growth.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/banner.jpg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="About DigiMarkPro"
                  className="mx-auto aspect-square rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission & Vision</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to transform how businesses connect with their audiences in the digital world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Our Mission
                </div>
                <p className="text-xl">
                  To empower businesses with innovative digital marketing strategies that drive growth, build brand
                  awareness, and create meaningful connections with their target audience.
                </p>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  Our Vision
                </div>
                <p className="text-xl">
                  To be the leading digital marketing agency known for delivering exceptional results, fostering
                  innovation, and setting new standards of excellence in the industry.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of digital marketing experts is dedicated to your success.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={300}
                        height={300}
                        alt={member.name}
                        className="mx-auto aspect-square rounded-xl object-cover mb-4"
                      />
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-secondary mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                      <div className="flex justify-center space-x-4 mt-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule a free consultation and learn how we can help you achieve your digital
                  marketing goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} DigiMarkPro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
