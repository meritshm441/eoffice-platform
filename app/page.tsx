import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Bell,
  FileText,
  Search,
  Settings,
  Users,
  Inbox,
  Send,
  FileCheck,
  Clock,
  FolderOpen,
  BarChart2,
  HelpCircle,
  LogOut,
  Shield,
  Globe,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function EthiopianEOfficeDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r shadow-lg">
        <div className="p-4 border-b bg-gradient-to-r from-green-600 to-yellow-500">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-xl font-bold text-white">eOffice Ethiopia</h1>
              <p className="text-xs text-green-100">Federal Ministries Portal</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-3 bg-gray-50 border-b">
            <div className="text-xs font-medium text-gray-600 mb-1">Ministry</div>
            <div className="text-sm font-semibold text-gray-800">Ministry of Innovation & Technology</div>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-green-100 text-green-800"
            >
              <BarChart2 className="mr-3 h-5 w-5 text-green-600" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <FileText className="mr-3 h-5 w-5 text-gray-400" />
              Document Management
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Inbox className="mr-3 h-5 w-5 text-gray-400" />
              Workflow Automation
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <FileCheck className="mr-3 h-5 w-5 text-gray-400" />
              Task Management
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Send className="mr-3 h-5 w-5 text-gray-400" />
              Inter-Ministry Communication
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <FolderOpen className="mr-3 h-5 w-5 text-gray-400" />
              Records & Archives
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Shield className="mr-3 h-5 w-5 text-gray-400" />
              Electronic Signature
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Globe className="mr-3 h-5 w-5 text-gray-400" />
              Citizen Services
            </Link>
          </nav>

          <div className="border-t p-4">
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <Settings className="mr-3 h-5 w-5 text-gray-400" />
              System Settings
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <HelpCircle className="mr-3 h-5 w-5 text-gray-400" />
              Training & Support
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Search documents, workflows..." className="pl-10 w-80" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">DA</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">Dr. Abebe Tadesse</div>
                  <div className="text-xs text-gray-500">System Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Federal Ministries Dashboard</h1>
            <p className="text-gray-600">Welcome to the Shared E-Office System for Ethiopian Federal Ministries</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">System Adoption Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">18/24</div>
                <p className="text-xs text-gray-500">Ministries fully operational</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Processing Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <p className="text-xs text-gray-500">Reduction in processing time</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">Target: 80%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Active Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">12,847</div>
                <p className="text-xs text-gray-500">In current workflows</p>
                <div className="flex items-center mt-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">98.5% digitized</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Security Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Secure</div>
                <p className="text-xs text-gray-500">Zero security incidents</p>
                <div className="flex items-center mt-2">
                  <Shield className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">All systems protected</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ministry Status Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ministry Implementation Status</CardTitle>
              <CardDescription>Real-time status of eOffice system across all federal ministries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-green-700">Fully Operational (18)</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Ministry of Innovation & Technology</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Finance</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Defense</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Foreign Affairs</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Active
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500">+14 more ministries</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-yellow-700">In Progress (4)</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Ministry of Agriculture</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        Training
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Health</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        Migration
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Education</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        Testing
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Transport</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        Setup
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-red-700">Pending (2)</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Ministry of Culture & Sport</span>
                      <Badge variant="destructive" className="bg-red-100 text-red-700">
                        Infrastructure
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Ministry of Mines & Petroleum</span>
                      <Badge variant="destructive" className="bg-red-100 text-red-700">
                        Planning
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="workflows" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="workflows">Active Workflows</TabsTrigger>
              <TabsTrigger value="documents">Recent Documents</TabsTrigger>
              <TabsTrigger value="communications">Inter-Ministry Comms</TabsTrigger>
              <TabsTrigger value="analytics">System Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="workflows" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Priority Workflows Across Ministries</CardTitle>
                  <CardDescription>High-priority workflows requiring attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4 bg-red-50 border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span className="font-medium">National Budget Approval 2025</span>
                      </div>
                      <Badge variant="destructive">Urgent</Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Ministry of Finance → Ministry of Planning → Prime Minister's Office
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Due: June 15, 2025</div>
                      <Progress value={60} className="w-32" />
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">Digital Ethiopia 2030 Strategy</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">High Priority</Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Ministry of Innovation & Technology → All Ministries
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Due: July 1, 2025</div>
                      <Progress value={35} className="w-32" />
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <FileCheck className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">Healthcare Infrastructure Development</span>
                      </div>
                      <Badge variant="outline" className="border-blue-500 text-blue-700">
                        Medium
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Ministry of Health → Ministry of Finance → Regional Governments
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">Due: August 15, 2025</div>
                      <Progress value={80} className="w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recently Created Documents</CardTitle>
                  <CardDescription>Latest documents across all ministries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">Agricultural Development Policy 2025</p>
                        <p className="text-xs text-gray-500">Ministry of Agriculture • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge>Draft</Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium">Diplomatic Relations Report - Q2 2025</p>
                        <p className="text-xs text-gray-500">Ministry of Foreign Affairs • 5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Approved</Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm font-medium">Cybersecurity Framework Implementation</p>
                        <p className="text-xs text-gray-500">Ministry of Innovation & Technology • 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">Under Review</Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inter-Ministry Communications</CardTitle>
                  <CardDescription>Recent communications between ministries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">MF</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Budget allocation request for infrastructure</p>
                        <p className="text-xs text-gray-500">
                          Ministry of Finance → Ministry of Transport • 30 min ago
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">New</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-green-700">MH</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Healthcare digitization progress update</p>
                        <p className="text-xs text-gray-500">
                          Ministry of Health → Ministry of Innovation & Technology • 2 hours ago
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">Read</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md border">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-purple-700">ME</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Educational technology integration proposal</p>
                        <p className="text-xs text-gray-500">
                          Ministry of Education → Ministry of Innovation & Technology • 1 day ago
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">Replied</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Uptime</span>
                      <span className="font-medium text-green-600">99.8%</span>
                    </div>
                    <Progress value={99.8} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Response Time</span>
                      <span className="font-medium text-blue-600">1.2s</span>
                    </div>
                    <Progress value={85} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">User Satisfaction</span>
                      <span className="font-medium text-purple-600">4.6/5</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cost Savings Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Paper Consumption Reduction</span>
                      <span className="font-medium text-green-600">-87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Processing Time Reduction</span>
                      <span className="font-medium text-blue-600">-78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Operational Cost Savings</span>
                      <span className="font-medium text-purple-600">2.4M ETB</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-4">*Compared to pre-digital implementation baseline</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
