import PurchaseWizard from "../../components/PurchaseWizard/PurchaseWizard";
import { useAuth } from "../../contexts/AuthContext";
import { Configuration } from "../../shared/types/Configuration";
import { createEffect, createSignal } from "solid-js";
import { GetConfig } from "../../api/venusApi";

function Accounting() {
  const { session } = useAuth();

  const [config, updateConfig] = createSignal<Configuration>({
    currencies: [],
    units: [],
  });

  createEffect(() => {
    GetConfig().then((res) => {
      updateConfig({
        ...config(),
        units: res.units,
        currencies: res.currencies,
      });
    });
  });

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
      <PurchaseWizard units={config().units} currencies={config().currencies} />
      {config().units.map((u) => (
        <span>{u.code}</span>
      ))}
    </div>
  );
}

export default Accounting;
