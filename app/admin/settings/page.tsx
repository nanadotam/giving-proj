"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const [contactInfo, setContactInfo] = useState({
    email: "contact@thegivingproject.org",
    phone: "+1 (555) 123-4567",
    address: "123 Charity Lane, Giving City, GC 12345",
  })

  const [paymentMethods, setPaymentMethods] = useState({
    paypal: true,
    stripe: true,
    momo: false,
  })

  const [apiKeys, setApiKeys] = useState({
    paypal: "pk_test_PayPal123",
    stripe: "pk_test_Stripe456",
    paystack: "",
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
            />
          </div>
          <Button>Save Contact Information</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="paypal"
              checked={paymentMethods.paypal}
              onChange={(e) => setPaymentMethods({ ...paymentMethods, paypal: e.target.checked })}
            />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="stripe"
              checked={paymentMethods.stripe}
              onChange={(e) => setPaymentMethods({ ...paymentMethods, stripe: e.target.checked })}
            />
            <Label htmlFor="stripe">Stripe</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="momo"
              checked={paymentMethods.momo}
              onChange={(e) => setPaymentMethods({ ...paymentMethods, momo: e.target.checked })}
            />
            <Label htmlFor="momo">Mobile Money (MoMo)</Label>
          </div>
          <Button>Save Payment Methods</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="paypal-key">PayPal API Key</Label>
            <Input
              id="paypal-key"
              value={apiKeys.paypal}
              onChange={(e) => setApiKeys({ ...apiKeys, paypal: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="stripe-key">Stripe API Key</Label>
            <Input
              id="stripe-key"
              value={apiKeys.stripe}
              onChange={(e) => setApiKeys({ ...apiKeys, stripe: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="paystack-key">Paystack API Key</Label>
            <Input
              id="paystack-key"
              value={apiKeys.paystack}
              onChange={(e) => setApiKeys({ ...apiKeys, paystack: e.target.value })}
            />
          </div>
          <Button>Save API Keys</Button>
        </CardContent>
      </Card>
    </div>
  )
}

