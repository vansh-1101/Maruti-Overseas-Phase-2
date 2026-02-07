import { TrendingUp, Users, Eye, MousePointer, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Analytics = () => {
  const stats = [
    {
      title: 'Website Visitors',
      value: '12,456',
      change: '+15%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Page Views',
      value: '45,892',
      change: '+22%',
      trend: 'up',
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      title: 'Lead Conversions',
      value: '234',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      title: 'Click-through Rate',
      value: '3.2%',
      change: '-2%',
      trend: 'down',
      icon: MousePointer,
      color: 'bg-orange-500',
    },
  ];

  const topPages = [
    { page: '/', views: 15234, uniqueVisitors: 8234 },
    { page: '/study-abroad/uk', views: 8932, uniqueVisitors: 5432 },
    { page: '/services/student-visa', views: 7654, uniqueVisitors: 4321 },
    { page: '/contact', views: 6543, uniqueVisitors: 3876 },
    { page: '/study-abroad/canada', views: 5432, uniqueVisitors: 3210 },
  ];

  const leadSources = [
    { source: 'Organic Search', leads: 89, percentage: 38 },
    { source: 'Direct', leads: 56, percentage: 24 },
    { source: 'Social Media', leads: 45, percentage: 19 },
    { source: 'Referrals', leads: 28, percentage: 12 },
    { source: 'Paid Ads', leads: 16, percentage: 7 },
  ];

  const countryInterest = [
    { country: 'UK', inquiries: 456, conversions: 89 },
    { country: 'Canada', inquiries: 398, conversions: 76 },
    { country: 'USA', inquiries: 345, conversions: 54 },
    { country: 'Australia', inquiries: 234, conversions: 43 },
    { country: 'Ireland', inquiries: 123, conversions: 21 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track website performance and lead generation</p>
        </div>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24h">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
                      <span className="text-gray-500 text-sm">vs last period</span>
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

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{page.page}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{page.views.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{page.uniqueVisitors.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">unique</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lead Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leadSources.map((source, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">{source.source}</span>
                    <span className="font-medium text-gray-900">{source.leads} leads</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Country Interest */}
      <Card>
        <CardHeader>
          <CardTitle>Country-wise Interest</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Country</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Inquiries</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Conversions</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Conversion Rate</th>
                </tr>
              </thead>
              <tbody>
                {countryInterest.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.country}</td>
                    <td className="py-3 px-4 text-gray-700">{item.inquiries}</td>
                    <td className="py-3 px-4 text-gray-700">{item.conversions}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(item.conversions / item.inquiries) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">
                          {((item.conversions / item.inquiries) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Export Button */}
      <div className="flex justify-end">
        <Button variant="outline">Export Report</Button>
      </div>
    </div>
  );
};

export default Analytics;
