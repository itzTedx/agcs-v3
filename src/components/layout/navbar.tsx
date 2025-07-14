import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  IconArticle,
  IconBubbleText,
  IconMenu3,
  IconPhone,
  IconStar,
} from "@tabler/icons-react";

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

import {
  PRODUCTS_CATEGORIES_QUERYResult,
  SERVICES_CATEOGORIES_QUERYResult,
} from "../../../sanity.types";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface LogoTextProps {
  className?: string;
}

export const LogoText = React.memo(({ className }: LogoTextProps) => (
  <p
    className={cn(
      "text-xs font-bold text-gray-700 md:text-sm dark:text-gray-300 [&_span]:text-sky-700 dark:[&_span]:text-sky-500",
      className
    )}
  >
    <span>ALLIED</span> GULF <span>CONSTRUCTION</span> SERVICES{" "}
    <span>W.L.L</span>
  </p>
));

LogoText.displayName = "LogoText";

const filteredNavLinks = NAVLINKS.filter((nav) => nav.title !== "Contact");

const MobileNav = React.memo(
  ({
    services,
    products,
  }: {
    services: SERVICES_CATEOGORIES_QUERYResult;
    products: PRODUCTS_CATEGORIES_QUERYResult;
  }) => {
    return (
      <NavigationMenuList className="flex-col items-start gap-2">
        {filteredNavLinks.map(({ Icon, ...nav }, i) =>
          nav.submenus ? (
            <div key={`${nav.href}-${i}`} className="w-full py-2">
              <p className="text-muted-foreground/80 px-6 pb-2 text-xs font-light">
                {nav.title}
              </p>

              <ul className="ml-1 w-full space-y-2">
                {nav.submenus.map(({ Icon, ...sub }, index) => (
                  <NavigationMenuItem
                    className="w-full"
                    key={`${sub.href}-${index}-menu-sub`}
                  >
                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "px-6")}
                        asChild
                      >
                        <Link
                          href={sub.href}
                          className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
                        >
                          {Icon && (
                            <Icon className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                          )}
                          {sub.title}
                        </Link>
                      </NavigationMenuLink>
                    </DrawerClose>
                  </NavigationMenuItem>
                ))}
              </ul>
            </div>
          ) : nav.title === "Services" ? (
            <div key={`${nav.href}-${i}`} className="w-full py-2">
              <p className="text-muted-foreground/80 px-6 pb-2 text-xs font-light">
                {nav.title}
              </p>

              <ul className="ml-1 w-full space-y-2">
                {services.map((sub, index) => (
                  <NavigationMenuItem
                    className="w-full"
                    key={`${sub.slug?.current}-${index}-menu-sub`}
                  >
                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "px-6")}
                        asChild
                      >
                        <Link
                          href={`/services/${sub.slug?.current ?? "/"}`}
                          className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
                        >
                          {Icon && (
                            <Icon className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                          )}
                          {sub.category}
                        </Link>
                      </NavigationMenuLink>
                    </DrawerClose>
                  </NavigationMenuItem>
                ))}
              </ul>
            </div>
          ) : nav.title === "Products" ? (
            <div key={`${nav.href}-${i}`} className="w-full py-2">
              <p className="text-muted-foreground/80 px-6 pb-2 text-xs font-light">
                {nav.title}
              </p>

              <ul className="ml-1 w-full space-y-2">
                {products.map((sub, index) => (
                  <NavigationMenuItem
                    className="w-full"
                    key={`${sub.slug?.current}-${index}-menu-sub`}
                  >
                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "px-6")}
                        asChild
                      >
                        <Link
                          href={`/products/${sub.slug?.current ?? "/"}`}
                          className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
                        >
                          {Icon && (
                            <Icon className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                          )}
                          {sub.category}
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
                    className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
                  >
                    {Icon && (
                      <Icon className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                    )}
                    {nav.title}
                  </Link>
                </NavigationMenuLink>
              </DrawerClose>
            </NavigationMenuItem>
          )
        )}
        <NavigationMenuItem className="w-full">
          <DrawerClose asChild>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-6")}
              asChild
            >
              <Link
                href={"/posts"}
                className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
              >
                <IconArticle className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                Blog
              </Link>
            </NavigationMenuLink>
          </DrawerClose>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <DrawerClose asChild>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "px-6")}
              asChild
            >
              <Link
                href={"/faqs"}
                className="flex-row justify-start px-6 max-sm:!w-full max-sm:items-center"
              >
                <IconBubbleText className="text-muted-foreground/80 mr-2 size-4 shrink-0 stroke-1" />
                FAQs
              </Link>
            </NavigationMenuLink>
          </DrawerClose>
        </NavigationMenuItem>
      </NavigationMenuList>
    );
  }
);
MobileNav.displayName = "MobileNav";

export async function Navbar() {
  const [services, products] = await Promise.all([
    getServicesCategories(),
    getCategories(),
  ]);

  return (
    <NavigationMenu
      className="bg-navbar/80 sticky top-0 z-50 w-full max-w-full items-center border-b shadow-2xs backdrop-blur-lg"
      aria-label="Main navigation"
    >
      <div className="container flex w-full max-w-7xl items-center gap-4 py-2 md:justify-between">
        <Drawer>
          <DrawerTrigger className="sm:hidden" aria-label="Open menu">
            <IconMenu3 className="size-4" />
          </DrawerTrigger>
          <DrawerContent className="bg-card/75 max-h-[80svh] backdrop-blur-xl">
            <DrawerHeader className="flex-row items-center gap-3">
              <Logo
                className="h-12 w-auto shrink-0 md:h-16"
                aria-hidden="true"
              />
              <div>
                <DrawerTitle>
                  <LogoText />
                </DrawerTitle>
                <DrawerDescription className="text-xs font-light text-balance">
                  For top construction solutions and materials, count on us!
                  We&apos;ve got what you need.
                </DrawerDescription>
              </div>
              <ThemeToggle />
            </DrawerHeader>

            <ScrollArea className="h-[60svh]">
              <MobileNav services={services} products={products} />
            </ScrollArea>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button asChild>
                  <Link href="/contact">
                    <IconPhone />
                    Contact
                  </Link>
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Allied Gulf Construction Services - Home"
        >
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
                  <ul className="mx-auto grid grid-cols-3 gap-3 p-6 md:w-[100dvw] lg:w-[62rem]">
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
                  <ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-[100dvw] lg:w-[62rem]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                          href={nav.href}
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Services
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight text-balance">
                            End-to-end construction and engineering services,
                            expertly managing multiple projects across the
                            Middle East from planning to completion.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {services.map((sub) => (
                      <li
                        key={sub.slug?.current}
                        className="relative h-full overflow-hidden"
                      >
                        <NavigationMenuLink asChild>
                          <Link
                            href={sub.slug?.current ?? "/"}
                            className={cn(
                              "hover:bg-accent bg-popover hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex h-full flex-col items-start justify-end rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                            )}
                          >
                            <h2 className="font-poly-sans pb-3 text-xl leading-snug font-medium">
                              {sub.category}
                            </h2>
                            {sub.image && (
                              <Image
                                src={urlFor(sub.image).url()}
                                alt={`${sub.category} category image`}
                                fill
                                loading="lazy"
                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                quality={80}
                                className="z-0 object-cover opacity-10 transition-[scale_opacity] duration-300 group-hover:opacity-50 hover:scale-105"
                              />
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  {/* <Link
                    href={props.href!}
                    ref={ref}
                    className={cn(
                      "hover:bg-accent bg-popover hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
                      className
                    )}
                    {...props}
                  >
                    <div className="z-50 pt-8 text-lg leading-none">
                      {title}
                    </div>
                    {image && (
                      <Image
                        src={urlFor(image).url()}
                        alt={`${title} category image`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        quality={80}
                        className="z-0 object-cover opacity-10 transition-[scale_opacity] duration-300 group-hover:opacity-50 hover:scale-105"
                      />
                    )}
                    <div className="from-background/50 absolute -bottom-1 left-0 z-40 h-1/2 w-full bg-gradient-to-t to-transparent" />
                    {children}
                  </Link> */}
                </NavigationMenuContent>
                {/* <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[72rem] lg:grid-cols-3">
                    <li>
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
                        href={`/services/${sub.slug?.current ?? "/"}`}
                        title={sub.category!}
                        key={sub._id}
                        className="group relative z-50 overflow-hidden"
                        image={sub.image}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent> */}
              </NavigationMenuItem>
            ) : nav.title === "Products" ? (
              <NavigationMenuItem className="relative" key={nav.href}>
                <NavigationMenuTrigger>
                  <Link href={nav.href}>{nav.title}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[72rem] lg:grid-cols-[.75fr_1fr_1fr_1fr]">
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
                        href={`/products/${sub.slug?.current ?? "/"}`}
                        title={sub.category!}
                        key={sub._id}
                        className="group relative overflow-hidden"
                        image={sub.image}
                      >
                        <span className="sr-only">
                          {sub.description?.slice(0, 60)}...
                        </span>
                      </ListItem>
                    ))}
                    <ListItem
                      href={"/products"}
                      title={"Explore More..."}
                    ></ListItem>
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
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  image?: SanityImageSource | null;
  title: string;
  children?: React.ReactNode;
}

const ListItem = React.memo(
  React.forwardRef<React.ElementRef<"a">, ListItemProps>(
    ({ className, image, title, children, ...props }, ref) => {
      return (
        <li className="relative">
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
              <div className="z-50 pt-8 text-lg leading-none">{title}</div>
              {image && (
                <Image
                  src={urlFor(image).url()}
                  alt={`${title} category image`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  quality={80}
                  className="z-0 object-cover opacity-10 transition-[scale_opacity] duration-300 group-hover:opacity-50 hover:scale-105"
                />
              )}
              <div className="from-background/50 absolute -bottom-1 left-0 z-40 h-1/2 w-full bg-gradient-to-t to-transparent" />
              {children}
            </Link>
          </NavigationMenuLink>
        </li>
      );
    }
  )
);
ListItem.displayName = "ListItem";
