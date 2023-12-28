import Header from "../../components/Header/Header";
import { useAuth } from "../../contexts/AuthContext";
import "./Home.css";

function Home() {
  const { session } = useAuth();

  return (
    <div class="home">
      <Header />
      <h1>Home</h1>
      <h3>Identity ID: {session()?.identity.id}</h3>
      <h3>
        {session()?.identity.traits.name.first +
          " " +
          session()?.identity.traits.name.last}
      </h3>
    </div>
  );
}

export default Home;
