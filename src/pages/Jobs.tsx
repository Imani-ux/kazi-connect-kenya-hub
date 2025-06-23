
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Filter, SlidersHorizontal } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/lib/data';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  // Filter jobs based on search criteria
  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesType = !jobType || job.type === jobType;
    const matchesCategory = !category || job.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesType && matchesCategory;
  });

  const jobCategories = [...new Set(mockJobs.map(job => job.category))];
  const locations = [...new Set(mockJobs.map(job => job.location))];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
          <p className="text-gray-600">Discover {mockJobs.length}+ job opportunities across Kenya</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search & Filter Jobs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Search */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              <Select value={jobType} onValueChange={setJobType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {jobCategories.map(cat => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={salaryRange} onValueChange={setSalaryRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Salary</SelectItem>
                  <SelectItem value="0-50000">Below KSH 50,000</SelectItem>
                  <SelectItem value="50000-100000">KSH 50,000 - 100,000</SelectItem>
                  <SelectItem value="100000-200000">KSH 100,000 - 200,000</SelectItem>
                  <SelectItem value="200000+">Above KSH 200,000</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-green-600 hover:bg-green-700">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Quick Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Popular Locations */}
                <div>
                  <h4 className="font-medium mb-3">Popular Locations</h4>
                  <div className="space-y-2">
                    {locations.slice(0, 5).map(loc => (
                      <Button
                        key={loc}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start h-auto p-2 text-left"
                        onClick={() => setLocation(loc)}
                      >
                        <MapPin className="w-3 h-3 mr-2" />
                        {loc}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Popular Categories */}
                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {jobCategories.map(cat => (
                      <Button
                        key={cat}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start h-auto p-2 text-left"
                        onClick={() => setCategory(cat.toLowerCase())}
                      >
                        {cat}
                        <Badge variant="outline" className="ml-auto text-xs">
                          {mockJobs.filter(j => j.category === cat).length}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredJobs.length} Jobs Found
                </h2>
                <p className="text-gray-600">Showing results for your search criteria</p>
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters to find more opportunities.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setLocation('');
                      setJobType('');
                      setCategory('');
                      setSalaryRange('');
                    }}
                    variant="outline"
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
