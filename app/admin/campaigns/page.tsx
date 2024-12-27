"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const campaigns = [
  { id: 1, name: "Summer Fundraiser", goal: 10000, deadline: "2023-08-31", donations: 5000 },
  { id: 2, name: "Back to School Drive", goal: 5000, deadline: "2023-09-15", donations: 2500 },
  { id: 3, name: "Holiday Giving", goal: 15000, deadline: "2023-12-25", donations: 7500 },
  // Add more sample data as needed
]

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.goal.toString().includes(searchTerm) ||
      campaign.deadline.includes(searchTerm) ||
      campaign.donations.toString().includes(searchTerm)
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Campaign Management</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Campaign</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <Input placeholder="Campaign Name" />
              <Input type="number" placeholder="Goal Amount" />
              <Input type="date" placeholder="Deadline" />
              <Textarea placeholder="Campaign Description" />
              <Button type="submit">Create Campaign</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Donations</TableHead>
            <TableHead>Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCampaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>${campaign.goal}</TableCell>
              <TableCell>{campaign.deadline}</TableCell>
              <TableCell>${campaign.donations}</TableCell>
              <TableCell>{Math.round((campaign.donations / campaign.goal) * 100)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

