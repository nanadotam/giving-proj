"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon } from 'lucide-react'
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  const upcomingEvents = [
    { id: 1, name: "Community Cleanup", date: "2023-07-15", location: "City Park" },
    { id: 2, name: "Charity Gala", date: "2023-08-01", location: "Grand Hotel" },
    { id: 3, name: "Fun Run for Education", date: "2023-08-20", location: "Downtown" },
  ]

  const pastEvents = [
    { id: 4, name: "Food Drive", date: "2023-06-10", location: "Community Center" },
    { id: 5, name: "Art Auction", date: "2023-05-22", location: "Art Gallery" },
  ]

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Exciting Events</h1>
        </ScrollAnimation>
        
        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 rounded-full bg-muted p-1">
            <TabsTrigger value="upcoming" className="rounded-full data-[state=active]:bg-background">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past" className="rounded-full data-[state=active]:bg-background">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <ScrollAnimation key={event.id}>
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{event.name}</h3>
                      <p className="text-muted-foreground mb-2 flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" /> {event.date}
                      </p>
                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4" /> {event.location}
                      </p>
                      <Button className="w-full">Register</Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <ScrollAnimation key={event.id}>
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image src="/placeholder.svg" alt={event.name} width={400} height={200} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-primary">{event.name}</h3>
                      <p className="text-muted-foreground mb-2 flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" /> {event.date}
                      </p>
                      <p className="text-muted-foreground flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4" /> {event.location}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <ScrollAnimation>
          <Card className="rounded-2xl overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Volunteer Sign-up</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input id="name" placeholder="Your Name" className="rounded-full" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="rounded-full" />
                </div>
                <div>
                  <Label className="text-foreground">Available Dates</Label>
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={setSelectedDates}
                    className="rounded-xl border border-border"
                  />
                </div>
                <Button type="submit" className="w-full">Sign Up</Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </div>
  )
}

