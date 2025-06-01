import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Building2,
  Eye,
  Languages,
} from "lucide-react"

export default function CitizenPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Ethiopian Government Portal</h1>
                <p className="text-xs text-gray-500">Citizen Services & Information</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                አማርኛ
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                English
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-yellow-500">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Ethiopian Government Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access government services, submit applications, track requests, and find public information all in one
            place.
          </p>
        </div>

        {/* Quick Search */}
        <Card className="mb-8 bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for services, documents, or information..."
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-yellow-500 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="services">Government Services</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="information">Public Information</TabsTrigger>
            <TabsTrigger value="contact">Contact & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            {/* Popular Services */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Popular Government Services</CardTitle>
                <CardDescription>Most requested services by citizens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-blue-500" />
                      <div>
                        <h3 className="font-medium">Birth Certificate</h3>
                        <p className="text-sm text-gray-500">Civil Registration</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Apply for or request a copy of your birth certificate</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">5-7 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-green-500" />
                      <div>
                        <h3 className="font-medium">Business License</h3>
                        <p className="text-sm text-gray-500">Trade & Industry</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Register your business and obtain necessary licenses</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">10-14 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-purple-500" />
                      <div>
                        <h3 className="font-medium">Passport Application</h3>
                        <p className="text-sm text-gray-500">Immigration Services</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Apply for new passport or renew existing one</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">15-21 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-orange-500" />
                      <div>
                        <h3 className="font-medium">Tax Registration</h3>
                        <p className="text-sm text-gray-500">Revenue Authority</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Register for tax identification number (TIN)</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">3-5 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-red-500" />
                      <div>
                        <h3 className="font-medium">Land Certificate</h3>
                        <p className="text-sm text-gray-500">Land Administration</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Apply for land ownership certificate</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">20-30 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <FileText className="h-8 w-8 text-teal-500" />
                      <div>
                        <h3 className="font-medium">Health Insurance</h3>
                        <p className="text-sm text-gray-500">Health Ministry</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Register for national health insurance program</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">7-10 days</Badge>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Categories */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Service Categories</CardTitle>
                <CardDescription>Browse services by ministry or department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Building2 className="h-6 w-6" />
                    <span className="text-sm">Civil Services</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Users className="h-6 w-6" />
                    <span className="text-sm">Business Services</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <FileText className="h-6 w-6" />
                    <span className="text-sm">Legal Documents</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Globe className="h-6 w-6" />
                    <span className="text-sm">Immigration</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            {/* Application Status */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Track Your Applications</CardTitle>
                <CardDescription>Monitor the status of your submitted applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business License Application</h3>
                        <p className="text-sm text-gray-500">Application ID: BL-2025-001234</p>
                        <p className="text-xs text-gray-400">Submitted: May 15, 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                      <p className="text-xs text-gray-500 mt-1">Step 2 of 4</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Tax Registration</h3>
                        <p className="text-sm text-gray-500">Application ID: TR-2025-005678</p>
                        <p className="text-xs text-gray-400">Submitted: May 10, 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                      <Button size="sm" variant="outline" className="mt-1">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Passport Application</h3>
                        <p className="text-sm text-gray-500">Application ID: PP-2025-009876</p>
                        <p className="text-xs text-gray-400">Submitted: May 5, 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">Additional Info Required</Badge>
                      <Button size="sm" className="mt-1">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Application Form */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Submit New Application</CardTitle>
                <CardDescription>Start a new application for government services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birth-cert">Birth Certificate</SelectItem>
                        <SelectItem value="business-license">Business License</SelectItem>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="tax-reg">Tax Registration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Priority</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Application Details</label>
                  <Textarea placeholder="Provide details about your application..." rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-500">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="information" className="space-y-6">
            {/* Public Information */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Public Information & Documents</CardTitle>
                <CardDescription>Access government policies, reports, and public documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <h3 className="font-medium">National Development Plan 2025-2030</h3>
                        <p className="text-sm text-gray-500">Ministry of Planning and Development</p>
                        <p className="text-xs text-gray-400">Published: January 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-green-500" />
                      <div>
                        <h3 className="font-medium">Digital Ethiopia 2030 Strategy</h3>
                        <p className="text-sm text-gray-500">Ministry of Innovation and Technology</p>
                        <p className="text-xs text-gray-400">Published: March 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-purple-500" />
                      <div>
                        <h3 className="font-medium">Annual Budget Report 2024</h3>
                        <p className="text-sm text-gray-500">Ministry of Finance</p>
                        <p className="text-xs text-gray-400">Published: February 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-orange-500" />
                      <div>
                        <h3 className="font-medium">Healthcare Policy Guidelines</h3>
                        <p className="text-sm text-gray-500">Ministry of Health</p>
                        <p className="text-xs text-gray-400">Published: April 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* News & Updates */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Government News & Updates</CardTitle>
                <CardDescription>Latest announcements and policy updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h3 className="font-medium">New eOffice System Rollout Continues</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      The shared eOffice system has been successfully implemented in 18 federal ministries, improving
                      efficiency by 78% and reducing document processing time significantly.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">May 30, 2025 • Ministry of Innovation and Technology</p>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h3 className="font-medium">Digital Services Expansion</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Citizens can now access over 50 government services online, including passport applications,
                      business licenses, and civil registration services.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">May 28, 2025 • Prime Minister's Office</p>
                  </div>

                  <div className="border-l-4 border-l-yellow-500 pl-4">
                    <h3 className="font-medium">Cybersecurity Framework Update</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Enhanced security measures have been implemented across all government digital platforms to
                      protect citizen data and ensure secure transactions.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">May 25, 2025 • Ministry of Innovation and Technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Contact Government Services</CardTitle>
                  <CardDescription>Get help with your applications and services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Citizen Service Hotline</p>
                      <p className="text-sm text-gray-600">+251-11-XXX-XXXX</p>
                      <p className="text-xs text-gray-500">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-600">support@gov.et</p>
                      <p className="text-xs text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Service Centers</p>
                      <p className="text-sm text-gray-600">Find nearest location</p>
                      <Button variant="link" className="p-0 h-auto text-xs">
                        View all locations
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>We're here to help with your questions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="application">Application Status</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Describe your question or issue..." rows={4} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Contact Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-500">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about government services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">How long does it take to process my application?</h3>
                    <p className="text-sm text-gray-600">
                      Processing times vary by service type. Most applications are processed within 5-15 business days.
                      You can track your application status in real-time using your application ID.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Can I submit applications online?</h3>
                    <p className="text-sm text-gray-600">
                      Yes! Most government services are now available online. You can submit applications, upload
                      documents, and track progress through this portal.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">What documents do I need for my application?</h3>
                    <p className="text-sm text-gray-600">
                      Required documents vary by service. Each service page lists the specific documents needed.
                      Generally, you'll need valid ID, proof of address, and service-specific documents.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">How can I check my application status?</h3>
                    <p className="text-sm text-gray-600">
                      Use your application ID in the "My Applications" section to track progress. You'll also receive
                      SMS and email notifications for status updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Rate Our Services</CardTitle>
                <CardDescription>Help us improve by sharing your experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-8 w-8 text-yellow-400 fill-current cursor-pointer hover:text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Click to rate your experience</p>
                  <Textarea placeholder="Tell us about your experience (optional)..." rows={3} />
                  <Button className="bg-gradient-to-r from-green-600 to-yellow-500">Submit Feedback</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="font-bold">Ethiopian Government</span>
              </div>
              <p className="text-sm text-gray-400">
                Serving citizens through digital transformation and efficient government services.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Government Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Public Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Ministries</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Ministry of Finance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ministry of Health
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ministry of Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All Ministries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Hotline: +251-11-XXX-XXXX</li>
                <li>Email: support@gov.et</li>
                <li>Hours: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Federal Democratic Republic of Ethiopia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
