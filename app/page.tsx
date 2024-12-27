import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <Image
          src="/pexels-rdne-6646918.jpg"
          alt="People helping each other"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Giving Hope, One Donation at a Time</h1>
          <p className="text-xl mb-8">Join us in making a difference in our community</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">Donate Now</Button>
            <Button size="lg" variant="outline" className="border-white text-orange-400 hover:bg-gray-100 hover:text-orange-500">Join the Movement</Button>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">$1M+</h3>
                <p>Raised for our cause</p>
              </CardContent>
            </Card>
            <Card className="bg-green-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">10,000</h3>
                <p>Lives changed</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-500 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p>Community events</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Current Campaign Progress</h3>
            <Progress value={75} className="w-full h-6" />
            <p className="text-center mt-2">75% of our $2M goal reached</p>
          </div>
        </div>
      </section>

      {/* Why Give? Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Give?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image src="/placeholder.svg" alt="Transparency" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p>We believe in full transparency. You'll always know where your donation goes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image src="/placeholder.svg" alt="Impact" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p>Your donation makes a real, measurable difference in people's lives.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image src="/placeholder.svg" alt="Community" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p>Join a network of like-minded individuals committed to positive change.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Image src="/placeholder.svg" alt={`Beneficiary ${index}`} width={100} height={100} className="rounded-full mx-auto mb-4" />
                      <p className="italic mb-4">"The Giving Project changed my life. I'm forever grateful for the support I received."</p>
                      <p className="font-semibold">- Jane Doe, Beneficiary</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be the Change You Wish to See</h2>
          <p className="text-xl mb-8">Your contribution can make a world of difference.</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">Donate Now</Button>
            <Button size="lg" variant="outline" className="border-white text-orange-400 hover:bg-gray-100 hover:text-orange-500">
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

