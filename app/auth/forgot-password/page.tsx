"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, Mail, ArrowLeft, Languages, Globe, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [language, setLanguage] = useState("en")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">eOffice Ethiopia</h1>
                <p className="text-sm text-gray-600">Federal Ministries Portal</p>
              </div>
            </div>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Check Your Email</CardTitle>
              <CardDescription>We've sent password reset instructions to your email address</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  If an account with email <strong>{email}</strong> exists, you will receive password reset instructions
                  within a few minutes.
                </AlertDescription>
              </Alert>

              <div className="text-sm text-gray-600 space-y-2">
                <p>Didn't receive the email? Check your spam folder or:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Make sure you entered the correct email address</li>
                  <li>Wait a few minutes for the email to arrive</li>
                  <li>Contact support if you continue having issues</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
                  Try Different Email
                </Button>
                <Link href="/auth/login">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-500">Back to Sign In</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">eOffice Ethiopia</h1>
              <p className="text-sm text-gray-600">Federal Ministries Portal</p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-gradient-to-r from-green-600 to-yellow-500" : ""}
              >
                <Globe className="h-4 w-4 mr-1" />
                English
              </Button>
              <Button
                variant={language === "am" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("am")}
                className={language === "am" ? "bg-gradient-to-r from-green-600 to-yellow-500" : ""}
              >
                <Languages className="h-4 w-4 mr-1" />
                አማርኛ
              </Button>
            </div>
          </div>
        </div>

        {/* Reset Password Form */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you instructions to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600"
                disabled={isLoading}
              >
                {isLoading ? "Sending Instructions..." : "Send Reset Instructions"}
              </Button>

              {/* Back to Login */}
              <div className="text-center">
                <Link
                  href="/auth/login"
                  className="inline-flex items-center text-sm text-green-600 hover:text-green-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Sign In
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="text-sm">
              <p className="font-medium text-blue-900 mb-1">Security Notice</p>
              <p className="text-blue-700">
                For security reasons, we don't confirm whether an email address is registered in our system. If you
                don't receive an email, please contact your system administrator.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>&copy; 2025 Federal Democratic Republic of Ethiopia</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
