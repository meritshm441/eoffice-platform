"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Languages,
  Shield,
  Users,
  Globe,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [language, setLanguage] = useState("en")

  // Form data
  const [formData, setFormData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    ministry: "",
    department: "",
    position: "",
    employeeId: "",
    nationalId: "",
    region: "",
    city: "",
    address: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  })

  const ministries = [
    "Ministry of Innovation and Technology",
    "Ministry of Finance",
    "Ministry of Defense",
    "Ministry of Foreign Affairs",
    "Ministry of Health",
    "Ministry of Education",
    "Ministry of Agriculture",
    "Ministry of Justice",
    "Ministry of Transport and Logistics",
    "Ministry of Water and Energy",
    "Ministry of Industry",
    "Ministry of Culture and Sport",
  ]

  const regions = [
    "Addis Ababa",
    "Afar",
    "Amhara",
    "Benishangul-Gumuz",
    "Dire Dawa",
    "Gambela",
    "Harari",
    "Oromia",
    "Sidama",
    "SNNPR",
    "Somali",
    "Tigray",
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return formData.userType && formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        if (formData.userType === "ministry-employee") {
          return formData.ministry && formData.department && formData.position && formData.employeeId
        } else if (formData.userType === "citizen") {
          return formData.nationalId && formData.region && formData.city
        } else if (formData.userType === "admin") {
          return formData.ministry && formData.position && formData.employeeId
        }
        return false
      case 3:
        return (
          formData.password &&
          formData.confirmPassword &&
          formData.password === formData.confirmPassword &&
          formData.password.length >= 8 &&
          formData.agreeToTerms &&
          formData.agreeToPrivacy
        )
      default:
        return false
    }
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
      setError("")
    } else {
      setError("Please fill in all required fields correctly")
    }
  }

  const handleBack = () => {
    setStep(step - 1)
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) {
      setError("Please complete all required fields")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      // Redirect to login with success message
      window.location.href = "/auth/login?registered=true"
    }, 2000)
  }

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Basic Information"
      case 2:
        return "Role & Organization"
      case 3:
        return "Security & Verification"
      default:
        return "Registration"
    }
  }

  const getProgressValue = () => {
    return (step / 3) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
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

        {/* Registration Form */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              {getStepTitle()} - Step {step} of 3
            </CardDescription>
            <Progress value={getProgressValue()} className="w-full" />
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4">
                  {/* User Type Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">User Type *</label>
                    <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ministry-employee">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-blue-500" />
                            <span>Ministry Employee</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="citizen">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-green-500" />
                            <span>Citizen</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="admin">
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-red-500" />
                            <span>System Administrator</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="+251 9XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Role & Organization */}
              {step === 2 && (
                <div className="space-y-4">
                  {formData.userType === "ministry-employee" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ministry *</label>
                        <Select
                          value={formData.ministry}
                          onValueChange={(value) => handleInputChange("ministry", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your ministry" />
                          </SelectTrigger>
                          <SelectContent>
                            {ministries.map((ministry) => (
                              <SelectItem key={ministry} value={ministry}>
                                {ministry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Department *</label>
                        <Input
                          placeholder="Enter your department"
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Position *</label>
                        <Input
                          placeholder="Enter your position/title"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Employee ID *</label>
                        <Input
                          placeholder="Enter your employee ID"
                          value={formData.employeeId}
                          onChange={(e) => handleInputChange("employeeId", e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}

                  {formData.userType === "citizen" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">National ID *</label>
                        <Input
                          placeholder="Enter your national ID number"
                          value={formData.nationalId}
                          onChange={(e) => handleInputChange("nationalId", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Region *</label>
                        <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your region" />
                          </SelectTrigger>
                          <SelectContent>
                            {regions.map((region) => (
                              <SelectItem key={region} value={region}>
                                {region}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">City *</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Address</label>
                        <Input
                          placeholder="Enter your address (optional)"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {formData.userType === "admin" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ministry/Department *</label>
                        <Select
                          value={formData.ministry}
                          onValueChange={(value) => handleInputChange("ministry", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your ministry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mint">Ministry of Innovation and Technology</SelectItem>
                            <SelectItem value="central-it">Central IT Department</SelectItem>
                            {ministries.map((ministry) => (
                              <SelectItem key={ministry} value={ministry}>
                                {ministry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Administrative Role *</label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => handleInputChange("position", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="system-admin">System Administrator</SelectItem>
                            <SelectItem value="security-admin">Security Administrator</SelectItem>
                            <SelectItem value="user-admin">User Administrator</SelectItem>
                            <SelectItem value="technical-support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Employee ID *</label>
                        <Input
                          placeholder="Enter your employee ID"
                          value={formData.employeeId}
                          onChange={(e) => handleInputChange("employeeId", e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 3: Security & Verification */}
              {step === 3 && (
                <div className="space-y-4">
                  {/* Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    {formData.password &&
                      formData.confirmPassword &&
                      formData.password !== formData.confirmPassword && (
                        <p className="text-xs text-red-500">Passwords do not match</p>
                      )}
                  </div>

                  {/* Terms and Privacy */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-green-600 hover:text-green-700">
                          Terms of Service
                        </Link>{" "}
                        and understand my responsibilities as a user of the Ethiopian Government eOffice system.
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked as boolean)}
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                        I acknowledge that I have read and understood the{" "}
                        <Link href="/privacy" className="text-green-600 hover:text-green-700">
                          Privacy Policy
                        </Link>{" "}
                        regarding the collection and use of my personal information.
                      </label>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Your account will be reviewed and verified before activation. You will receive an email
                      confirmation once approved.
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600"
                    disabled={!validateStep(step)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600"
                    disabled={isLoading || !validateStep(3)}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                )}
              </div>

              {/* Login Link */}
              <div className="text-center text-sm text-gray-600 pt-4 border-t">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-green-600 hover:text-green-700 font-medium">
                  Sign in
                </Link>
              </div>
            </form>
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
