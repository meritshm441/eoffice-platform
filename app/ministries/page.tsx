import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Users,
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Settings,
  BarChart3,
  Shield,
  Globe,
  Heart,
  GraduationCap,
  Gavel,
  Coins,
  Wheat,
  Car,
  Factory,
  Zap,
  Palette,
} from "lucide-react"

const ministries = [
  {
    id: 1,
    name: "Ministry of Innovation and Technology",
    abbreviation: "MInT",
    icon: Settings,
    status: "active",
    adoption: 100,
    employees: 450,
    documents: 2847,
    workflows: 23,
    influence: "high",
    description: "Leading digital transformation and technology innovation",
  },
  {
    id: 2,
    name: "Ministry of Finance",
    abbreviation: "MoF",
    icon: Coins,
    status: "active",
    adoption: 98,
    employees: 1200,
    documents: 8934,
    workflows: 67,
    influence: "high",
    description: "Managing national budget and financial policies",
  },
  {
    id: 3,
    name: "Ministry of Defense",
    abbreviation: "MoD",
    icon: Shield,
    status: "active",
    adoption: 95,
    employees: 2100,
    documents: 5623,
    workflows: 45,
    influence: "high",
    description: "National security and defense operations",
  },
  {
    id: 4,
    name: "Ministry of Foreign Affairs",
    abbreviation: "MoFA",
    icon: Globe,
    status: "active",
    adoption: 92,
    employees: 890,
    documents: 4521,
    workflows: 34,
    influence: "high",
    description: "International relations and diplomatic affairs",
  },
  {
    id: 5,
    name: "Ministry of Health",
    abbreviation: "MoH",
    icon: Heart,
    status: "training",
    adoption: 75,
    employees: 3400,
    documents: 12456,
    workflows: 89,
    influence: "high",
    description: "Public health and healthcare services",
  },
  {
    id: 6,
    name: "Ministry of Education",
    abbreviation: "MoE",
    icon: GraduationCap,
    status: "testing",
    adoption: 68,
    employees: 2800,
    documents: 9876,
    workflows: 56,
    influence: "high",
    description: "Educational policies and programs",
  },
  {
    id: 7,
    name: "Ministry of Agriculture",
    abbreviation: "MoA",
    icon: Wheat,
    status: "migration",
    adoption: 45,
    employees: 1900,
    documents: 6789,
    workflows: 42,
    influence: "high",
    description: "Agricultural development and food security",
  },
  {
    id: 8,
    name: "Ministry of Justice",
    abbreviation: "MoJ",
    icon: Gavel,
    status: "active",
    adoption: 88,
    employees: 1100,
    documents: 7234,
    workflows: 38,
    influence: "high",
    description: "Legal affairs and justice administration",
  },
  {
    id: 9,
    name: "Ministry of Transport and Logistics",
    abbreviation: "MoTL",
    icon: Car,
    status: "setup",
    adoption: 30,
    employees: 850,
    documents: 3456,
    workflows: 18,
    influence: "medium",
    description: "Transportation infrastructure and logistics",
  },
  {
    id: 10,
    name: "Ministry of Water and Energy",
    abbreviation: "MoWE",
    icon: Zap,
    status: "active",
    adoption: 85,
    employees: 1350,
    documents: 5678,
    workflows: 29,
    influence: "medium",
    description: "Water resources and energy development",
  },
  {
    id: 11,
    name: "Ministry of Industry",
    abbreviation: "MoI",
    icon: Factory,
    status: "active",
    adoption: 82,
    employees: 720,
    documents: 4123,
    workflows: 25,
    influence: "medium",
    description: "Industrial development and manufacturing",
  },
  {
    id: 12,
    name: "Ministry of Culture and Sport",
    abbreviation: "MoCS",
    icon: Palette,
    status: "pending",
    adoption: 15,
    employees: 340,
    documents: 1234,
    workflows: 8,
    influence: "low",
    description: "Cultural heritage and sports development",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "training":
      return "bg-yellow-100 text-yellow-800"
    case "testing":
      return "bg-blue-100 text-blue-800"
    case "migration":
      return "bg-purple-100 text-purple-800"
    case "setup":
      return "bg-orange-100 text-orange-800"
    case "pending":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getInfluenceColor = (influence: string) => {
  switch (influence) {
    case "high":
      return "border-red-500 text-red-700"
    case "medium":
      return "border-yellow-500 text-yellow-700"
    case "low":
      return "border-green-500 text-green-700"
    default:
      return "border-gray-500 text-gray-700"
  }
}

export default function MinistriesPage() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-green-50 to-yellow-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Federal Ministries Overview</h1>
          <p className="text-gray-600">Monitor eOffice system implementation across all Ethiopian federal ministries</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-white">
            24 Total Ministries
          </Badge>
          <Badge className="bg-green-100 text-green-800">18 Active</Badge>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Ministries</p>
                <p className="text-2xl font-bold text-green-600">18</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">4</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Adoption</p>
                <p className="text-2xl font-bold text-blue-600">75%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search ministries..." className="pl-10" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="training">Training</SelectItem>
              <SelectItem value="testing">Testing</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Influence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Influence</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Ministries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry) => {
          const IconComponent = ministry.icon
          return (
            <Card key={ministry.id} className="bg-white hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-green-100 to-yellow-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{ministry.name}</CardTitle>
                      <CardDescription className="text-sm">{ministry.abbreviation}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge className={getStatusColor(ministry.status)} variant="secondary">
                      {ministry.status.charAt(0).toUpperCase() + ministry.status.slice(1)}
                    </Badge>
                    <Badge variant="outline" className={getInfluenceColor(ministry.influence)}>
                      {ministry.influence} influence
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{ministry.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>System Adoption</span>
                      <span className="font-medium">{ministry.adoption}%</span>
                    </div>
                    <Progress value={ministry.adoption} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-gray-500 mr-1" />
                      </div>
                      <div className="text-sm font-medium">{ministry.employees.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Employees</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <FileText className="h-4 w-4 text-gray-500 mr-1" />
                      </div>
                      <div className="text-sm font-medium">{ministry.documents.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">Documents</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <BarChart3 className="h-4 w-4 text-gray-500 mr-1" />
                      </div>
                      <div className="text-sm font-medium">{ministry.workflows}</div>
                      <div className="text-xs text-gray-500">Workflows</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600"
                  >
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
