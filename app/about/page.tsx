import { APP_NAME } from "@/constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Target, Eye, Handshake } from "lucide-react"
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="mb-12 space-y-12">
      <section className="bg-animated-gradient flex min-h-[300px] items-center justify-center py-12 md:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Welcome to {APP_NAME} – where connections are made and stories
            begin. We are dedicated to bringing people together in meaningful
            ways.
          </p>
        </div>
      </section>



      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Target className="mb-2 h-6 w-6 text-blue-500" />
                <CardTitle className="text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      Create a vibrant and secure platform that fosters genuine
                      connections, empowering individuals to find companionship,
                      friendship, and love.
                    </li>
                    <li>
                      Provide an inclusive environment where everyone feels
                      valued and respected.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Eye className="mb-2 h-6 w-6 text-purple-500" />
                <CardTitle className="text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      We envision a world where technology enhances human
                      relationships, making it easier for people to connect
                      deeply and build lasting bonds.
                    </li>
                    <li>
                      We aim to be the leading platform for meaningful
                      interactions globally.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Handshake className="mb-2 h-6 w-6 text-green-500" />
                <CardTitle className="text-center">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      Integrity: Upholding honesty and transparency in all our
                      interactions.
                    </li>
                    <li>
                      Empathy: Understanding and sharing the feelings of others.
                    </li>
                    <li>
                      Innovation: Continuously improving and adapting to user
                      needs.
                    </li>
                    <li>
                      Community: Building a supportive and engaging environment.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>





      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Find Your Match?
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Join our community today and start your journey towards finding a
            meaningful connection. Signing up is easy and free.
          </p>
          <Button asChild size="lg">
            <Link href="/auth">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
