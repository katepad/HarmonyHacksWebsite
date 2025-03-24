// This is a simple authentication provider. In a real application, 
// you would want to implement proper authentication with a backend server.

const MOCK_USERNAME = 'admin';
const MOCK_PASSWORD = 'admin123';

export const login = (username: string, password: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      resolve();
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};

export const logout = (): void => {
  localStorage.removeItem('isAuthenticated');
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

const authProvider = {
  login: login,
  logout: logout,
  checkAuth: () => 
    localStorage.getItem("isAuthenticated") ? Promise.resolve() : Promise.reject(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
  