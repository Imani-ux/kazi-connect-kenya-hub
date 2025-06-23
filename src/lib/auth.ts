
import { User } from '@/types';

// Mock authentication - in real app this would connect to backend
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'john_seeker',
    email: 'john@example.com',
    role: 'seeker',
    createdAt: new Date(),
    profile: {
      fullName: 'John Doe',
      phone: '+254712345678',
      location: 'Nairobi, Kenya',
      bio: 'Experienced software developer passionate about building impactful solutions.',
      skills: ['React', 'TypeScript', 'Node.js', 'Python'],
      experience: '5 years',
      education: 'BSc Computer Science - University of Nairobi'
    }
  },
  {
    id: '2',
    username: 'company_hr',
    email: 'hr@techcorp.co.ke',
    role: 'employer',
    createdAt: new Date(),
    profile: {
      fullName: 'Sarah Manager',
      phone: '+254722334455',
      location: 'Nairobi, Kenya',
      bio: 'HR Manager at TechCorp Kenya',
      companyName: 'TechCorp Kenya',
      companySize: '50-200',
      industry: 'Technology'
    }
  },
  {
    id: '3',
    username: 'admin',
    email: 'admin@kazika.co.ke',
    role: 'admin',
    createdAt: new Date(),
    profile: {
      fullName: 'Admin User',
      phone: '+254700123456',
      location: 'Nairobi, Kenya',
      bio: 'Platform Administrator'
    }
  }
];

export class AuthService {
  private static currentUser: User | null = null;

  static login(username: string, password: string): User | null {
    // Mock authentication
    const user = mockUsers.find(u => u.username === username);
    if (user && password === 'password123') {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  static logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  static getCurrentUser(): User | null {
    if (this.currentUser) return this.currentUser;
    
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return this.currentUser;
    }
    return null;
  }

  static register(userData: Partial<User>): User {
    const newUser: User = {
      id: Date.now().toString(),
      username: userData.username!,
      email: userData.email!,
      role: userData.role!,
      createdAt: new Date(),
      profile: userData.profile
    };
    mockUsers.push(newUser);
    return newUser;
  }
}
