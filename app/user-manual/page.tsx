import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Building2,
  Users,
  Globe,
  Shield,
  FileText,
  Workflow,
  HelpCircle,
  Download,
  Send,
  Mail,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Info,
  BookOpen,
  Video,
  MessageSquare,
  Languages,
} from "lucide-react"

export default function UserManualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">eOffice Ethiopia User Manual</h1>
                <p className="text-xs text-gray-500">Complete Guide to Government Digital Services</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                አማርኛ
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ethiopian eOffice System User Manual</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to the comprehensive user guide for the Ethiopian Federal Ministries eOffice system. This manual
            will help you navigate and use all features of the digital government platform.
          </p>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Quick Navigation
            </CardTitle>
            <CardDescription>Jump to the section relevant to your role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6 text-blue-500" />
                <span className="text-sm">Ministry Employee Guide</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Globe className="h-6 w-6 text-green-500" />
                <span className="text-sm">Citizen User Guide</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Shield className="h-6 w-6 text-red-500" />
                <span className="text-sm">Administrator Guide</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="ministry-employee">Ministry Employee</TabsTrigger>
            <TabsTrigger value="citizen">Citizen</TabsTrigger>
            <TabsTrigger value="admin">Administrator</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Getting Started */}
          <TabsContent value="getting-started" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>System Overview</CardTitle>
                <CardDescription>Understanding the Ethiopian eOffice System</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What is eOffice Ethiopia?</h3>
                  <p className="text-gray-600 mb-4">
                    The Ethiopian eOffice system is a comprehensive digital platform designed to streamline government
                    operations across all federal ministries. It provides tools for document management, workflow
                    automation, inter-ministry communication, and citizen services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Document Management</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Create, store, share, and manage documents digitally with version control and access
                        permissions.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Workflow className="h-5 w-5 text-green-500" />
                        <span className="font-medium">Workflow Automation</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Automate approval processes, track progress, and ensure timely completion of tasks.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Send className="h-5 w-5 text-purple-500" />
                        <span className="font-medium">Inter-Ministry Communication</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Secure messaging and collaboration tools between different government departments.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Globe className="h-5 w-5 text-orange-500" />
                        <span className="font-medium">Citizen Services</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Online portal for citizens to access government services and track applications.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Creation */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Creating Your Account</CardTitle>
                <CardDescription>Step-by-step guide to register for the system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Account creation requires verification and approval. The process may take 1-3 business days.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Visit Registration Page</h4>
                      <p className="text-sm text-gray-600">Go to /auth/register and select your user type</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Complete Basic Information</h4>
                      <p className="text-sm text-gray-600">
                        Provide your name, email, phone number, and select your role
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Organization Details</h4>
                      <p className="text-sm text-gray-600">
                        Enter ministry, department, or personal information based on your role
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Security Setup</h4>
                      <p className="text-sm text-gray-600">Create a strong password and agree to terms of service</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Verification & Approval</h4>
                      <p className="text-sm text-gray-600">
                        Wait for account verification and approval notification via email
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Login Process */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Logging In</CardTitle>
                <CardDescription>How to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Login Steps</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                      <li>Go to /auth/login</li>
                      <li>Select your user type from dropdown</li>
                      <li>Enter your email address</li>
                      <li>Enter your password</li>
                      <li>Click "Sign In"</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Security Tips</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Always log out when finished</li>
                      <li>Don't share your credentials</li>
                      <li>Use a strong, unique password</li>
                      <li>Report suspicious activity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ministry Employee Guide */}
          <TabsContent value="ministry-employee" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  Ministry Employee Guide
                </CardTitle>
                <CardDescription>Complete guide for government employees using the eOffice system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Dashboard Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Your dashboard provides a centralized view of your tasks, documents, and ministry activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm">Quick Stats</h4>
                      <p className="text-xs text-gray-600">View pending tasks, documents, and deadlines</p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm">Recent Activity</h4>
                      <p className="text-xs text-gray-600">Track recent document changes and workflow updates</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Document Management</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-medium">Creating Documents</h4>
                      <p className="text-sm text-gray-600">
                        Click "Create Document" → Select template → Fill content → Save as draft or publish
                      </p>
                    </div>
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h4 className="font-medium">Sharing Documents</h4>
                      <p className="text-sm text-gray-600">
                        Select document → Click "Share" → Choose recipients → Set permissions → Send
                      </p>
                    </div>
                    <div className="border-l-4 border-l-yellow-500 pl-4">
                      <h4 className="font-medium">Version Control</h4>
                      <p className="text-sm text-gray-600">
                        All changes are automatically tracked. View history in document details panel.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Workflow Management</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-purple-500 pl-4">
                      <h4 className="font-medium">Starting a Workflow</h4>
                      <p className="text-sm text-gray-600">
                        Go to Workflows → Create New → Select template → Define steps → Assign participants → Launch
                      </p>
                    </div>
                    <div className="border-l-4 border-l-red-500 pl-4">
                      <h4 className="font-medium">Tracking Progress</h4>
                      <p className="text-sm text-gray-600">
                        Monitor workflow status, view current step, and see pending approvals in real-time
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Tasks */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Common Tasks</CardTitle>
                <CardDescription>Frequently performed actions and how to complete them</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Daily Tasks</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Review pending approvals</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Check new messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Update document status</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Submit reports</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Weekly Tasks</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Review workflow performance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Archive completed documents</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Update team on progress</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500" />
                        <span>Plan upcoming activities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Citizen Guide */}
          <TabsContent value="citizen" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-green-500" />
                  Citizen User Guide
                </CardTitle>
                <CardDescription>How to access government services and track applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Available Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Civil Registration</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Birth certificates</li>
                        <li>• Marriage certificates</li>
                        <li>• Death certificates</li>
                        <li>• Name change requests</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Business Services</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Business registration</li>
                        <li>• Trade licenses</li>
                        <li>• Tax registration</li>
                        <li>• Import/export permits</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Personal Documents</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Passport applications</li>
                        <li>• National ID cards</li>
                        <li>• Driving licenses</li>
                        <li>• Travel documents</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">How to Apply for Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Select Service</h4>
                        <p className="text-sm text-gray-600">Browse available services and click "Apply Now"</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Fill Application</h4>
                        <p className="text-sm text-gray-600">Complete the online form with required information</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Upload Documents</h4>
                        <p className="text-sm text-gray-600">Attach required supporting documents</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Submit & Pay</h4>
                        <p className="text-sm text-gray-600">Review application and pay applicable fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-sm font-medium text-green-600">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium">Track Progress</h4>
                        <p className="text-sm text-gray-600">Monitor application status in "My Applications"</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tracking Your Applications</h3>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      You can track all your applications in the "My Applications" section. Each application shows:
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium">Status Information</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Current processing stage</li>
                          <li>• Expected completion date</li>
                          <li>• Required actions from you</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Status Types</h4>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Submitted</Badge>
                            <span className="text-xs">Application received</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                            <span className="text-xs">Being processed</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-800">Approved</Badge>
                            <span className="text-xs">Ready for collection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Administrator Guide */}
          <TabsContent value="admin" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Administrator Guide
                </CardTitle>
                <CardDescription>System administration and management functions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Administrator functions require elevated privileges. Use these features responsibly and follow
                    security protocols.
                  </AlertDescription>
                </Alert>

                <div>
                  <h3 className="text-lg font-semibold mb-3">User Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Account Management</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Approve new registrations</li>
                        <li>• Deactivate/reactivate accounts</li>
                        <li>• Reset user passwords</li>
                        <li>• Manage user roles and permissions</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Ministry Onboarding</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Set up new ministry accounts</li>
                        <li>• Configure ministry-specific workflows</li>
                        <li>• Train ministry staff</li>
                        <li>• Monitor adoption progress</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">System Monitoring</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-medium">Performance Metrics</h4>
                      <p className="text-sm text-gray-600">
                        Monitor system uptime, response times, and user activity across all ministries
                      </p>
                    </div>
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h4 className="font-medium">Security Monitoring</h4>
                      <p className="text-sm text-gray-600">
                        Track login attempts, security incidents, and compliance with government security standards
                      </p>
                    </div>
                    <div className="border-l-4 border-l-yellow-500 pl-4">
                      <h4 className="font-medium">Usage Analytics</h4>
                      <p className="text-sm text-gray-600">
                        Analyze feature usage, document processing times, and workflow efficiency
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Support Tickets</h4>
                      <p className="text-sm text-gray-600 mb-2">Manage and resolve user support requests:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Prioritize by urgency and impact</li>
                        <li>• Assign to appropriate team members</li>
                        <li>• Track resolution times</li>
                        <li>• Follow up with users</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">System Maintenance</h4>
                      <p className="text-sm text-gray-600 mb-2">Regular maintenance tasks:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Schedule system updates</li>
                        <li>• Backup data regularly</li>
                        <li>• Monitor storage usage</li>
                        <li>• Update security patches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Troubleshooting */}
          <TabsContent value="troubleshooting" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Troubleshooting Guide
                </CardTitle>
                <CardDescription>Common issues and their solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Login Issues</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-red-600 mb-2">Problem: Cannot log in</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Solutions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Check if your account is activated (check email for activation link)</li>
                          <li>Verify you're selecting the correct user type</li>
                          <li>Ensure caps lock is off when entering password</li>
                          <li>Try resetting your password</li>
                          <li>Clear browser cache and cookies</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-red-600 mb-2">Problem: Forgot password</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Solutions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Click "Forgot password?" on login page</li>
                          <li>Enter your registered email address</li>
                          <li>Check email (including spam folder) for reset instructions</li>
                          <li>Follow the link to create a new password</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Document Issues</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-red-600 mb-2">Problem: Cannot upload documents</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Solutions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Check file size (maximum 10MB per file)</li>
                          <li>Ensure file format is supported (PDF, DOC, DOCX, JPG, PNG)</li>
                          <li>Check internet connection stability</li>
                          <li>Try uploading one file at a time</li>
                          <li>Refresh the page and try again</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-red-600 mb-2">Problem: Document not showing</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Solutions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Check if you have permission to view the document</li>
                          <li>Verify the document hasn't been moved or deleted</li>
                          <li>Try refreshing the page</li>
                          <li>Contact the document owner for access</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Performance Issues</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-red-600 mb-2">Problem: System running slowly</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Solutions:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Check your internet connection speed</li>
                          <li>Close unnecessary browser tabs</li>
                          <li>Clear browser cache and cookies</li>
                          <li>Try using a different browser</li>
                          <li>Restart your computer</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    If these solutions don't resolve your issue, please contact technical support with details about
                    your problem, including error messages and steps you've already tried.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Support */}
          <TabsContent value="support" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Support & Contact Information
                </CardTitle>
                <CardDescription>How to get help when you need it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Methods</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Phone Support</h4>
                          <p className="text-sm text-gray-600">+251-11-XXX-XXXX</p>
                          <p className="text-xs text-gray-500">Available 24/7 for urgent issues</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Email Support</h4>
                          <p className="text-sm text-gray-600">support@eoffice.gov.et</p>
                          <p className="text-xs text-gray-500">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MessageSquare className="h-5 w-5 text-purple-600 mt-1" />
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-sm text-gray-600">Available in the system</p>
                          <p className="text-xs text-gray-500">Monday-Friday, 8 AM - 6 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Support Levels</h3>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="destructive">Critical</Badge>
                          <span className="text-sm font-medium">System Down</span>
                        </div>
                        <p className="text-xs text-gray-600">Immediate response, 24/7 availability</p>
                      </div>

                      <div className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className="bg-orange-100 text-orange-800">High</Badge>
                          <span className="text-sm font-medium">Major Features</span>
                        </div>
                        <p className="text-xs text-gray-600">Response within 4 hours</p>
                      </div>

                      <div className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                          <span className="text-sm font-medium">Minor Issues</span>
                        </div>
                        <p className="text-xs text-gray-600">Response within 24 hours</p>
                      </div>

                      <div className="border rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline">Low</Badge>
                          <span className="text-sm font-medium">General Questions</span>
                        </div>
                        <p className="text-xs text-gray-600">Response within 48 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Training Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <Video className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Video Tutorials</h4>
                      <p className="text-xs text-gray-600">Step-by-step video guides</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Watch Now
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 text-center">
                      <BookOpen className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">User Guides</h4>
                      <p className="text-xs text-gray-600">Detailed written instructions</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4 text-center">
                      <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Live Training</h4>
                      <p className="text-xs text-gray-600">Interactive training sessions</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Schedule
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Feedback</h3>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      We value your feedback to improve the eOffice system. Please share your suggestions, report bugs,
                      or let us know about your experience.
                    </p>
                    <Button className="bg-gradient-to-r from-green-600 to-yellow-500">
                      <Send className="h-4 w-4 mr-2" />
                      Send Feedback
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>&copy; 2025 Federal Democratic Republic of Ethiopia</p>
          <p>eOffice System User Manual - Version 1.0</p>
          <p>Last updated: June 1, 2025</p>
        </div>
      </div>
    </div>
  )
}
