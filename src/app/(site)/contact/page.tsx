import { Icons } from "@/assets/icons";
import { MultiStepLoader } from "@/components/animations/multi-step-loader";
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

const steps = [
  {
    title: "We'll prepare a proposal",
    description: "Required scope, timeline and aprox. price will be included",
  },
  {
    title: "Together we discuss it",
    description:
      "Let's get acquainted and discuss all the possible variants and options.",
  },
  {
    title: "Let's start building",
    description:
      "When the contract is signed and all goals are set we can start the first sprint.",
  },
];

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
          <h2 className="relative z-20 text-4xl font-medium">
            What will be next step?
          </h2>
          <p className="relative z-20 pt-3 text-lg font-light">
            You are one step closer to build or renovate your perfect building
          </p>

          <MultiStepLoader data={steps} />
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
