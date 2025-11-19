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

              {/* Style Palette */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Style Palette
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2 bg-background shadow-lg rounded-md border">
                    <li>
                      <Link
                        to="/style-palette/minimalist"
                        className="block rounded-md p-3 text-sm font-light hover:bg-accent hover:text-accent-foreground"
                      >
                        Minimalist
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/style-palette/industrial"
                        className="block rounded-md p-3 text-sm font-light hover:bg-accent hover:text-accent-foreground"
                      >
                        Industrial
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Interior Kit */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Interior Kit
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="grid grid-cols-3 w-[550px] gap-6 p-6 bg-background shadow-xl rounded-lg border">

                    {[
                      ["Base Tier", "base"],
                      ["Standard", "standard"],
                      ["Premium", "premium"]
                    ].map(([title, segment]) => (
                      <div key={segment}>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          {title}
                        </h4>
                        <div className="flex flex-col space-y-1">
                          {["1BHK", "2BHK", "3BHK"].map((size) => (
                            <Link
                              key={`${segment}-${size}`}
                              to={`/interior-kit/${segment}/${size.toLowerCase()}`}
                              className="text-sm font-light p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                            >
                              {size}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className={`hidden md:inline-flex font-light tracking-wide ${buttonClasses}`}
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

                      {/* Style Palette Mobile */}
                      <Collapsible
                        open={stylePaletteOpen}
                        onOpenChange={setStylePaletteOpen}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between text-base font-light">
                          Style Palette
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              stylePaletteOpen ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-3 ml-4 flex flex-col gap-3">
                          <Link to="/style-palette/minimalist">Minimalist</Link>
                          <Link to="/style-palette/industrial">Industrial</Link>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Interior Kit Mobile */}
                      <Collapsible
                        open={interiorKitOpen}
                        onOpenChange={setInteriorKitOpen}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between text-base font-light">
                          Interior Kit
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              interiorKitOpen ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-3 ml-4 flex flex-col gap-4">
                          {["Base Tier", "Standard", "Premium"].map((tier) => (
                            <div key={tier}>
                              <div className="text-xs uppercase text-muted-foreground">
                                {tier}
                              </div>

                              <div className="ml-3 flex flex-col gap-1">
                                {["1BHK", "2BHK", "3BHK"].map((size) => (
                                  <Link
                                    key={`${tier}-${size}`}
                                    to={`/interior-kit/${tier
                                      .toLowerCase()
                                      .replace(" ", "")}/${size.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {size}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
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
