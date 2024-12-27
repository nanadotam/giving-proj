import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Small Donations",
    excerpt: "Discover how even the smallest contributions can make a big difference in our community.",
    image: "/placeholder.svg",
    category: "Campaign Updates",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Volunteer Spotlight: Meet Sarah",
    excerpt: "Learn about Sarah's inspiring journey as a volunteer and how she's changing lives.",
    image: "/placeholder.svg",
    category: "Success Stories",
    date: "2023-06-10",
  },
  {
    id: 3,
    title: "Upcoming Summer Fundraiser",
    excerpt: "Get ready for our biggest event of the year! Find out how you can participate and contribute.",
    image: "/placeholder.svg",
    category: "Events",
    date: "2023-06-05",
  },
]

const categories = ["All", "Campaign Updates", "Success Stories", "Events", "Community Spotlights"]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Button className="mt-4">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link href="#" className="text-blue-600 hover:underline">{category}</Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <div className="flex">
                  <Input placeholder="Search blog posts..." className="mr-2" />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

