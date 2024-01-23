import { For } from "solid-js";
import { Currency } from "../types/Currency";

function MoneyInput(props: {
  currencies: Array<Currency>;
  label: string;
  name: string;
  form?: string;
  onInput?: (e: InputEvent) => void;
}) {
  return (
    <div>
      <label
        for={props.name}
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          step={0.1}
          name={props.name}
          id={props.name}
          min={0}
          form={props.form ?? ""}
          onInput={props.onInput}
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <For each={props.currencies}>
              {(curr) => <option value={curr.id}>{curr.code}</option>}
            </For>
          </select>
        </div>
      </div>
    </div>
  );
}

export default MoneyInput;
