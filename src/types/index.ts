
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'seeker' | 'employer' | 'admin';
  profile?: UserProfile;
  createdAt: Date;
}

export interface UserProfile {
  fullName: string;
  phone: string;
  location: string;
  bio: string;
  avatar?: string;
  skills?: string[];
  experience?: string;
  education?: string;
  portfolio?: string;
  companyName?: string;
  companySize?: string;
  industry?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  salary: {
    min: number;
    max: number;
    currency: 'KSH' | 'USD';
  };
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  category: string;
  postedBy: string;
  postedAt: Date;
  deadline: Date;
  status: 'active' | 'closed' | 'draft';
  applicationsCount: number;
}

export interface Application {
  id: string;
  jobId: string;
  applicantId: string;
  status: 'pending' | 'reviewed' | 'interview' | 'rejected' | 'accepted';
  appliedAt: Date;
  coverLetter: string;
  resume?: string;
  notes?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
  jobId?: string;
}

export interface Review {
  id: string;
  reviewerId: string;
  revieweeId: string;
  jobId: string;
  rating: number;
  comment: string;
  type: 'employer-review' | 'employee-review';
  createdAt: Date;
}
