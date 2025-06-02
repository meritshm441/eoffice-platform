import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Globe,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  UserCheck,
} from "lucide-react"
import Link from "next/link"

export default function EthiopianEOfficeWelcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">eOffice Ethiopia</h1>
                <p className="text-xs text-gray-500">Federal Ministries Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-green-500 text-green-700">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                System Online
              </Badge>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-green-100 text-green-800 mb-4">Digital Government Initiative</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                eOffice Ethiopia
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The unified digital platform connecting all Ethiopian Federal Ministries for seamless collaboration,
              efficient workflows, and enhanced citizen services.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">24</div>
              <div className="text-sm text-gray-600">Federal Ministries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">18,456</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">847K+</div>
              <div className="text-sm text-gray-600">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Actor Portals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Portal</h2>
            <p className="text-lg text-gray-600">Access the platform based on your role and responsibilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ministry Employees Portal */}
            <Card className="relative overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-lg group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Building2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Ministry Employees</CardTitle>
                <CardDescription className="text-gray-600">
                  Access your ministry's documents, workflows, and collaboration tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Document Management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Workflow Automation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Inter-Ministry Communication
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Task Management
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/ministries" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white group">
                      Access Ministry Portal
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    18,456 Users
                  </div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    4.8/5 Rating
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citizens Portal */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Citizens</CardTitle>
                <CardDescription className="text-gray-600">
                  Access government services, submit applications, and track requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                    Online Service Applications
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                    Document Requests
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                    Status Tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                    Digital Certificates
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/citizen-portal" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                      Access Citizen Portal
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                  <div className="flex items-center">
                    <UserCheck className="h-3 w-3 mr-1" />
                    234K+ Citizens
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    2.4h Avg Response
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Administrators Portal */}
            <Card className="relative overflow-hidden border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-lg group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">System Administrators</CardTitle>
                <CardDescription className="text-gray-600">
                  Manage system settings, monitor performance, and oversee operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                    System Monitoring
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                    User Management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                    Security Controls
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                    Analytics & Reports
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/admin" className="w-full">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white group">
                      Access Admin Dashboard
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    Secure Access
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                    99.9% Uptime
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600">Comprehensive digital solutions for modern government operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Digital Documents</h3>
              <p className="text-sm text-gray-600">Paperless document management and processing</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600">Seamless inter-ministry communication</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Enterprise-grade security and compliance</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle2 className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-sm text-gray-600">Streamlined workflows and automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold">eOffice Ethiopia</h3>
                  <p className="text-sm text-gray-400">Federal Ministries Portal</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Ethiopian Federal Ministries with digital transformation for efficient governance and
                enhanced citizen services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/user-manual" className="hover:text-white">
                    User Manual
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="hover:text-white">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/auth/login" className="hover:text-white">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Technical Support</li>
                <li>Training Resources</li>
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
