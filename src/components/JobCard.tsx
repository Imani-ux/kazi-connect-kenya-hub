
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const formatSalary = (salary: Job['salary']) => {
    return `${salary.currency} ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="job-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <Link to={`/jobs/${job.id}`} className="job-title">
            {job.title}
          </Link>
          <div className="job-company">
            🏢 {job.company}
          </div>
          <div className="job-location">
            📍 {job.location}
          </div>
        </div>
        <span className="job-badge">
          {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
        </span>
      </div>

      {/* Salary and Category */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div className="job-salary">
          💰 {formatSalary(job.salary)}
        </div>
        <span className="job-badge">{job.category}</span>
      </div>

      {/* Job Description */}
      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {job.description}
      </p>

      {/* Skills */}
      <div className="job-skills">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="skill-tag">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
        <div style={{ fontSize: '0.8rem', color: '#888' }}>
          <span>📅 Posted {formatDate(job.postedAt)}</span>
          <span style={{ marginLeft: '1rem' }}>👥 {job.applicationsCount} applicants</span>
        </div>
        <Link to={`/jobs/${job.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
