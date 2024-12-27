"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const donations = [
  { id: 1, donor: "John Doe", amount: 100, method: "Credit Card", date: "2023-06-15", status: "Completed" },
  { id: 2, donor: "Jane Smith", amount: 50, method: "PayPal", date: "2023-06-14", status: "Completed" },
  { id: 3, donor: "Bob Johnson", amount: 200, method: "Bank Transfer", date: "2023-06-13", status: "Pending" },
  // Add more sample data as needed
]

export default function DonationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDonations = donations.filter(
    (donation) =>
      donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.amount.toString().includes(searchTerm) ||
      donation.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.date.includes(searchTerm) ||
      donation.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Donations Management</h1>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search donations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Export CSV</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Donor Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDonations.map((donation) => (
            <TableRow key={donation.id}>
              <TableCell>{donation.donor}</TableCell>
              <TableCell>${donation.amount}</TableCell>
              <TableCell>{donation.method}</TableCell>
              <TableCell>{donation.date}</TableCell>
              <TableCell>{donation.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

