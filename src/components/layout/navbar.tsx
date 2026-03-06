import React from "react";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
	IconArticle,
	IconBubbleText,
	IconMenu3,
	IconPhone,
	IconStar,
} from "@tabler/icons-react";

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

import { Logo } from "@/assets/logo";

import { NAVLINKS } from "@/data/navbar";
import { cn } from "@/lib/utils";
import { getCategories, getServicesCategories } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

import type {
	PRODUCTS_CATEGORIES_QUERYResult,
	SERVICES_CATEOGORIES_QUERYResult,
} from "../../../sanity.types";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

interface LogoTextProps {
	className?: string;
}

export const LogoText = ({ className }: LogoTextProps) => (
	<p
		className={cn(
			"font-bold text-gray-700 text-xs md:text-sm dark:text-gray-300 [&_span]:text-sky-700 dark:[&_span]:text-sky-500",
			className
		)}
	>
		<span>ALLIED</span> GULF <span>CONSTRUCTION</span> SERVICES{" "}
		<span>W.L.L</span>
	</p>
);

const filteredNavLinks = NAVLINKS.filter((nav) => nav.title !== "Contact");

const MobileNav = ({
	services,
	products,
}: {
	services: SERVICES_CATEOGORIES_QUERYResult;
	products: PRODUCTS_CATEGORIES_QUERYResult;
}) => {
	return (
		<NavigationMenuList className="flex-col items-start gap-2">
			{filteredNavLinks.map((nav) => {
				const Icon = "Icon" in nav ? nav.Icon : undefined;
				return "submenus" in nav ? (
					<div className="w-full py-2" key={`${nav.href}`}>
						<p className="px-6 pb-2 font-light text-muted-foreground/80 text-xs">
							{nav.title}
						</p>

						<ul className="ml-1 w-full space-y-2">
							{nav.submenus.map(({ Icon, ...sub }) => (
								<NavigationMenuItem
									className="w-full"
									key={`${sub.href}-menu-sub`}
								>
									<DrawerClose asChild>
										<NavigationMenuLink
											asChild
											className={cn(navigationMenuTriggerStyle(), "px-6")}
										>
											<Link
												className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
												href={sub.href}
											>
												{Icon && (
													<Icon className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
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
					<div className="w-full py-2" key={`${nav.href}`}>
						<p className="px-6 pb-2 font-light text-muted-foreground/80 text-xs">
							{nav.title}
						</p>

						<ul className="ml-1 w-full space-y-2">
							{services.map((sub) => (
								<NavigationMenuItem
									className="w-full"
									key={`${sub.slug?.current}-menu-sub`}
								>
									<DrawerClose asChild>
										<NavigationMenuLink
											asChild
											className={cn(navigationMenuTriggerStyle(), "px-6")}
										>
											<Link
												className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
												href={`/services/${sub.slug?.current ?? "/"}`}
											>
												{Icon && (
													<Icon className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
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
					<div className="w-full py-2" key={`${nav.href}`}>
						<p className="px-6 pb-2 font-light text-muted-foreground/80 text-xs">
							{nav.title}
						</p>

						<ul className="ml-1 w-full space-y-2">
							{products.map((sub) => (
								<NavigationMenuItem
									className="w-full"
									key={`${sub.slug?.current}-menu-sub`}
								>
									<DrawerClose asChild>
										<NavigationMenuLink
											asChild
											className={cn(navigationMenuTriggerStyle(), "px-6")}
										>
											<Link
												className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
												href={`/products/${sub.slug?.current ?? "/"}`}
											>
												{Icon && (
													<Icon className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
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
					<NavigationMenuItem className="w-full" key={`${nav.href}-menu`}>
						<DrawerClose asChild>
							<NavigationMenuLink
								asChild
								className={cn(navigationMenuTriggerStyle(), "px-6")}
							>
								<Link
									className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
									href={nav.href}
								>
									{Icon && (
										<Icon className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
									)}
									{nav.title}
								</Link>
							</NavigationMenuLink>
						</DrawerClose>
					</NavigationMenuItem>
				);
			})}
			<NavigationMenuItem className="w-full">
				<DrawerClose asChild>
					<NavigationMenuLink
						asChild
						className={cn(navigationMenuTriggerStyle(), "px-6")}
					>
						<Link
							className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
							href={"/posts"}
						>
							<IconArticle className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
							Blog
						</Link>
					</NavigationMenuLink>
				</DrawerClose>
			</NavigationMenuItem>
			<NavigationMenuItem className="w-full">
				<DrawerClose asChild>
					<NavigationMenuLink
						asChild
						className={cn(navigationMenuTriggerStyle(), "px-6")}
					>
						<Link
							className="flex-row justify-start px-6 max-sm:w-full! max-sm:items-center"
							href="/company/faqs"
						>
							<IconBubbleText className="mr-2 size-4 shrink-0 stroke-1 text-muted-foreground/80" />
							FAQs
						</Link>
					</NavigationMenuLink>
				</DrawerClose>
			</NavigationMenuItem>
		</NavigationMenuList>
	);
};

export async function Navbar() {
	const [services, products] = await Promise.all([
		getServicesCategories(),
		getCategories(),
	]);

	return (
		<NavigationMenu
			aria-label="Main navigation"
			className="sticky top-0 z-50 w-full max-w-full items-center border-b bg-navbar/80 shadow-2xs backdrop-blur-lg"
		>
			<div className="container flex w-full max-w-7xl items-center gap-4 py-2 md:justify-between">
				<Drawer>
					<DrawerTrigger aria-label="Open menu" className="sm:hidden">
						<IconMenu3 className="size-4" />
					</DrawerTrigger>
					<DrawerContent className="max-h-[80svh] bg-card/75 backdrop-blur-xl">
						<DrawerHeader className="flex-row items-center gap-3">
							<Logo
								aria-hidden="true"
								className="h-12 w-auto shrink-0 md:h-16"
							/>
							<div>
								<DrawerTitle>
									<LogoText />
								</DrawerTitle>
								<DrawerDescription className="text-balance font-light text-xs">
									For top construction solutions and materials, count on us!
									We&apos;ve got what you need.
								</DrawerDescription>
							</div>
							<ThemeToggle />
						</DrawerHeader>

						<ScrollArea className="h-[60svh]">
							<MobileNav products={products} services={services} />
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
					aria-label="Allied Gulf Construction Services - Home"
					className="flex items-center gap-2"
					href="/"
				>
					<Logo aria-hidden="true" className="h-11 w-auto" />
					<LogoText className="pt-1.5" />
				</Link>

				<NavigationMenuList
					aria-label="Main navigation"
					className="hidden sm:flex"
				>
					{NAVLINKS.map((nav) =>
						"submenus" in nav ? (
							<NavigationMenuItem className="relative" key={nav.href}>
								<NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>

								<NavigationMenuContent>
									<ul className="mx-auto grid grid-cols-3 gap-3 p-6 md:w-dvw lg:w-248">
										{nav.submenus.map((sub) => (
											<li key={sub.href}>
												<NavigationMenuLink asChild>
													<Link
														className={cn(
															"group flex w-full flex-col justify-end gap-4 rounded-xl bg-popover pt-12 transition-colors hover:bg-primary"
														)}
														href={sub.href}
													>
														<div className="space-y-2 p-4">
															<IconStar className="text-primary transition-colors group-hover:text-primary-foreground" />
															<p className="text-xs">{sub.subtitle}</p>
															<h2 className="pb-3 font-medium font-poly-sans text-xl leading-none">
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
									<ul className="mx-auto grid grid-cols-4 gap-3 p-6 md:w-dvw lg:w-248">
										<li>
											<NavigationMenuLink asChild>
												<Link
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
													href={nav.href}
												>
													<div className="mt-4 mb-2 font-medium text-lg">
														Services
													</div>
													<p className="text-balance text-muted-foreground text-sm leading-tight">
														End-to-end construction and engineering services,
														expertly managing multiple projects across the
														Middle East from planning to completion.
													</p>
												</Link>
											</NavigationMenuLink>
										</li>
										{services.map((sub) => (
											<li
												className="relative h-full overflow-hidden"
												key={sub.slug?.current}
											>
												<NavigationMenuLink asChild>
													<Link
														className={cn(
															"flex h-full select-none flex-col items-start justify-end rounded-md bg-popover p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
														)}
														href={`/services/${sub.slug?.current ?? "/"}`}
													>
														<h2 className="pb-3 font-medium font-poly-sans text-xl leading-snug">
															{sub.category}
														</h2>
														{sub.image && (
															<Image
																alt={`${sub.category} category image`}
																className="z-0 object-cover opacity-10 transition-[scale_opacity] duration-300 hover:scale-105 group-hover:opacity-50"
																fill
																loading="lazy"
																quality={80}
																sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
																src={urlFor(sub.image).url()}
															/>
														)}
													</Link>
												</NavigationMenuLink>
											</li>
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
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-6xl lg:grid-cols-[.75fr_1fr_1fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<Link
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
													href={nav.href}
												>
													<div className="mt-4 mb-2 font-medium text-lg">
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
												className="group relative overflow-hidden"
												href={`/products/${sub.slug?.current}` as Route}
												image={sub.image}
												key={sub._id}
												title={sub.category ?? ""}
											>
												<span className="sr-only">
													{sub.description?.slice(0, 60)}...
												</span>
											</ListItem>
										))}
										<ListItem href={"/products"} title={"Explore More..."} />
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						) : (
							<NavigationMenuItem key={nav.href}>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
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

interface ListItemProps extends React.ComponentProps<typeof Link> {
	image?: SanityImageSource | null;
	title: string;
	children?: React.ReactNode;
}

function ListItem({
	className,
	image,
	title,
	children,
	href,
	...props
}: ListItemProps) {
	return (
		<li className="relative">
			<NavigationMenuLink asChild>
				<Link
					className={cn(
						"block select-none space-y-1 rounded-md bg-popover p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					href={href ?? "/"}
					{...props}
				>
					<div className="z-50 pt-8 text-lg leading-none">{title}</div>
					{image && (
						<Image
							alt={`${title} category image`}
							className="z-0 object-cover opacity-10 transition-[scale_opacity] duration-300 hover:scale-105 group-hover:opacity-50"
							fill
							loading="lazy"
							quality={80}
							sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
							src={urlFor(image).url()}
						/>
					)}
					<div className="absolute -bottom-1 left-0 z-40 h-1/2 w-full bg-linear-to-t from-background/50 to-transparent" />
					{children}
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
