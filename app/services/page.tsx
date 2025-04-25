"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, BarChart, Mail, MousePointer, PenTool, Search, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-secondary" />,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility in search engine results and drive organic traffic.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building Campaigns",
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-secondary" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience through strategic social media campaigns.",
      features: [
        "Platform Strategy & Management",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
      ],
    },
    {
      icon: <PenTool className="h-10 w-10 text-secondary" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and retains your target audience.",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Ebook & Whitepaper Creation",
        "Content Distribution",
      ],
    },
    {
      icon: <MousePointer className="h-10 w-10 text-secondary" />,
      title: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic to your website through strategic paid advertising campaigns.",
      features: ["Google Ads Management", "Display Advertising", "Remarketing Campaigns", "Landing Page Optimization"],
    },
    {
      icon: <Mail className="h-10 w-10 text-secondary" />,
      title: "Email Marketing",
      description: "Nurture leads and build customer relationships through personalized email campaigns.",
      features: [
        "Email Strategy Development",
        "Campaign Creation & Management",
        "Automation Workflows",
        "Performance Analysis",
      ],
    },
    {
      icon: <BarChart className="h-10 w-10 text-secondary" />,
      title: "Analytics & Reporting",
      description: "Track, analyze, and optimize your digital marketing performance.",
      features: [
        "Custom Dashboard Setup",
        "Performance Tracking",
        "Conversion Rate Optimization",
        "Regular Reporting & Insights",
      ],
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
              <Link href="/services" className="flex items-center text-sm font-medium text-primary">
                Services
              </Link>
              <Link
                href="/about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
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
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive range of digital marketing services to help your business grow online.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckIcon className="mr-2 h-4 w-4 text-secondary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We follow a proven process to deliver results for our clients.
                  </p>
                </div>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Discovery</h3>
                      <p className="text-muted-foreground">
                        We start by understanding your business, goals, target audience, and competitors.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Strategy</h3>
                      <p className="text-muted-foreground">
                        We develop a customized digital marketing strategy tailored to your specific needs.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Implementation</h3>
                      <p className="text-muted-foreground">
                        We execute the strategy with precision and attention to detail.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Optimization</h3>
                      <p className="text-muted-foreground">
                        We continuously monitor, analyze, and optimize your campaigns for maximum results.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Our Process"
                  className="mx-auto aspect-square rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="w-full py-12 md:py-24 lg:py-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Grow Your Business?</h2>
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

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
