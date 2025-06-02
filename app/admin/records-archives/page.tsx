import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Archive, BarChart3, Settings, HardDrive, Clock, Shield, Database } from "lucide-react"

export default function RecordsArchivesPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Records & Archives Administration</h1>
          <p className="text-gray-600">System-wide records management and archival oversight</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Archive Report
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-yellow-500">
            <Settings className="h-4 w-4 mr-2" />
            Archive Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Archived Records</p>
                <p className="text-3xl font-bold text-blue-600">1.2M</p>
                <p className="text-xs text-green-600">↑ 5% from last month</p>
              </div>
              <Archive className="h-12 w-12 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Archive Storage</p>
                <p className="text-3xl font-bold text-orange-600">8.7 TB</p>
                <p className="text-xs text-gray-500">of 50 TB capacity</p>
              </div>
              <HardDrive className="h-12 w-12 text-orange-500" />
            </div>
            <Progress value={17.4} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Retention Compliance</p>
                <p className="text-3xl font-bold text-green-600">98.7%</p>
                <p className="text-xs text-green-600">Policy adherence</p>
              </div>
              <Shield className="h-12 w-12 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Retrieval Requests</p>
                <p className="text-3xl font-bold text-purple-600">2,456</p>
                <p className="text-xs text-blue-600">This month</p>
              </div>
              <Database className="h-12 w-12 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Archive Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Archive Distribution by Ministry</CardTitle>
            <CardDescription>Records archived by each ministry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Finance</span>
                <div className="flex items-center space-x-2">
                  <Progress value={35} className="w-24" />
                  <span className="text-sm font-medium">420K records</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Health</span>
                <div className="flex items-center space-x-2">
                  <Progress value={28} className="w-24" />
                  <span className="text-sm font-medium">336K records</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Ministry of Education</span>
                <div className="flex items-center space-x-2">
                  <Progress value={22} className="w-24" />
                  <span className="text-sm font-medium">264K records</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Other Ministries</span>
                <div className="flex items-center space-x-2">
                  <Progress value={15} className="w-24" />
                  <span className="text-sm font-medium">180K records</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Retention Schedule Status</CardTitle>
            <CardDescription>Records by retention category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">456K</div>
                <div className="text-sm text-gray-600">Permanent</div>
                <div className="text-xs text-green-600">38% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">384K</div>
                <div className="text-sm text-gray-600">Long-term (25+ years)</div>
                <div className="text-xs text-green-600">32% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-purple-600">240K</div>
                <div className="text-sm text-gray-600">Medium-term (7-25 years)</div>
                <div className="text-xs text-green-600">20% of total</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-orange-600">120K</div>
                <div className="text-sm text-gray-600">Short-term (3-7 years)</div>
                <div className="text-xs text-green-600">10% of total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Archive Management Tools */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Archive Management Tools</CardTitle>
          <CardDescription>Tools for managing records and archives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Archive className="h-6 w-6" />
              <span className="text-sm">Bulk Archive</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Database className="h-6 w-6" />
              <span className="text-sm">Search Archives</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Clock className="h-6 w-6" />
              <span className="text-sm">Retention Review</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Archive Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
