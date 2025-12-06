import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stylePaletteOpen, setStylePaletteOpen] = useState(false);
  const [interiorKitOpen, setInteriorKitOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-foreground" : "text-white";

  const buttonClasses = isScrolled
    ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
    : "border-white text-white hover:bg-white hover:text-background";

  const navTriggerClass = `text-sm font-light tracking-wide bg-transparent hover:bg-transparent ${textColor} hover:text-luxury-brown`;
   
  const navLinkClass = `text-sm font-light tracking-wide hover:text-luxury-brown transition-colors ${textColor} bg-transparent`;


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-extralight tracking-wider ${textColor}`}
          >
            StudiaSaga
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-8">

              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`text-sm font-light tracking-wide hover:text-luxury-brown transition-colors ${textColor}`}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/our-saga"
                  className={`text-sm font-light tracking-wide hover:text-luxury-brown transition-colors ${textColor}`}
                >
                  Our Saga
                </Link>
              </NavigationMenuItem>


            {/* NEW: Style Pal (Direct Link) */}
              <NavigationMenuItem>
                <Link to="/style-palette" className={navLinkClass}>
                  Style Palette
                </Link>
              </NavigationMenuItem>



              {/* NEW: Services (Direct Link) */}
              <NavigationMenuItem>
                <Link to="/services" className={navLinkClass}>
                  Services
                </Link>
              </NavigationMenuItem>



              {/* NEW: Services (Direct Link) */}
              <NavigationMenuItem>
                <Link to="/Contact" className={navLinkClass}>
                  Contact
                </Link>
              </NavigationMenuItem>





            </NavigationMenuList>
          </NavigationMenu>

          {/* Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
<Button
  variant="outline"
  className={`
    hidden md:inline-flex font-light tracking-wide 
    bg-[#E9E7DE] text-black border-[#E9E7DE]
    hover:bg-[#d6d3c9] hover:text-black hover:border-[#d6d3c9]
  `}
>
  Get In Touch
</Button>



            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${textColor}`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-[280px] p-0">

                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <Link
                      to="/"
                      className="text-2xl font-extralight text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      StudiaSaga
                    </Link>
                  </div>

                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="flex flex-col gap-6">

                      <Link
                        to="/"
                        className="text-base font-light text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>

                      <Link
                        to="/our-saga"
                        className="text-base font-light text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Saga
                      </Link>

{/* NEW: Style Pal Mobile */}
                      <Link
                        to="/style-palette"
                        className="text-base font-light text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        style palette
                      </Link>

                      {/* NEW: Services Mobile */}
                      <Link
                        to="/services"
                        className="text-base font-light text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Services
                      </Link>

                      <Link
                        to="/Contact"
                        className="text-base font-light text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>



                    </div>
                  </nav>

                  {/* Mobile Footer Button */}
                  <div className="p-6 border-t">
                    <Button className="w-full font-light tracking-wide">
                      Get In Touch
                    </Button>
                  </div>
                </div>

              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
