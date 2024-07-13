// import Image from "next/image";
//
// import Link from "next/link";
// import { Button } from "~/components/ui/button";

// export default function HomePage() {
//   return (
//     <div className="relative h-screen w-full">
{/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/aqua-guardians.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
{/* <Image src="/aqua-guardian.png" alt="Aqua Guardians" width={1000} height={1000} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Button asChild className="mt-16">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
} */}


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Iho4qXfx21e
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import type { LucideProps } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Monitoring Water Quality with AquaGuardians
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  AquaGuardians is a platform that provides real-time data and insights on the pollution levels of
                  lakes, helping to maintain clean water and support aquatic life.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Key Features</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <DropletIcon className="h-5 w-5" />
                      <span>Water quality monitoring (pH, temperature, TDS, turbidity)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <LeafIcon className="h-5 w-5" />
                      <span>Aquatic life viability assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TractorIcon className="h-5 w-5" />
                      <span>Suitability for agricultural use</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageCircleIcon className="h-5 w-5" />
                      <span>AI-powered chatbot for guidance and recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="space-x-4">
                  <Link
                    href="/lakes"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src="/aqua-guardians.png"
              alt="Hero"
              height={900}
              width={900}
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid max-w-5xl gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Empowering Communities with Water Quality Insights
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AquaGuardians provides comprehensive data and analysis on the pollution levels of lakes, helping
                  communities make informed decisions about water usage, conservation, and restoration efforts.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">
                    AquaGuardians tracks key water quality metrics in real-time, providing up-to-date information on the
                    health of local lakes.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Aquatic Life Assessment</h3>
                  <p className="text-muted-foreground">
                    Our platform evaluates the viability of aquatic life in lakes, helping to identify areas in need of
                    conservation efforts.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Agricultural Suitability</h3>
                  <p className="text-muted-foreground">
                    AquaGuardians assesses the suitability of lake water for agricultural use, ensuring safe and
                    sustainable irrigation.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">AI-powered Chatbot</h3>
                  <p className="text-muted-foreground">
                    Our intelligent chatbot provides personalized guidance on water quality issues and lake management
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Explore the Chatbot</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Personalized Guidance on Water Quality
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered chatbot is here to help you understand the pollution levels of your local lakes,
                  provide recommendations for lake cleanup, and assess the viability of aquatic life and suitability for
                  agricultural use.
                </p>
              </div>
              <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/chat"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Try the Chatbot
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the AquaGuardians Community
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of the movement to protect our lakes and ensure clean water for all. Sign up to receive updates,
                participate in discussions, and contribute to our mission.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Join Now</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <WhatsAppIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AquaGuardians. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function DropletIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}

function LeafIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function MessageCircleIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

function TractorIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h9l1 7.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </svg>
  )
}
function WavesIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  )
}

function XIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function TwitterIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function WhatsAppIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
      <path d="M20.5 3.49A12 12 0 0 0 12 0 12 12 0 0 0 1.5 17.857L0 24l6.143-1.5A12 12 0 0 0 12 24a12 12 0 0 0 12-12c0-3.205-1.248-6.219-3.5-8.51z" />
    </svg>
  )
}

function InstagramIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )}