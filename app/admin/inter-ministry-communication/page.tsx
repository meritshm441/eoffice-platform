import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, BarChart3, Settings, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react"

export default function InterMinistryCommunicationPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inter-Ministry Communication Administration</h1>
          <p className="text-gray-600">Cross-ministry collaboration and communication oversight</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Communication Report
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-yellow-500">
            <Settings className="h-4 w-4 mr-2" />
            Communication Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Channels</p>
                <p className="text-3xl font-bold text-blue-600">156</p>
                <p className="text-xs text-green-600">↑ 8% from last month</p>
              </div>
              <MessageSquare className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Messages Today</p>
                <p className="text-3xl font-bold text-green-600">2,847</p>
                <p className="text-xs text-green-600">↑ 12% from yesterday</p>
              </div>
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-3xl font-bold text-orange-600">2.4h</p>
                <p className="text-xs text-green-600">↓ 15% improvement</p>
              </div>
              <Clock className="h-12 w-12 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-purple-600">8,234</p>
                <p className="text-xs text-blue-600">Cross-ministry users</p>
              </div>
              <Users className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Communication Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Ministry Communication Matrix</CardTitle>
            <CardDescription>Communication frequency between ministries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Finance ↔ Health</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-24" />
                  <span className="text-sm font-medium">234 msgs</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Education ↔ Innovation</span>
                <div className="flex items-center space-x-2">
                  <Progress value={72} className="w-24" />
                  <span className="text-sm font-medium">189 msgs</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Health ↔ Education</span>
                <div className="flex items-center space-x-2">
                  <Progress value={68} className="w-24" />
                  <span className="text-sm font-medium">156 msgs</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Finance ↔ Innovation</span>
                <div className="flex items-center space-x-2">
                  <Progress value={91} className="w-24" />
                  <span className="text-sm font-medium">298 msgs</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Communication Channels</CardTitle>
            <CardDescription>Active communication channels by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">89</div>
                <div className="text-sm text-gray-600">Project Channels</div>
                <div className="text-xs text-green-600">57% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">34</div>
                <div className="text-sm text-gray-600">Policy Discussions</div>
                <div className="text-xs text-green-600">22% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-600">23</div>
                <div className="text-sm text-gray-600">Emergency Channels</div>
                <div className="text-xs text-green-600">15% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-orange-600">10</div>
                <div className="text-sm text-gray-600">General Updates</div>
                <div className="text-xs text-green-600">6% of total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Recent Communication Activity</CardTitle>
          <CardDescription>Latest inter-ministry communications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">New policy collaboration channel created</p>
                <p className="text-xs text-gray-500">Finance & Health ministries - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">High-priority message sent</p>
                <p className="text-xs text-gray-500">Education to Innovation & Technology - 4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Communication delay detected</p>
                <p className="text-xs text-gray-500">Response time exceeded SLA - 6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
