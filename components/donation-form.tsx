"use client"

import { useState } from "react"
import { usePaystackPayment } from "react-paystack"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DonationForm() {
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: parseFloat(amount) * 100, // Paystack expects amount in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
  }

  const initializePayment = usePaystackPayment(config)

  const onSuccess = (reference: any) => {
    console.log("Payment successful", reference)
    // Handle successful payment (e.g., show success message, update database)
  }

  const onClose = () => {
    console.log("Payment closed")
    // Handle payment modal close
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    initializePayment(onSuccess, onClose)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="amount">Donation Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
      </div>
      <div>
        <Label>Payment Method</Label>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" id="bank" />
            <Label htmlFor="bank">Bank Transfer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="momo" id="momo" />
            <Label htmlFor="momo">Mobile Money</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit" className="w-full">Donate Now</Button>
    </form>
  )
}

