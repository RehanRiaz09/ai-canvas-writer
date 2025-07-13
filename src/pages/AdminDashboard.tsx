import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";  
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Crown,
  Settings,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

export default function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  // Mock data
  const stats = [
    { title: "Total Users", value: "1,247", change: "+12%", icon: Users, color: "text-blue-500" },
    { title: "Content Generated", value: "8,923", change: "+23%", icon: FileText, color: "text-green-500" },
    { title: "Revenue", value: "$12,450", change: "+18%", icon: DollarSign, color: "text-purple-500" },
    { title: "Active Now", value: "89", change: "+5%", icon: Activity, color: "text-orange-500" },
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", tier: "professional", status: "active", generated: 45, joined: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", tier: "enterprise", status: "active", generated: 123, joined: "2024-02-10" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", tier: "free", status: "inactive", generated: 12, joined: "2024-03-05" },
    { id: 4, name: "Alice Wilson", email: "alice@example.com", tier: "professional", status: "active", generated: 67, joined: "2024-02-28" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com", tier: "free", status: "active", generated: 8, joined: "2024-03-12" },
  ];

  const contentStats = [
    { type: "Blog Posts", count: 3245, percentage: 36 },
    { type: "Social Media", count: 2156, percentage: 24 },
    { type: "Product Descriptions", count: 1843, percentage: 21 },
    { type: "Email Campaigns", count: 987, percentage: 11 },
    { type: "Ad Copy", count: 692, percentage: 8 },
  ];

  const systemHealth = [
    { component: "API Server", status: "healthy", uptime: "99.9%" },
    { component: "AI Processing", status: "healthy", uptime: "99.7%" },
    { component: "Database", status: "healthy", uptime: "99.8%" },
    { component: "File Storage", status: "warning", uptime: "98.2%" },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "enterprise": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "professional": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "inactive": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getHealthStatus = (status: string) => {
    switch (status) {
      case "healthy": return { icon: CheckCircle, color: "text-green-500" };
      case "warning": return { icon: AlertCircle, color: "text-yellow-500" };
      case "error": return { icon: AlertCircle, color: "text-red-500" };
      default: return { icon: Clock, color: "text-gray-500" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your AI content platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-green-600">{stat.change} from last period</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Generated</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getTierColor(user.tier)}>
                            {user.tier === "enterprise" && <Crown className="h-3 w-3 mr-1" />}
                            {user.tier === "professional" && <Crown className="h-3 w-3 mr-1" />}
                            {user.tier}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.generated}</TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Content Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contentStats.map((item) => (
                      <div key={item.type} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-ai-primary rounded-full"></div>
                          <span className="font-medium">{item.type}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{item.count.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <FileText className="h-4 w-4 text-ai-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Blog post generated</p>
                        <p className="text-xs text-muted-foreground">by john@example.com • 2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <Users className="h-4 w-4 text-ai-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New user registered</p>
                        <p className="text-xs text-muted-foreground">alice@example.com • 5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <Crown className="h-4 w-4 text-ai-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">User upgraded to Pro</p>
                        <p className="text-xs text-muted-foreground">bob@example.com • 10 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Recurring Revenue</span>
                      <span className="font-bold text-2xl text-green-500">$12,450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Revenue Per User</span>
                      <span className="font-bold">$9.98</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Churn Rate</span>
                      <span className="font-bold text-red-500">2.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Growth Rate</span>
                      <span className="font-bold text-green-500">+18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Daily Active Users</span>
                      <span className="font-bold">234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Content Generated Today</span>
                      <span className="font-bold">1,456</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>API Calls (24h)</span>
                      <span className="font-bold">8,923</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Session Duration</span>
                      <span className="font-bold">12m 34s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((component) => {
                    const status = getHealthStatus(component.status);
                    const StatusIcon = status.icon;
                    return (
                      <div key={component.component} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <StatusIcon className={`h-5 w-5 ${status.color}`} />
                          <span className="font-medium">{component.component}</span>
                        </div>
                        <div className="text-right">
                          <Badge className={component.status === "healthy" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {component.status}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            Uptime: {component.uptime}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}