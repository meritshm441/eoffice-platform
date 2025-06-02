import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Shield,
  FileText,
  Workflow,
  PenTool,
  CheckSquare,
  MessageSquare,
  Search,
  BarChart3,
  Lock,
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle2,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">eOffice Ethiopia</h1>
                <p className="text-xs text-gray-600">Shared E-Office System for Federal Ministries</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/user-manual">
                <Button variant="ghost">Help & Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-2 text-sm font-medium">
              Digital Government Initiative
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              eOffice Ethiopia
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The comprehensive digital platform transforming government operations across all Ethiopian Federal
            Ministries. Streamline workflows, enhance collaboration, and deliver efficient public services.
          </p>

          {/* Platform Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-sm text-gray-600">Federal Ministries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">18,456</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">847K+</div>
              <div className="text-sm text-gray-600">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Digital Government Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our shared e-Office system provides all the essential tools for modern government operations, ensuring
              efficiency, transparency, and seamless collaboration across ministries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Document Management System */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Document Management System</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Centralized document storage, version control, and secure access management for all government
                  documents.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  <span>847,293 documents managed</span>
                </div>
              </CardContent>
            </Card>

            {/* Workflow Automation */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Workflow className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Workflow Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automated approval processes, routing, and notifications to streamline government operations.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span>78% faster processing time</span>
                </div>
              </CardContent>
            </Card>

            {/* Electronic Signature */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <PenTool className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Electronic Signature</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Legally binding digital signatures with PKI infrastructure for secure document authentication.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>99.8% verification rate</span>
                </div>
              </CardContent>
            </Card>

            {/* Task Management */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <CheckSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Task Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive task assignment, tracking, and deadline management across all ministry departments.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  <span>87.3% completion rate</span>
                </div>
              </CardContent>
            </Card>

            {/* Communication & Collaboration */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Communication & Collaboration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Inter-ministry messaging, video conferencing, and collaborative workspaces for seamless coordination.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>156 active channels</span>
                </div>
              </CardContent>
            </Card>

            {/* Search & Retrieval */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Search className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Search & Retrieval</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced search capabilities with AI-powered content discovery and intelligent document indexing.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Zap className="h-4 w-4 mr-2" />
                  <span>0.3s average search time</span>
                </div>
              </CardContent>
            </Card>

            {/* Reporting & Analytics */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Reporting & Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Real-time dashboards, performance metrics, and comprehensive reporting for data-driven decisions.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <span>Real-time insights</span>
                </div>
              </CardContent>
            </Card>

            {/* Security & Access Control */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Lock className="h-6 w-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">Security & Access Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Multi-factor authentication, role-based permissions, and enterprise-grade security protocols.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Zero security incidents</span>
                </div>
              </CardContent>
            </Card>

            {/* System Integration */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg">System Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Seamless integration with existing government systems, databases, and third-party applications.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>24 systems connected</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Actor Portals Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Portal</h2>
            <p className="text-lg text-gray-600">
              Access the platform through your designated portal based on your role and responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ministry Employees Portal */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Ministry Employees</CardTitle>
                <CardDescription className="text-gray-600">
                  Access ministry-specific tools and workflows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Document Management & Workflows
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Task Assignment & Tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Inter-Ministry Communication
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Electronic Signatures
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Reporting & Analytics
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.8/5</span>
                    <span className="text-xs text-gray-500">(18,456 users)</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    24 Ministries
                  </Badge>
                </div>

                <Link href="/ministries" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 group-hover:shadow-lg transition-all duration-300">
                    Access Ministry Portal
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Citizens Portal */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Citizens</CardTitle>
                <CardDescription className="text-gray-600">
                  Access government services and track requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
                    Online Service Applications
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
                    Document Request & Status
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
                    Digital Certificate Downloads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
                    Payment Processing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-500" />
                    Support & Feedback
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.6/5</span>
                    <span className="text-xs text-gray-500">(234,567 users)</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Public Access
                  </Badge>
                </div>

                <Link href="/citizen-portal" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 group-hover:shadow-lg transition-all duration-300">
                    Access Citizen Portal
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* System Administrators Portal */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">System Administrators</CardTitle>
                <CardDescription className="text-gray-600">Manage system operations and configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                    System Monitoring & Analytics
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                    User Management & Permissions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                    Security & Compliance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                    System Configuration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                    Performance Optimization
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9/5</span>
                    <span className="text-xs text-gray-500">(234 admins)</span>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Admin Access
                  </Badge>
                </div>

                <Link href="/admin" className="block">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 group-hover:shadow-lg transition-all duration-300">
                    Access Admin Portal
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-green-400" />
                <span className="text-lg font-bold">eOffice Ethiopia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming government operations through digital innovation and seamless collaboration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/user-manual" className="hover:text-white">
                    User Manual
                  </Link>
                </li>
                <li>
                  <Link href="/auth/login" className="hover:text-white">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-white">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/auth/forgot-password" className="hover:text-white">
                    Reset Password
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Training Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">System Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-gray-400">All Systems Operational</span>
                </div>
                <div className="text-gray-400">Uptime: 99.9%</div>
                <div className="text-gray-400">Last Updated: Just now</div>
              </div>
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
