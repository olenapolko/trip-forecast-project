import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import User from 'src/interfaces/user';
import { fetchUser, login as apiLogin, logout as apiLogout } from 'src/api/tripApi';

interface AuthContextType {
  user: User; 
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | any>(null);

  const login = async () => {
    try {
      await apiLogin(); 
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null); 
      window.location.href = '/'; 
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      const data = await fetchUser(); 
      if (data && data.isLoggedIn) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };

    initializeUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};