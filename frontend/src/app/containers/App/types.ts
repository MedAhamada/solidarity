/* --- STATE --- */
export interface AppState {
  currentUser: User | null;
  error: string | null;
  loading: boolean | null;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  password: string | null;
  enabled: boolean;
};

export type ContainerState = AppState;
