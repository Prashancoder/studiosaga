import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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

  // Handle scroll for header background
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/30 ${
    isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
  }`}
>

      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
<Link to="/" className="text-2xl font-extralight tracking-wider text-white">
  StudiaSaga
</Link>


          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
<Link
  to="/"
  className="text-sm font-light tracking-wide text-white hover:text-luxury-brown transition-colors"
>
  Home
</Link>

              </NavigationMenuItem>

              <NavigationMenuItem>
<Link
  to="/our-saga"
  className="text-sm font-light tracking-wide text-white hover:text-luxury-brown transition-colors"
>
  Our Saga
</Link>

              </NavigationMenuItem>

              <NavigationMenuItem>
<NavigationMenuTrigger className="text-sm font-light tracking-wide text-white bg-transparent hover:bg-transparent">
  Style Palette
</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-background">
                    <li>
                      <Link
                        to="/style-palette/minimalist"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">Minimalist</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/style-palette/industrial"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">Industrial</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
<NavigationMenuTrigger className="text-sm font-light tracking-wide text-white bg-transparent hover:bg-transparent">
  Interior Kit
</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 bg-background">
                    <li className="font-light text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Base Tier
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/base/1bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">1BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/base/2bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">2BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/base/3bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">3BHK</div>
                      </Link>
                    </li>

                    <li className="font-light text-xs uppercase tracking-wider text-muted-foreground mb-2 mt-4">
                      Standard
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/standard/1bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">1BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/standard/2bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">2BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/standard/3bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">3BHK</div>
                      </Link>
                    </li>

                    <li className="font-light text-xs uppercase tracking-wider text-muted-foreground mb-2 mt-4">
                      Premium
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/premium/1bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">1BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/premium/2bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">2BHK</div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-kit/premium/3bhk"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-light">3BHK</div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide"
            >
              Get In Touch
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-foreground"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border">
                    <Link
                      to="/"
                      className="text-2xl font-extralight tracking-wider text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      StudiaSaga
                    </Link>
                  </div>

                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="flex flex-col gap-6">
                      <Link
                        to="/"
                        className="text-base font-light tracking-wide text-foreground hover:text-luxury-brown transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </Link>

                      <Link
                        to="/our-saga"
                        className="text-base font-light tracking-wide text-foreground hover:text-luxury-brown transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Our Saga
                      </Link>

                      {/* Style Palette Collapsible */}
                      <Collapsible open={stylePaletteOpen} onOpenChange={setStylePaletteOpen}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-light tracking-wide text-foreground hover:text-luxury-brown transition-colors">
                          Style Palette
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              stylePaletteOpen ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 ml-4 flex flex-col gap-3">
                          <Link
                            to="/style-palette/minimalist"
                            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Minimalist
                          </Link>
                          <Link
                            to="/style-palette/industrial"
                            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Industrial
                          </Link>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Interior Kit Collapsible */}
                      <Collapsible open={interiorKitOpen} onOpenChange={setInteriorKitOpen}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-light tracking-wide text-foreground hover:text-luxury-brown transition-colors">
                          Interior Kit
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              interiorKitOpen ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 ml-4 flex flex-col gap-4">
                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                              Base Tier
                            </div>
                            <div className="flex flex-col gap-2 ml-2">
                              <Link
                                to="/interior-kit/base/1bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                1BHK
                              </Link>
                              <Link
                                to="/interior-kit/base/2bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                2BHK
                              </Link>
                              <Link
                                to="/interior-kit/base/3bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                3BHK
                              </Link>
                            </div>
                          </div>

                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                              Standard
                            </div>
                            <div className="flex flex-col gap-2 ml-2">
                              <Link
                                to="/interior-kit/standard/1bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                1BHK
                              </Link>
                              <Link
                                to="/interior-kit/standard/2bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                2BHK
                              </Link>
                              <Link
                                to="/interior-kit/standard/3bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                3BHK
                              </Link>
                            </div>
                          </div>

                          <div>
                            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                              Premium
                            </div>
                            <div className="flex flex-col gap-2 ml-2">
                              <Link
                                to="/interior-kit/premium/1bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                1BHK
                              </Link>
                              <Link
                                to="/interior-kit/premium/2bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                2BHK
                              </Link>
                              <Link
                                to="/interior-kit/premium/3bhk"
                                className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                3BHK
                              </Link>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </nav>

                  <div className="p-6 border-t border-border">
                    <Button
                      variant="outline"
                      className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide"
                      onClick={() => setMobileMenuOpen(false)}
                    >
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