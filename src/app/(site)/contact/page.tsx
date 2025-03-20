import { Icons } from "@/assets/icons";
import { SocialLinks } from "@/components/global/social-links";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/features/contact/contact-form";
import { NextSteps } from "@/features/contact/next-steps";

export default function ContactPage() {
  return (
    <div>
      <header className="bg-navbar border-muted-foreground/15 border-b">
        <div className="container flex h-72 max-w-7xl flex-col justify-between py-6">
          <div className="pt-9">
            <h1 className="text-6xl font-semibold">Contact us</h1>
            <p className="text-lg font-light">
              Enquiry For Construction services and Construction specialty
              material
            </p>
          </div>
          <SocialLinks />
        </div>
      </header>
      <section className="container grid max-w-7xl grid-cols-2 py-12">
        <div className="max-w-sm">
          <h2 className="text-4xl font-medium">What will be next step?</h2>
          <p className="pt-3 text-lg font-light">
            You are one step closer to build or renovate your perfect building
          </p>
          <NextSteps />
        </div>
        <Card className="-mt-44 rounded-md border border-sky-600 p-9">
          <CardContent className="space-y-9 px-0">
            <CardHeader className="flex items-center gap-2 px-0">
              <CardTitle className="sr-only">Write us something</CardTitle>
              <div className="flex size-14 shrink-0 items-center justify-center rounded bg-sky-500">
                <Icons.mail className="shrink-0" />
              </div>
              <CardDescription>
                Write us a few words about your project and product we'll get
                back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <Separator />
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
