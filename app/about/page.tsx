import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About The Giving Project</h1>
        
        {/* Mission and Vision */}
        <section className="mb-16">
          <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/placeholder.svg"
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl max-w-2xl">
                  To inspire and empower communities through the act of giving, creating lasting positive change in the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg" },
              { name: "John Smith", role: "Operations Director", image: "/placeholder.svg" },
              { name: "Emily Brown", role: "Outreach Coordinator", image: "/placeholder.svg" },
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <Image src={member.image} alt={member.name} width={400} height={300} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {[
              { year: 2018, event: "The Giving Project Founded" },
              { year: 2019, event: "Launched First Major Campaign" },
              { year: 2020, event: "Expanded to 5 New Cities" },
              { year: 2021, event: "Reached $1M in Total Donations" },
              { year: 2022, event: "Launched Global Initiative" },
            ].map((item, index) => (
              <div key={item.year} className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-5/12 relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full z-10 
                                  ${index % 2 === 0 ? '-right-10' : '-left-10'}"></div>
                  <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners and Sponsors */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners and Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Image src="/placeholder.svg" alt={`Partner ${i}`} width={120} height={80} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

