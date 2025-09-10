const API_BASE_URL = '/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: any;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    console.log('Login attempt:', credentials.email);
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    console.log('📡 Response:', response.status);
    
    if (!response.ok) {
      const error = await response.text();
      console.error(' Login error:', error);
      throw new Error(error || 'Login failed');
    }
    
    return response.json();
  },

  signup: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) throw new Error('Signup failed');
    return response.json();
  },
};