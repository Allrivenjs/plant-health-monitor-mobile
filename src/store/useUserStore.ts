import create from 'zustand';

type AuthStatus = 'logged' | 'verifiying' | 'not-logged';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  status: AuthStatus;
  setUser: (user: User | null) => void;
  setStatus: (status: AuthStatus) => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  status: 'verifiying',
  setUser: (user: User | null) => set(state => ({user})),
  setStatus: (status: AuthStatus) => set(state => ({status})),
}));
