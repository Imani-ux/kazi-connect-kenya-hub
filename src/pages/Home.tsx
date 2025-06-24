
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import JobCard from '@/components/JobCard';
import { mockJobs } from '@/lib/data';
import { AuthService } from '@/lib/auth';

const Home = () => {
  const currentUser = AuthService.getCurrentUser();
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            Find Your Dream Job in{' '}
            <span className="hero-highlight">Kenya</span>
          </h1>
          <p>
            Connect with top employers across Kenya. Your next opportunity is just a click away.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <div className="card">
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <input 
                  type="text"
                  placeholder="Job title, keywords, or company" 
                  className="form-input"
                  style={{ flex: 1, minWidth: '200px' }}
                />
                <input 
                  type="text"
                  placeholder="Location (e.g., Nairobi, Mombasa)" 
                  className="form-input"
                  style={{ flex: 1, minWidth: '200px' }}
                />
                <button className="btn btn-primary btn-lg">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          {!currentUser && (
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register?role=seeker" className="btn btn-outline btn-lg">Find Jobs</Link>
              <Link to="/register?role=employer" className="btn btn-outline btn-lg">Post Jobs</Link>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { label: 'Active Jobs', value: '2,500+' },
              { label: 'Job Seekers', value: '15,000+' },
              { label: 'Companies', value: '500+' },
              { label: 'Success Rate', value: '85%' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#666' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Featured Jobs
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#666' }}>
                Hand-picked opportunities from top employers
              </p>
            </div>
            <Link to="/jobs" className="btn btn-outline">View All Jobs</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #16a34a, #1e40af)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Take Your Career to the Next Level?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join thousands of professionals who have found success through Kazika-Kenya
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-lg" style={{ background: 'white', color: '#16a34a' }}>
              Get Started Today
            </Link>
            <Link to="/jobs" className="btn btn-outline btn-lg">Browse Jobs</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
