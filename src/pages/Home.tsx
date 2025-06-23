
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, TrendingUp, Users, Building, Star } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/lib/data';
import { AuthService } from '@/lib/auth';

const Home = () => {
  const currentUser = AuthService.getCurrentUser();
  const featuredJobs = mockJobs.slice(0, 3);

  const stats = [
    { label: 'Active Jobs', value: '2,500+', icon: Building },
    { label: 'Job Seekers', value: '15,000+', icon: Users },
    { label: 'Companies', value: '500+', icon: Building },
    { label: 'Success Rate', value: '85%', icon: TrendingUp },
  ];

  const categories = [
    { name: 'Technology', count: 234, icon: '💻' },
    { name: 'Finance', count: 156, icon: '💰' },
    { name: 'Marketing', count: 123, icon: '📈' },
    { name: 'Healthcare', count: 98, icon: '🏥' },
    { name: 'Education', count: 87, icon: '📚' },
    { name: 'Construction', count: 76, icon: '🏗️' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Find Your Dream Job in{' '}
                <span className="text-yellow-400">Kenya</span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                Connect with top employers across Kenya. Your next opportunity is just a click away.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        placeholder="Job title, keywords, or company" 
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        placeholder="Location (e.g., Nairobi, Mombasa)" 
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />
                    </div>
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      Search Jobs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            {!currentUser && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/register?role=seeker">Find Jobs</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/register?role=employer">Post Jobs</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Jobs by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across various industries in Kenya
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count} jobs</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Jobs
              </h2>
              <p className="text-xl text-gray-600">
                Hand-picked opportunities from top employers
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who found their dream jobs through Kazika
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mary Wanjiku",
                role: "Software Engineer at SafaricomPLC",
                content: "Kazika helped me land my dream job at Safaricom. The platform is user-friendly and connects you with genuine opportunities.",
                rating: 5
              },
              {
                name: "James Ochieng",
                role: "Marketing Manager at KCB Bank",
                content: "I found three interview opportunities within a week of joining Kazika. The quality of jobs posted here is exceptional.",
                rating: 5
              },
              {
                name: "Grace Muthoni",
                role: "Data Analyst at Equity Bank",
                content: "The recommendation system is amazing! Kazika suggested jobs that perfectly matched my skills and career goals.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of professionals who have found success through Kazika-Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link to="/register">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
