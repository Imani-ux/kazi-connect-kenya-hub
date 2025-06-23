
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Building, DollarSign, Users } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const formatSalary = (salary: Job['salary']) => {
    return `${salary.currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
  };

  const getJobTypeColor = (type: Job['type']) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'contract':
        return 'bg-orange-100 text-orange-800';
      case 'freelance':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
              <Link to={`/jobs/${job.id}`}>
                {job.title}
              </Link>
            </CardTitle>
            <div className="flex items-center text-gray-600 mb-2">
              <Building className="w-4 h-4 mr-2" />
              <span className="font-medium">{job.company}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{job.location}</span>
            </div>
          </div>
          <Badge className={getJobTypeColor(job.type)}>
            {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Salary and Category */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-600">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-semibold">{formatSalary(job.salary)}</span>
          </div>
          <Badge variant="outline">{job.category}</Badge>
        </div>

        {/* Job Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {job.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center text-gray-500 text-xs space-x-4">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              <span>Posted {formatDate(job.postedAt)}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              <span>{job.applicationsCount} applicants</span>
            </div>
          </div>
          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to={`/jobs/${job.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
