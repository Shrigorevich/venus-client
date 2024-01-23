import PurchaseWizard from "../../components/PurchaseWizard/PurchaseWizard";
import { useAuth } from "../../contexts/AuthContext";

function Accounting() {
  const { session } = useAuth();

  return (
    <div class="">
      <h1>Home</h1>
      <h3>Identity ID: {session()?.identity.id}</h3>
      <h3>
        {session()?.identity.traits.name.first +
          " " +
          session()?.identity.traits.name.last}
      </h3>
      <br />
      <PurchaseWizard />
    </div>
  );
}

export default Accounting;
