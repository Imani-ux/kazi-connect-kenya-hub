
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/lib/data';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');

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
      <div className="container" style={{ padding: '2rem 1rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Find Your Next Opportunity
          </h1>
          <p style={{ color: '#666' }}>Discover {mockJobs.length}+ job opportunities across Kenya</p>
        </div>

        {/* Search and Filters */}
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🔍 Search & Filter Jobs
          </h3>
          
          {/* Main Search */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Filters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            <select 
              value={jobType} 
              onChange={(e) => setJobType(e.target.value)}
              className="form-input"
            >
              <option value="">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
            </select>

            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="form-input"
            >
              <option value="">All Categories</option>
              {jobCategories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>

            <button className="btn btn-primary">
              🔧 Apply Filters
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
          {/* Sidebar Filters */}
          <div>
            <div className="card">
              <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ⚙️ Quick Filters
              </h4>
              
              {/* Popular Locations */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Popular Locations</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {locations.slice(0, 5).map(loc => (
                    <button
                      key={loc}
                      onClick={() => setLocation(loc)}
                      style={{
                        padding: '0.5rem',
                        background: 'none',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      📍 {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Categories */}
              <div>
                <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Categories</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {jobCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat.toLowerCase())}
                      style={{
                        padding: '0.5rem',
                        background: 'none',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span>{cat}</span>
                      <span className="job-badge">
                        {mockJobs.filter(j => j.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Results */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {filteredJobs.length} Jobs Found
                </h2>
                <p style={{ color: '#666' }}>Showing results for your search criteria</p>
              </div>
              <select className="form-input" style={{ width: 'auto' }}>
                <option value="newest">Newest First</option>
                <option value="salary-high">Salary: High to Low</option>
                <option value="salary-low">Salary: Low to High</option>
                <option value="relevance">Most Relevant</option>
              </select>
            </div>

            {filteredJobs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>No jobs found</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  Try adjusting your search criteria or filters to find more opportunities.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setLocation('');
                    setJobType('');
                    setCategory('');
                  }}
                  className="btn btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
