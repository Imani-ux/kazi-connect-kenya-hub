
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Job } from '@/types';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
  showApplyButton?: boolean;
}

const JobCard = ({ job, showApplyButton = true }: JobCardProps) => {
  const formatSalary = (salary: Job['salary']) => {
    return `${salary.currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-green-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <Link to={`/jobs/${job.id}`} className="hover:text-green-600 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {job.title}
              </h3>
            </Link>
            <p className="text-blue-600 font-medium">{job.company}</p>
          </div>
          <Badge variant={job.type === 'full-time' ? 'default' : 'secondary'}>
            {job.type.replace('-', ' ')}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {formatSalary(job.salary)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {getTimeAgo(job.postedAt)}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {job.applicationsCount} applicants
          </div>
        </div>

        <p className="text-gray-700 text-sm line-clamp-2">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{job.skills.length - 4} more
            </Badge>
          )}
        </div>

        {showApplyButton && (
          <div className="flex gap-2 pt-2">
            <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
              <Link to={`/jobs/${job.id}/apply`}>
                Apply Now
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={`/jobs/${job.id}`}>
                View Details
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JobCard;
