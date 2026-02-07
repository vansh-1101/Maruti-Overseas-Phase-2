import { 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Leads',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'New Leads (This Month)',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'Converted',
      value: '89',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle2,
      color: 'bg-purple-500',
    },
    {
      title: 'Pending Follow-ups',
      value: '45',
      change: '-5%',
      trend: 'down',
      icon: Clock,
      color: 'bg-orange-500',
    },
  ];

  const recentLeads = [
    { name: 'Rahul Sharma', email: 'rahul@example.com', country: 'UK', status: 'New', date: '2 hours ago' },
    { name: 'Priya Patel', email: 'priya@example.com', country: 'Canada', status: 'Contacted', date: '4 hours ago' },
    { name: 'Amit Kumar', email: 'amit@example.com', country: 'USA', status: 'Qualified', date: '6 hours ago' },
    { name: 'Neha Gupta', email: 'neha@example.com', country: 'Australia', status: 'New', date: '8 hours ago' },
    { name: 'Vikram Singh', email: 'vikram@example.com', country: 'UK', status: 'Contacted', date: '1 day ago' },
  ];

  const upcomingTasks = [
    { title: 'Call Rahul Sharma', time: '10:00 AM', type: 'call' },
    { title: 'Follow up with Priya Patel', time: '11:30 AM', type: 'followup' },
    { title: 'Send visa documents to Amit', time: '2:00 PM', type: 'email' },
    { title: 'Team meeting', time: '4:00 PM', type: 'meeting' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 text-sm">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Country</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{lead.name}</p>
                          <p className="text-sm text-gray-500">{lead.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{lead.country}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                          lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-500 text-sm">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {task.type === 'call' ? <Phone className="w-4 h-4 text-primary-600" /> :
                     task.type === 'meeting' ? <Calendar className="w-4 h-4 text-primary-600" /> :
                     <Clock className="w-4 h-4 text-primary-600" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-sm text-gray-500">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>Add New Lead</Button>
            <Button variant="outline">Send Bulk Email</Button>
            <Button variant="outline">Generate Report</Button>
            <Button variant="outline">Schedule Meeting</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
