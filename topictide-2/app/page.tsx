import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">TopicTide</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Newsletter Generation
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create engaging newsletters in seconds with our AI-powered platform. Just provide a topic and let
                    our AI do the rest.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] rounded-lg border bg-background p-4 shadow-xl">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="text-sm font-medium">Newsletter Preview</div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="text-xs text-muted-foreground">AI Generated</div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-auto py-4">
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold">Tech Trends Newsletter</h2>
                        <p className="text-sm text-muted-foreground">
                          The latest in AI, blockchain, and emerging technologies.
                        </p>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">AI Breakthroughs</h3>
                          <p className="text-sm">
                            This month has seen remarkable advancements in generative AI models, with new capabilities
                            for content creation and analysis.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Blockchain Updates</h3>
                          <p className="text-sm">
                            The blockchain ecosystem continues to evolve with new protocols focused on scalability and
                            energy efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                TopicTide makes newsletter creation effortless
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-10 mt-8">
              <div className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border bg-background shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-medium">AI-Generated Content</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Create professional newsletters with just a few clicks
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border bg-background shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-medium">Customizable</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Add keywords and instructions to tailor your newsletter
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border bg-background shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="16" height="13" x="4" y="5" rx="2" />
                    <path d="m22 5-10 8L2 5" />
                    <path d="M2 10V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v5" />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-medium">Instant Delivery</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Send newsletters to your contacts with one click
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border bg-background shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                    <path d="M12 8v4l2 2" />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-medium">History</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Access and reuse your past newsletters anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 TopicTide. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

