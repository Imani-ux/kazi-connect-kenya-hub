
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '1rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: '#333', margin: 0 }}>404</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#666', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ color: '#888', marginBottom: '2rem', maxWidth: '400px' }}>
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          🏠 Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
