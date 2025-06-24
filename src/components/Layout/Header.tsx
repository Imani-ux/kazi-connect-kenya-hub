
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '@/lib/auth';

const Header = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            💼
          </div>
          <span className="logo-text">Kazika</span>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/jobs" className="nav-link">Browse Jobs</Link>
          {currentUser?.role === 'employer' && (
            <Link to="/post-job" className="nav-link">Post Jobs</Link>
          )}
          {currentUser?.role === 'admin' && (
            <Link to="/admin" className="nav-link">Admin Panel</Link>
          )}
        </nav>

        {/* User Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>Welcome, {currentUser.profile?.fullName || currentUser.username}</span>
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to="/login" className="btn btn-outline">Sign In</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
