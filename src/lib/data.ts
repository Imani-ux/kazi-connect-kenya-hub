
import { Job, Application, Message } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Kenya',
    location: 'Nairobi, Kenya',
    type: 'full-time',
    salary: { min: 150000, max: 250000, currency: 'KSH' },
    description: 'We are looking for a senior software engineer to join our dynamic team...',
    requirements: ['5+ years experience', 'React/TypeScript', 'Node.js', 'Database design'],
    responsibilities: ['Lead development projects', 'Mentor junior developers', 'Code reviews'],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'Technology',
    postedBy: '2',
    postedAt: new Date('2024-06-20'),
    deadline: new Date('2024-07-20'),
    status: 'active',
    applicationsCount: 12
  },
  {
    id: '2',
    title: 'Digital Marketing Manager',
    company: 'Creative Agency KE',
    location: 'Mombasa, Kenya',
    type: 'full-time',
    salary: { min: 80000, max: 120000, currency: 'KSH' },
    description: 'Join our creative team as a Digital Marketing Manager...',
    requirements: ['3+ years marketing experience', 'Social media expertise', 'Analytics tools'],
    responsibilities: ['Develop marketing strategies', 'Manage social media', 'Campaign analysis'],
    skills: ['Digital Marketing', 'SEO', 'Google Analytics', 'Social Media'],
    category: 'Marketing',
    postedBy: '2',
    postedAt: new Date('2024-06-18'),
    deadline: new Date('2024-07-15'),
    status: 'active',
    applicationsCount: 8
  },
  {
    id: '3',
    title: 'Financial Analyst',
    company: 'FinanceMax Solutions',
    location: 'Kisumu, Kenya',
    type: 'full-time',
    salary: { min: 70000, max: 100000, currency: 'KSH' },
    description: 'We seek a detail-oriented Financial Analyst...',
    requirements: ['Bachelor in Finance/Accounting', 'Excel proficiency', '2+ years experience'],
    responsibilities: ['Financial reporting', 'Budget analysis', 'Risk assessment'],
    skills: ['Financial Analysis', 'Excel', 'SAP', 'Reporting'],
    category: 'Finance',
    postedBy: '2',
    postedAt: new Date('2024-06-15'),
    deadline: new Date('2024-07-10'),
    status: 'active',
    applicationsCount: 15
  }
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    applicantId: '1',
    status: 'pending',
    appliedAt: new Date('2024-06-21'),
    coverLetter: 'I am excited to apply for the Senior Software Engineer position...'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '2',
    receiverId: '1',
    content: 'Thank you for your application. We would like to schedule an interview.',
    timestamp: new Date('2024-06-22'),
    read: false,
    jobId: '1'
  }
];
