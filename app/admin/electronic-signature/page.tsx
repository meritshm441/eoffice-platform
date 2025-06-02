import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PenTool, BarChart3, Settings, Shield, CheckCircle2, AlertTriangle, Clock } from "lucide-react"

export default function ElectronicSignaturePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Electronic Signature Administration</h1>
          <p className="text-gray-600">Digital signature management and security oversight</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Signature Report
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-yellow-500">
            <Settings className="h-4 w-4 mr-2" />
            Signature Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Signatures</p>
                <p className="text-3xl font-bold text-blue-600">45,678</p>
                <p className="text-xs text-green-600">↑ 18% from last month</p>
              </div>
              <PenTool className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Verification Rate</p>
                <p className="text-3xl font-bold text-green-600">99.8%</p>
                <p className="text-xs text-green-600">Security compliance</p>
              </div>
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Certificates</p>
                <p className="text-3xl font-bold text-purple-600">18,234</p>
                <p className="text-xs text-blue-600">Valid certificates</p>
              </div>
              <Shield className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Sign Time</p>
                <p className="text-3xl font-bold text-orange-600">1.2</p>
                <p className="text-xs text-gray-500">minutes per signature</p>
              </div>
              <Clock className="h-12 w-12 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Signature Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Signature Activity by Ministry</CardTitle>
            <CardDescription>Digital signature usage across ministries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Finance</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-24" />
                  <span className="text-sm font-medium">12,456</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Health</span>
                <div className="flex items-center space-x-2">
                  <Progress value={72} className="w-24" />
                  <span className="text-sm font-medium">9,834</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Education</span>
                <div className="flex items-center space-x-2">
                  <Progress value={68} className="w-24" />
                  <span className="text-sm font-medium">8,921</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Innovation & Technology</span>
                <div className="flex items-center space-x-2">
                  <Progress value={91} className="w-24" />
                  <span className="text-sm font-medium">14,467</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Certificate Status</CardTitle>
            <CardDescription>Digital certificate management overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">16,789</div>
                <div className="text-sm text-gray-600">Valid Certificates</div>
                <div className="text-xs text-green-600">92% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">1,234</div>
                <div className="text-sm text-gray-600">Expiring Soon</div>
                <div className="text-xs text-yellow-600">7% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-red-600">156</div>
                <div className="text-sm text-gray-600">Expired</div>
                <div className="text-xs text-red-600">1% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">55</div>
                <div className="text-sm text-gray-600">Revoked</div>
                <div className="text-xs text-blue-600">0.3% of total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security and Compliance */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Security & Compliance Status</CardTitle>
          <CardDescription>Digital signature security monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">All signatures verified successfully</p>
                <p className="text-xs text-gray-500">99.8% verification rate maintained - Last 24 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">1,234 certificates expiring within 30 days</p>
                <p className="text-xs text-gray-500">Renewal notifications sent to certificate holders</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 border rounded-lg">
              <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Security audit completed</p>
                <p className="text-xs text-gray-500">All signature algorithms meet security standards - 2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
