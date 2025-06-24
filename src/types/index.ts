export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Optional for security - only used during registration
  role: 'seeker' | 'employer' | 'admin';
  profile: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  fullName: string;
  avatar?: string;
  phone: string;
  location: string;
  bio: string;
  skills?: string[];
  experience?: string;
  education?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  category: string;
  description: string;
  requirements: string[];
  skills: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  postedAt: Date;
  expiresAt: Date;
  applicationsCount: number;
  employerId: string;
  isActive: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  seekerId: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: Date;
  coverLetter?: string;
  resume?: string;
}
