import {
  useState,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
} from "react";

interface AuthContextType {
  isAuth: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check localStorage for token or cookie
    const token = localStorage.getItem("token");

    if (token) {
      // if token exists, user is authenticated
      setIsAuth(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create react hook for global auth state
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
