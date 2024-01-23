import { Show } from "solid-js";
import Welcome from "./pages/Welcome/Welcome";
import Accounting from "./pages/Accounting/Accounting";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { session } = useAuth();

  return (
    <div>
      <Show when={session()} fallback={<Welcome />}>
        <Accounting />
      </Show>
    </div>
  );
}

export default App;
