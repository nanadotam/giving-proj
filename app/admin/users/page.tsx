"useclient"

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
import { Switch } from "@/components/ui/switch"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", donationHistory: "$500", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", donationHistory: "$250", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", donationHistory: "$100", status: "Inactive" },
  // Add more sample data as needed
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.donationHistory.includes(searchTerm) ||
      user.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>
      <Input
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Donation History</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.donationHistory}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Switch
                  checked={user.status === "Active"}
                  onCheckedChange={() => {
                    // Handle user status change
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

