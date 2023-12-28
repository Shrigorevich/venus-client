import {
  createSignal,
  createContext,
  useContext,
  createEffect,
  Accessor,
  Setter,
} from "solid-js";
import { GetSession } from "../api/identityApi";
import { IdentityError } from "../types/identity/IdentityError";
import { Session } from "../types/identity/Session";

interface AuthContextType {
  session: Accessor<Session | undefined>;
  setSession: Setter<Session | undefined>;
  updateSession: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider(props: any) {
  const [session, setSession] = createSignal<Session>();
  const [loading, setLoading] = createSignal<boolean>(true);
  const [error, setError] = createSignal<IdentityError>();

  const updateSession = async () => {
    const res = await GetSession();
    if (res.result) {
      setSession(res.session as Session);
    } else if (res.error) {
      setError(res.error as IdentityError);
    }
  };

  createEffect(() => {
    console.log("Request user session");
    setLoading(true);
    updateSession().finally(() => {
      setLoading(false);
    });
  });

  const sessionContext = [session, setSession, updateSession];

  return (
    <AuthContext.Provider value={{ session, setSession, updateSession }}>
      {loading() ? <>Loading...</> : props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
