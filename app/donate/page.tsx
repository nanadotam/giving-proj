"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { 
  CreditCard, 
  Wallet, 
  Apple, 
  Smartphone,
  Shield, 
  BadgeCheck 
} from 'lucide-react'

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("20")
  const [isRecurring, setIsRecurring] = useState(false)

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Make a Donation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="amount">Donation Amount</Label>
                  <RadioGroup defaultValue="20" onValueChange={setDonationAmount} className="flex space-x-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="amount-10" />
                      <Label htmlFor="amount-10">$10</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20" id="amount-20" />
                      <Label htmlFor="amount-20">$20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50" id="amount-50" />
                      <Label htmlFor="amount-50">$50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="amount-custom" />
                      <Label htmlFor="amount-custom">Custom</Label>
                    </div>
                  </RadioGroup>
                  {donationAmount === "custom" && (
                    <Input type="number" placeholder="Enter custom amount" className="mt-2" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="recurring" onCheckedChange={setIsRecurring} />
                  <Label htmlFor="recurring">Make this a monthly donation</Label>
                </div>
                <div>
                  <Label htmlFor="payment">Payment Method</Label>
                  <RadioGroup defaultValue="credit" className="grid grid-cols-3 gap-4 mt-2">
                    <div className="flex items-center justify-center border rounded-md p-4 hover:border-primary hover:bg-gray-50 transition-all cursor-pointer">
                      <RadioGroupItem value="credit" id="payment-credit" className="sr-only" />
                      <Label htmlFor="payment-credit" className="cursor-pointer">
                        <CreditCard className="w-10 h-10 text-gray-600 mb-2" />
                        <span className="block mt-2 text-sm">Credit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center justify-center border rounded-md p-4 hover:border-primary hover:bg-gray-50 transition-all cursor-pointer">
                      <RadioGroupItem value="paypal" id="payment-paypal" className="sr-only" />
                      <Label htmlFor="payment-paypal" className="cursor-pointer">
                        <svg className="w-10 h-10 mb-2" viewBox="0 0 24 24" fill="#00457C">
                          <path d="M20.067 8.478c.492.315.844.825.844 1.441 0 1.125-.93 2.038-2.063 2.038h-3.149l-.172.731h2.628c1.854 0 3.375-1.503 3.375-3.344 0-.787-.309-1.503-.814-2.038h-.649v1.172zm-6.678-3.39c-.465-.261-.992-.413-1.558-.413h-4.233l-.173.731h4.233c.992 0 1.854.675 1.854 1.509 0 .825-.862 1.509-1.854 1.509h-3.149l-.172.731h3.149c1.854 0 3.375-1.503 3.375-3.344 0-.787-.309-1.503-.814-2.038h-.658v1.315zm-6.814 4.531h-2.628l-.172.731h2.628c1.854 0 3.375-1.503 3.375-3.344 0-.787-.309-1.503-.814-2.038h-.649v1.172c.492.315.844.825.844 1.441 0 1.125-.93 2.038-2.063 2.038z"/>
                        </svg>
                        <span className="block mt-2 text-sm">PayPal</span>
                      </Label>
                    </div>
                    <div className="flex items-center justify-center border rounded-md p-4 hover:border-primary hover:bg-gray-50 transition-all cursor-pointer">
                      <RadioGroupItem value="applepay" id="payment-applepay" className="sr-only" />
                      <Label htmlFor="payment-applepay" className="cursor-pointer">
                        <Apple className="w-10 h-10 text-gray-800 mb-2" />
                        <span className="block mt-2 text-sm">Apple Pay</span>
                      </Label>
                    </div>
                    <div className="flex items-center justify-center border rounded-md p-4 hover:border-primary hover:bg-gray-50 transition-all cursor-pointer">
                      <RadioGroupItem value="mobilemoney" id="payment-mobilemoney" className="sr-only" />
                      <Label htmlFor="payment-mobilemoney" className="cursor-pointer">
                        <Smartphone className="w-10 h-10 text-gray-600 mb-2" />
                        <span className="block mt-2 text-sm">Mobile Money</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full">Donate Now</Button>
              </form>
            </CardContent>
          </Card>
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Impact</h2>
                <p className="mb-4">Here's what your donation can achieve:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>$10 provides a meal for a family in need</li>
                  <li>$20 supplies school materials for a child</li>
                  <li>$50 funds medical supplies for a community clinic</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Secure Donation</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="w-10 h-10 text-green-600" />
                  <span className="text-gray-700">SSL Encrypted and Secure</span>
                </div>
                <div className="flex items-center space-x-4">
                  <BadgeCheck className="w-10 h-10 text-blue-600" />
                  <span className="text-gray-700">Verified Nonprofit Organization</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Spread the Word</h3>
          <p className="mb-4">Share your donation and inspire others to give!</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">Share on Facebook</Button>
            <Button variant="outline">Share on Twitter</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

