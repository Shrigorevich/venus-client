import { Show, createEffect } from "solid-js";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { session } = useAuth();

  return (
    <>
      <Show when={session()} fallback={<Welcome />}>
        <Home />
      </Show>
    </>
  );
}

export default App;
