import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, BarChart3, Settings, Clock, CheckCircle2, AlertTriangle, MessageSquare, Star } from "lucide-react"

export default function CitizenServicesPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Citizen Services Administration</h1>
          <p className="text-gray-600">Citizen portal management and service delivery oversight</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Service Report
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-yellow-500">
            <Settings className="h-4 w-4 mr-2" />
            Service Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Registered Citizens</p>
                <p className="text-3xl font-bold text-blue-600">234,567</p>
                <p className="text-xs text-green-600">↑ 22% from last month</p>
              </div>
              <Users className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Service Requests</p>
                <p className="text-3xl font-bold text-green-600">12,456</p>
                <p className="text-xs text-green-600">This month</p>
              </div>
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Satisfaction Rate</p>
                <p className="text-3xl font-bold text-purple-600">4.6</p>
                <p className="text-xs text-purple-600">out of 5.0 stars</p>
              </div>
              <Star className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Response Time</p>
                <p className="text-3xl font-bold text-orange-600">2.4</p>
                <p className="text-xs text-gray-500">hours</p>
              </div>
              <Clock className="h-12 w-12 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Popular Services</CardTitle>
            <CardDescription>Most requested citizen services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Birth Certificate Request</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-24" />
                  <span className="text-sm font-medium">3,456</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Business License Application</span>
                <div className="flex items-center space-x-2">
                  <Progress value={72} className="w-24" />
                  <span className="text-sm font-medium">2,834</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Tax Certificate Request</span>
                <div className="flex items-center space-x-2">
                  <Progress value={68} className="w-24" />
                  <span className="text-sm font-medium">2,621</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Property Registration</span>
                <div className="flex items-center space-x-2">
                  <Progress value={45} className="w-24" />
                  <span className="text-sm font-medium">1,789</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Service Status Distribution</CardTitle>
            <CardDescription>Current status of citizen service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">8,234</div>
                <div className="text-sm text-gray-600">Completed</div>
                <div className="text-xs text-green-600">66% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2,456</div>
                <div className="text-sm text-gray-600">In Progress</div>
                <div className="text-xs text-blue-600">20% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">1,234</div>
                <div className="text-sm text-gray-600">Pending</div>
                <div className="text-xs text-yellow-600">10% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-red-600">532</div>
                <div className="text-sm text-gray-600">Rejected</div>
                <div className="text-xs text-red-600">4% of total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Citizen Feedback and Support */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Recent Citizen Feedback</CardTitle>
          <CardDescription>Latest feedback and support requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Excellent service for birth certificate request</p>
                <p className="text-xs text-gray-500">5-star rating • Citizen ID: ET-2025-001234 • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Support request: Document upload issue</p>
                <p className="text-xs text-gray-500">
                  Business license application • Assigned to support team • 4 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Service delay reported</p>
                <p className="text-xs text-gray-500">Tax certificate processing • SLA breach detected • 6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
