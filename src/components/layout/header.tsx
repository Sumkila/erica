"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import PeacockLogo from "../common/peacock-logo";
import { ContactDialog } from "../common/contact-dialog";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="border-t-2 border-dotted border-muted-foreground/30" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black">
            <PeacockLogo className="w-8 h-8 md:w-10 md:h-10" />
            <span className="font-headline tracking-tighter">ERICA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 font-code text-sm">
            <Link href="#solutions" className="hover:text-accent transition-colors">Solutions</Link>
            <Link href="#ethos" className="hover:text-accent transition-colors">Ethos</Link>
            <ContactDialog>
              <button className="hover:text-accent transition-colors">Contact</button>
            </ContactDialog>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 pt-12 text-lg font-code">
                   <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 mb-4 text-2xl font-black">
                        <PeacockLogo className="w-8 h-8" />
                        <span className="font-headline tracking-tighter">ERICA</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#solutions" className="hover:text-accent transition-colors">Solutions</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#ethos" className="hover:text-accent transition-colors">Ethos</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <ContactDialog>
                      <button className="text-left w-full hover:text-accent transition-colors">Contact</button>
                    </ContactDialog>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
      <div className="h-1 bg-accent" />
    </header>
  );
};

export default Header;
