import { memo } from "react";

import Link from "next/link";

import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";

import { SocialLinks } from "../global/social-links";
import { Button } from "../ui/button";

const ContactInfo = memo(() => (
	<div
		className="col-span-2 max-lg:col-span-full"
		itemScope
		itemType="http://schema.org/Organization"
	>
		<meta content="Allied Gulf Construction Services W.L.L" itemProp="name" />
		<meta content="https://alliedgulf.me" itemProp="url" />
		<h6 className="mb-4 font-semibold text-xl">Contact</h6>
		<ul className="space-y-3">
			<li>
				<div
					className="flex items-center space-x-2 lg:justify-start"
					itemProp="address"
					itemScope
					itemType="http://schema.org/PostalAddress"
				>
					<IconLocation aria-hidden="true" />
					<Link
						aria-label="Visit Allied Gulf Construction Services W.L.L office location in Manama, Kingdom of Bahrain on Google Maps"
						className="cursor-pointer text-left transition duration-300 hover:text-sky-500"
						href="https://goo.gl/maps/djSrXwAjCSwqGefi7"
						itemProp="url"
						passHref
						rel="noopener noreferrer"
						target="_blank"
					>
						<span itemProp="name">ALLIED GULF CONSTRUCTION SERVICES W.L.L</span>
						<br />
						<span itemProp="streetAddress">
							Flat: 61, Building: 317, Road: 39, Block: 337, Umm Al Hassam
						</span>
						<br />
						<span itemProp="postOfficeBoxNumber">P.O. Box: 21341</span>,{" "}
						<span itemProp="addressLocality">Manama</span>,{" "}
						<span itemProp="addressCountry">Kingdom of Bahrain</span>
					</Link>
				</div>
			</li>
			<li className="flex items-center space-x-2 lg:justify-start">
				<IconPhone aria-hidden="true" />
				<div itemScope itemType="http://schema.org/ContactPoint">
					<meta content="customer service" itemProp="contactType" />
					<Link
						aria-label="Call our main office at +973 1779 1317"
						className="cursor-pointer transition duration-300 hover:text-sky-500"
						href="tel:+97317791317"
						itemProp="telephone"
					>
						+973 - 1779 1317
					</Link>
					<br />
					<Link
						aria-label="Call our mobile number at +973 3818 4631"
						className="cursor-pointer transition duration-300 hover:text-sky-500"
						href="tel:+97338184631"
						itemProp="telephone"
					>
						+973 - 3818 4631
					</Link>
					<br />
					<Link
						aria-label="Call our alternative number at +973 3468 5656"
						className="cursor-pointer transition duration-300 hover:text-sky-500"
						href="tel:+97334685656"
						itemProp="telephone"
					>
						+973 - 3468 5656
					</Link>
				</div>
			</li>
			<li className="flex items-center space-x-2 lg:justify-start">
				<IconMail aria-hidden="true" />
				<div>
					<Link
						aria-label="Send email to our trade department"
						className="cursor-pointer transition duration-300 hover:text-sky-500"
						href="mailto:trade@alliedgulf.me"
						itemProp="email"
					>
						trade@alliedgulf.me
					</Link>
					<br />
					<Link
						aria-label="Send email to our sales department"
						className="cursor-pointer transition duration-300 hover:text-sky-500"
						href="mailto:sales@alliedgulf.me"
						itemProp="email"
					>
						sales@alliedgulf.me
					</Link>
				</div>
			</li>
		</ul>
	</div>
));
ContactInfo.displayName = "ContactInfo";

const QuickLinks = memo(() => (
	<nav aria-label="Main website links">
		<h6 className="mb-4 font-semibold text-xl">Quick Links</h6>
		<ul className="space-y-2">
			{NAVLINKS.filter((nav) => nav.title !== "Company").map((nav) => (
				<li key={nav.href}>
					<Link
						className="rounded-sm transition-colors hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
						href={nav.href}
					>
						{nav.title}
					</Link>
				</li>
			))}
			<li>
				<Link
					className="rounded-sm transition-colors hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
					href="/posts"
				>
					Blogs
				</Link>
			</li>
		</ul>
	</nav>
));
QuickLinks.displayName = "QuickLinks";

const CompanyLinks = memo(() => (
	<nav aria-label="Company information links">
		<h6 className="mb-4 font-semibold text-xl">Company</h6>
		<ul className="space-y-2">
			{NAVLINKS.map(
				(nav) =>
					nav.title === "Company" &&
					nav.submenus &&
					nav.submenus.length > 0 &&
					nav.submenus.map((sub) => (
						<li key={sub.href}>
							<Link
								className="rounded-sm transition-colors hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
								href={sub.href}
							>
								{sub.title}
							</Link>
						</li>
					))
			)}
			<li>
				<Link
					className="rounded-sm transition-colors hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
					href="/company/faqs"
				>
					FAQs
				</Link>
			</li>
		</ul>
	</nav>
));
CompanyLinks.displayName = "CompanyLinks";

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer
			className="mt-12 rounded-t-4xl bg-linear-to-b from-sky-700 to-primary/90 py-12 pt-16 text-sky-100"
			itemScope
			itemType="http://schema.org/WPFooter"
		>
			<div className="grid grid-cols-2 gap-6 px-4 md:grid-cols-4 md:gap-12 md:px-16 lg:grid-cols-6">
				<div className="col-span-2">
					<section aria-label="About Allied Gulf Construction Services">
						<h5 className="mb-4 font-bold text-2xl text-white">
							Allied Gulf Construction Services W.L.L
						</h5>
						<p
							className="text-balance font-light text-lg"
							itemProp="description"
						>
							For the best construction solution services and specialty
							materials, look no further than us! We have everything you need to
							get the job done right, and we're always here to help.
						</p>
					</section>

					<section
						aria-label="Social media links"
						className="max-sm:col-span-2"
					>
						<h6 className="mt-6 font-semibold text-xl">Connect With Us</h6>
						<SocialLinks />
					</section>
				</div>

				<QuickLinks />
				<CompanyLinks />
				<ContactInfo />

				<div className="col-span-full mt-8 flex flex-wrap items-center justify-between gap-4">
					<p className="text-sm">
						<span itemProp="copyrightYear">{year}</span> © Allied Gulf
						Construction Services W.L.L. All Rights Reserved
					</p>
					<Button asChild className="w-fit px-0" variant="link">
						<Link
							className="rounded-sm text-sm transition-colors hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
							href="/company/policies"
						>
							Terms of Service and Privacy Policy
						</Link>
					</Button>
				</div>
			</div>
		</footer>
	);
};
