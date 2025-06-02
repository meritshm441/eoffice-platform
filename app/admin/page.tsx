"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  FileText,
  Workflow,
  CheckSquare,
  MessageSquare,
  Archive,
  PenTool,
  Users,
  BarChart3,
  Shield,
} from "lucide-react"

const menuItems = [
  {
    id: "overview",
    title: "System Overview",
    icon: BarChart3,
    href: "/admin",
    description: "Dashboard overview and key metrics",
  },
  {
    id: "document-management",
    title: "Document Management",
    icon: FileText,
    href: "/admin/document-management",
    description: "System-wide document oversight",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    icon: Workflow,
    href: "/admin/workflow-automation",
    description: "Workflow management and optimization",
  },
  {
    id: "task-management",
    title: "Task Management",
    icon: CheckSquare,
    href: "/admin/task-management",
    description: "Task oversight and productivity",
  },
  {
    id: "inter-ministry-communication",
    title: "Inter-Ministry Communication",
    icon: MessageSquare,
    href: "/admin/inter-ministry-communication",
    description: "Communication channels and collaboration",
  },
  {
    id: "records-archives",
    title: "Records & Archives",
    icon: Archive,
    href: "/admin/records-archives",
    description: "Records management and archival",
  },
  {
    id: "electronic-signature",
    title: "Electronic Signature",
    icon: PenTool,
    href: "/admin/electronic-signature",
    description: "Digital signature management",
  },
  {
    id: "citizen-services",
    title: "Citizen Services",
    icon: Users,
    href: "/admin/citizen-services",
    description: "Citizen portal and services",
  },
]

function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Admin Dashboard</h2>
            <p className="text-sm text-gray-600">Ethiopian eOffice System</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>System Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} className="w-full justify-start">
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentPage = menuItems.find((item) => item.href === pathname)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 overflow-auto">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 bg-white px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">{currentPage?.title || "System Overview"}</h1>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
