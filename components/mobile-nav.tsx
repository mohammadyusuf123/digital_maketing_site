"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, TrendingUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="font-bold">DigiMarkPro</span>
          </Link>
          {/* <Button variant="ghost" className="ml-auto h-8 w-8 p-0" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button> */}
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          <Link
            href="/"
            className={`flex py-2 text-lg font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`flex py-2 text-lg font-medium transition-colors hover:text-primary ${
              pathname === "/services" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`flex py-2 text-lg font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`flex py-2 text-lg font-medium transition-colors hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
