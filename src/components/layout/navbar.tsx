import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { IconMenu3, IconStar } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/data/navbar";
import { cn } from "@/lib/utils";
import { getCategories, getServicesCategories } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

const LogoText = React.memo(({ className }: { className?: string }) => (
  <p
    className={cn(
      "text-sm font-bold text-gray-700 dark:text-gray-300 [&_span]:text-sky-700 dark:[&_span]:text-sky-500",
      className
    )}
  >
    <span>ALLIED</span> GULF <span>CONSTRUCTION</span> SERVICES{" "}
    <span>W.L.L</span>
  </p>
));
LogoText.displayName = "LogoText";

export async function Navbar() {
  const filteredNavLinks = useMemo(
    () => NAVLINKS.filter((nav) => nav.title !== "Contact"),
    []
  );

  const services = await getServicesCategories();
  const products = await getCategories();

  return (
    <>
      <NavigationMenu className="bg-navbar/80 sticky top-0 z-50 w-full max-w-full items-center border-b shadow-2xs backdrop-blur-lg">
        <div className="container flex w-full max-w-7xl items-center gap-4 px-4 py-2 md:justify-between">
          <Drawer>
            <DrawerTrigger className="sm:hidden" aria-label="Open menu">
              <IconMenu3 />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex-row items-center gap-3">
                <Logo className="h-16 w-auto shrink-0" aria-hidden="true" />
                <div>
                  <DrawerTitle>
                    <LogoText />
                  </DrawerTitle>
                  <DrawerDescription className="text-xs font-light">
                    For top construction solutions and materials, count on us!
                    We&apos;ve got what you need.
                  </DrawerDescription>
                </div>
              </DrawerHeader>

              <NavigationMenuList className="flex-col items-start gap-2">
                {filteredNavLinks.map((nav, i) =>
                  nav.submenus ? (
                    <div key={`${nav.href}-${i}`} className="w-full py-2">
                      <p className="px-6 pb-2 font-medium">{nav.title}</p>

                      <ul className="ml-1 w-full space-y-2">
                        {nav.submenus.map((sub, index) => (
                          <NavigationMenuItem
                            className="w-full"
                            key={`${sub.href}-${index}-menu-sub`}
                          >
                            <DrawerClose asChild>
                              <NavigationMenuLink
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  "px-6"
                                )}
                                asChild
                              >
                                <Link
                                  href={sub.href}
                                  className="px-6 max-sm:!w-full max-sm:items-start"
                                >
                                  {sub.title}
                                </Link>
                              </NavigationMenuLink>
                            </DrawerClose>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavigationMenuItem
                      className="w-full"
                      key={`${nav.href}-${i}-menu`}
                    >
                      <DrawerClose asChild>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "px-6")}
                          asChild
                        >
                          <Link
                            href={nav.href}
                            className="px-6 max-sm:!w-full max-sm:items-start"
                          >
                            {nav.title}
                          </Link>
                        </NavigationMenuLink>
                      </DrawerClose>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <Logo className="h-11 w-auto" aria-hidden="true" />
            <LogoText className="pt-1.5" />
          </Link>

          <NavigationMenuList
            className="hidden sm:flex"
            aria-label="Main navigation"
          >
            {NAVLINKS.map((nav) =>
              nav.submenus ? (
                <NavigationMenuItem className="relative" key={nav.href}>
                  <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="mx-auto grid grid-cols-3 gap-3 p-6 md:w-[100dvw] lg:w-[80rem]">
                      {nav.submenus.map((sub) => (
                        <li key={sub.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className={cn(
                                "bg-popover hover:bg-primary group flex w-full flex-col justify-end gap-4 rounded-xl pt-12 transition-colors"
                              )}
                            >
                              <div className="space-y-2 p-4">
                                <IconStar className="text-primary group-hover:text-primary-foreground transition-colors" />
                                <p className="text-xs">{sub.subtitle}</p>
                                <h2 className="font-poly-sans pb-3 text-xl leading-none font-medium">
                                  {sub.title}
                                </h2>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : nav.title === "Services" ? (
                <NavigationMenuItem className="relative" key={nav.href}>
                  <NavigationMenuTrigger>
                    <Link href={nav.href}>{nav.title}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[80rem] lg:grid-cols-[.75fr_1fr_1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                            href={nav.href}
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Services
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              End-to-end construction and engineering services,
                              expertly managing multiple projects across the
                              Middle East from planning to completion.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      {services.map((sub) => (
                        <ListItem
                          href={sub.slug?.current!}
                          title={sub.category!}
                          key={sub._id}
                          className="group relative z-50 overflow-hidden"
                          image={sub.image}
                        >
                          {sub.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : nav.title === "Products" ? (
                <NavigationMenuItem className="relative" key={nav.href}>
                  <NavigationMenuTrigger>
                    <Link href={nav.href}>{nav.title}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[80rem] lg:grid-cols-[.75fr_1fr_1fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                            href={nav.href}
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Products
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Explore our full range of specialty materials
                              tailored for construction and interior projects.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      {products.slice(0, 8).map((sub) => (
                        <ListItem
                          href={sub.slug?.current!}
                          title={sub.category!}
                          key={sub._id}
                          className="group relative overflow-hidden"
                          image={sub.image}
                        >
                          {sub.description}
                        </ListItem>
                      ))}
                      <ListItem href={"/products"} title={"Explore More"}>
                        {products.slice(8).map((sub) => sub.category)}{" "}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={nav.href}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link href={nav.href}>{nav.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
            <ThemeToggle />
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  image?: SanityImageSource | null; // Replace `any` with the appropriate type for `image` if known
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, image, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href!}
            ref={ref}
            className={cn(
              "hover:bg-accent bg-popover hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
              className
            )}
            {...props}
          >
            <div className="z-50 text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground relative z-50 line-clamp-2 text-sm leading-snug">
              {children}
            </p>
            {image && (
              <Image
                src={urlFor(image).url()}
                alt={"Article image"}
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                quality={100}
                className="z-0 opacity-10 transition-[sclae_opacity] duration-300 group-hover:opacity-50 hover:scale-105"
              />
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
